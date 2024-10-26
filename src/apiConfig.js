// src/apiConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for request/response handling
api.interceptors.request.use(
  (config) => {
    // Perform actions before the request is sent
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default api;
