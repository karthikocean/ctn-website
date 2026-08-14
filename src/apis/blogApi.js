import { api, SERVER_URL } from '../config/config';
import event1 from '../assets/event1.jpg';

export const formatBlogImage = (imagePath) => {
  if (!imagePath) return event1;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  if (imagePath.startsWith('/')) {
    return `${SERVER_URL}${imagePath}`;
  }
  return `${SERVER_URL}/${imagePath}`;
};

const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
};

export const normalizeBlogItem = (item, index = 0) => {
  const id = item._id || item.id || String(index + 1);
  const title = item.title || 'Untitled Blog Article';
  const slug = item.slug || title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-') || id;
  
  let formattedDate = 'Recent Post';
  if (item.publishedDate || item.date || item.createdAt) {
    try {
      const d = new Date(item.publishedDate || item.date || item.createdAt);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      }
    } catch (e) {
      formattedDate = String(item.publishedDate || item.date || item.createdAt);
    }
  }

  // Handle the images array from the backend API
  const rawImage = (item.images && item.images.length > 0) ? item.images[0] : (item.featuredImage || item.image || item.banner);
  const featuredImage = formatBlogImage(rawImage);

  // Clean HTML text for card excerpts
  const getExcerpt = () => {
    if (item.excerpt && item.excerpt.trim()) return stripHtml(item.excerpt);
    if (item.shortDescription && item.shortDescription.trim()) return stripHtml(item.shortDescription);
    if (typeof item.description === 'string' && item.description.trim()) return stripHtml(item.description);
    if (typeof item.content === 'string' && item.content.trim()) return stripHtml(item.content);
    return 'Read our latest business insights.';
  };
  const rawExcerpt = getExcerpt();
  const excerpt = rawExcerpt.length > 160 ? rawExcerpt.substring(0, 160) + '...' : rawExcerpt;

  let contentBlocks = [];
  if (Array.isArray(item.content)) {
    contentBlocks = item.content;
  } else if (typeof item.content === 'string' && item.content.trim()) {
    contentBlocks = [{ type: 'paragraph', text: item.content }];
  } else if (typeof item.description === 'string' && item.description.trim()) {
    contentBlocks = [{ type: 'paragraph', text: item.description }];
  }

  return {
    id,
    slug,
    title,
    category: item.category || item.categoryName || item.announcementType || 'Business Insights',
    excerpt,
    author: item.author || (item.createdBy ? 'Trusted Network Team' : 'Trusted Network Editorial'),
    publishedDate: formattedDate,
    readTime: item.readTime || '5 min read',
    featuredImage,
    image: featuredImage,
    additionalImages: item.additionalImages || [],
    relatedIds: item.relatedIds || [],
    content: contentBlocks,
    raw: item,
  };
};

class BlogApi {
  getBlogs = async () => {
    try {
      const response = await api.get('/blogs');
      if (response.status === 200) {
        const rawData = response.data?.data || (Array.isArray(response.data) ? response.data : []);
        const blogsArray = Array.isArray(rawData) ? rawData : [];
        const normalized = blogsArray.map((item, idx) => normalizeBlogItem(item, idx));
        return {
          status: true,
          data: normalized,
          response: response.data,
        };
      }
      return { status: false, data: [], message: 'Failed to fetch blogs' };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to load blogs. Please try again later.';
      return {
        status: false,
        data: [],
        message: errorMessage,
        error,
      };
    }
  };

  getBlogByIdOrSlug = async (idOrSlug) => {
    // 1. Fetch all blogs first to resolve slug/id parameter to database ID
    const allRes = await this.getBlogs();
    if (allRes.status && allRes.data.length > 0) {
      const found = allRes.data.find((b) => b.slug === idOrSlug || b.id === idOrSlug);
      if (found) {
        try {
          // Query backend detail API using actual database ID
          const res = await api.get(`/blogs/${found.id}`);
          if (res.status === 200 && res.data?.data) {
            return {
              status: true,
              data: normalizeBlogItem(res.data.data),
            };
          }
        } catch (e) {
          // Fallback: if ID query fails, return list item directly
          return { status: true, data: found };
        }
        return { status: true, data: found };
      }
    }

    // 2. Direct API call fallback (if parameter is already a database ID)
    try {
      const res = await api.get(`/blogs/${idOrSlug}`);
      if (res.status === 200 && res.data?.data) {
        return {
          status: true,
          data: normalizeBlogItem(res.data.data),
        };
      }
    } catch (e) {
      // Direct API query failed
    }

    return { status: false, data: null, message: 'Blog article not found' };
  };
}

const blogApi = new BlogApi();
export default blogApi;
export const { getBlogs, getBlogByIdOrSlug } = blogApi;
