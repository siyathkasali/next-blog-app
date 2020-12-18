import axios from 'axios';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

const { API_URL } = publicRuntimeConfig;

console.log('API_URL', API_URL)

const config = {
  baseURL: API_URL,
  timeout: 9000,
  headers: {
    'Content-Type': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
const api = axios.create(config);

export default api;