import api from './index';

export const getUserDetails = async (params = {}) => {
  const response = await api.get('/users/', { params });

  return response.data;
};