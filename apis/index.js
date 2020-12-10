import axios from 'axios';
import { URL } from '../constants/index';

const config = {
  baseURL: URL,
  timeout: 9000,
  headers: {
    'Content-Type': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
const api = axios.create(config);

export default api;