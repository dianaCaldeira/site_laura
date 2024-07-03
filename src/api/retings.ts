import axios from 'axios';

export const getRatings = async (blogId: string) => {
  try {
    const response = await axios.get(`/api/ratings?blogId=${blogId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ratings for blog post with ID ${blogId}:`, error);
    throw error;
  }
};

export const addRating = async (blogId: string, ratingData: any) => {
  try {
    const response = await axios.post(`/api/ratings?blogId=${blogId}`, ratingData);
    return response.data;
  } catch (error) {
    console.error(`Error adding rating to blog post with ID ${blogId}:`, error);
    throw error;
  }
};