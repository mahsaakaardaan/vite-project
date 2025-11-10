import axios from 'axios';

// const BASE_URL = 'http://localhost:3335/';
const BASE_URL = 'http://46.34.163.193:3335';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const api = axios.create({
  // .. where we make our configurations
  baseURL: BASE_URL,
  withCredentials: true
});

// Where you would set stuff like your 'Authorization' header, etc ...
api.defaults.headers.post['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

export default api;
