// src/api/apiService.js
import api from './apiConfig';

// Example: Get data from an endpoint
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};

// Example: Post data to an endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Failed to post data:', error);
    throw error;
  }
};

// Example: Update data on an endpoint
export const updateData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Failed to update data:', error);
    throw error;
  }
};

// Example: Delete data from an endpoint
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Failed to delete data:', error);
    throw error;
  }
};
