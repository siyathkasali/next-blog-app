import api from './index';

export const getPosts = async (params = {}) => {
  const response = await api.get('/posts/', { params });

  return response.data;
};