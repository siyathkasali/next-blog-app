import api from './index';

export const getPost = async (postId) => {
  const response = await api.get(`/posts/${postId}`);

  return response.data;
};