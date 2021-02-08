import axios from 'axios';
import querystring from 'query-string';

const client = axios.create({
  baseURL: '',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => querystring.stringify(params),
  timeout: 20000,
  withCredentials: false,
});

function getDefaultHeaders() {
  return {
    'Authorization': 'Bearer ' + cookieUtil.getCookie('token')
  };
}

client.interceptors.request.use((config) => {
  Object.assign(config.headers, getDefaultHeaders());
  return config;
});

client.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (e) => {
    throw e;
  }
);


export default client;