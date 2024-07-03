import axios from 'axios';

export const getComments = async (blogId: string) => {
  try {
    const response = await axios.get(`/api/comments?blogId=${blogId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for blog post with ID ${blogId}:`, error);
    throw error;
  }
};

export const addComment = async (blogId: string, commentData: any) => {
  try {
    const response = await axios.post(`/api/comments?blogId=${blogId}`, commentData);
    return response.data;
  } catch (error) {
    console.error(`Error adding comment to blog post with ID ${blogId}:`, error);
    throw error;
  }
};