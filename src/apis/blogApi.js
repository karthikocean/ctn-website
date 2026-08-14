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

  const rawImage = item.featuredImage || item.image || item.banner;
  const featuredImage = formatBlogImage(rawImage);

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
    excerpt: item.excerpt || item.description || (typeof item.content === 'string' ? item.content.substring(0, 160) + '...' : '') || 'Read our latest business insights.',
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
    try {
      const res = await api.get(`/blogs/${idOrSlug}`);
      if (res.status === 200 && res.data?.data) {
        return {
          status: true,
          data: normalizeBlogItem(res.data.data),
        };
      }
    } catch (e) {
      // API fallback
    }

    const allRes = await this.getBlogs();
    if (allRes.status && allRes.data.length > 0) {
      const found = allRes.data.find((b) => b.slug === idOrSlug || b.id === idOrSlug);
      if (found) {
        return { status: true, data: found };
      }
    }
    return { status: false, data: null, message: 'Blog article not found' };
  };
}

const blogApi = new BlogApi();
export default blogApi;
export const { getBlogs, getBlogByIdOrSlug } = blogApi;
