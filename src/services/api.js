import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://rocketshoes-mock-server.localtunnel.me',
  // baseURL: 'http://0.0.0.0:8000',
  // baseURL: 'http://localhost:8000',
  baseURL: 'http://192.168.0.105:8000',
});

export default api;
