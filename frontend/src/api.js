import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const fetchEmployees = () => API.get('/employees');
export const createEmployee = (employee) => API.post('/employees', employee);
export const updateEmployee = (id, updatedEmployee) => API.put(`/employees/${id}`, updatedEmployee);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);
