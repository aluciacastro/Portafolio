import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Servicios de Company
export const companyService = {
  getInfo: () => api.get('/company'),
  getStats: () => api.get('/company/stats'),
};

// Servicios de Services
export const servicesService = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
};

// Servicios de Projects
export const projectsService = {
  getAll: (params) => api.get('/projects', { params }),
  getById: (id) => api.get(`/projects/${id}`),
  getFeatured: () => api.get('/projects/featured'),
  getCategories: () => api.get('/projects/categories/list'),
};

// Servicios de Contact
export const contactService = {
  sendMessage: (data) => api.post('/contact', data),
};

export default api;
