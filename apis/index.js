import axios from 'axios';

const config = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 9000,
  headers: {
    'Content-Type': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
const api = axios.create(config);

export default api;