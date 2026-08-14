import { api, SERVER_URL } from '../config/config';
import event1 from '../assets/event1.jpg';

export const formatEventImage = (imagePath) => {
  if (!imagePath) return event1;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  if (imagePath.startsWith('/')) {
    return `${SERVER_URL}${imagePath}`;
  }
  return `${SERVER_URL}/${imagePath}`;
};

export const normalizeEventItem = (item, index = 0) => {
  const id = item._id || item.id || String(index + 1);
  const title = item.title || 'Untitled Event';
  const description = item.content || item.description || 'Join us for an exclusive business event.';

  let formattedDate = 'Upcoming Event';
  if (item.fromDate || item.date || item.createdAt) {
    try {
      const d = new Date(item.fromDate || item.date || item.createdAt);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      }
    } catch (e) {
      formattedDate = String(item.fromDate || item.date || item.createdAt);
    }
  }

  const image = formatEventImage(item.image);

  const videoUrl = item.video ? formatEventImage(item.video) : null;
  const videos = videoUrl ? [videoUrl] : [];

  let highlights = [];
  if (Array.isArray(item.stallConfig?.stalls) && item.stallConfig.stalls.length > 0) {
    highlights = item.stallConfig.stalls.map((s) => `${s.name} (${s.size || 'Standard'})`);
  } else {
    highlights = ['Keynote Speakers', 'Business Networking', 'Interactive Sessions'];
  }

  return {
    id,
    title,
    description,
    image,
    date: formattedDate,
    time: item.time || (item.fromTime ? `${item.fromTime}${item.toTime ? ' - ' + item.toTime : ''}` : ''),
    location: item.location || 'Chennai, India',
    highlights,
    photos: item.photos || [],
    videos,
    announcementType: item.announcementType || 'Event',
    raw: item,
  };
};

class EventApi {
  getEvents = async () => {
    try {
      const response = await api.get('/announcements');
      if (response.status === 200) {
        const rawData = response.data?.data || (Array.isArray(response.data) ? response.data : []);
        const eventsArray = Array.isArray(rawData) ? rawData : [];
        const normalized = eventsArray.map((item, idx) => normalizeEventItem(item, idx));
        return {
          status: true,
          data: normalized,
          response: response.data,
        };
      }
      return { status: false, data: [], message: 'Failed to fetch events' };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to load events. Please try again later.';
      return {
        status: false,
        data: [],
        message: errorMessage,
        error,
      };
    }
  };

  getEventById = async (id) => {
    try {
      const res = await api.get(`/announcements/${id}`);
      if (res.status === 200 && res.data?.data) {
        return {
          status: true,
          data: normalizeEventItem(res.data.data),
        };
      }
    } catch (e) {
      // API fallback
    }

    const allRes = await this.getEvents();
    if (allRes.status && allRes.data.length > 0) {
      const found = allRes.data.find((ev) => ev.id === id);
      if (found) {
        return { status: true, data: found };
      }
    }
    return { status: false, data: null, message: 'Event not found' };
  };
}

const eventApi = new EventApi();
export default eventApi;
export const { getEvents, getEventById } = eventApi;
