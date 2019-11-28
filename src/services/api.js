import axios from 'axios';

const api = axios.create({
  baseURL: 'https://webchatapi.herokuapp.com',
});

export default api;
