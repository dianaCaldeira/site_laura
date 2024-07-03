import axios from 'axios';

export const getBlogs = async () => {
  try {
    const response = await axios.get('/api/blog');
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const getBlog = async (blogId: string) => {
  try {
    const response = await axios.get(`/api/blog/${blogId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog post with ID ${blogId}:`, error);
    throw error;
  }
};