import axios from 'axios';

console.log('apiUrl', process.env.apiUrl)

const config = {
  baseURL: process.env.apiUrl,
  timeout: 9000,
  headers: {
    'Content-Type': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
const api = axios.create(config);

export default api;