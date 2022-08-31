import axios from 'axios';
import {API_V1_URL} from '@/utils/constants';

const http = axios.create({
  baseURL: API_V1_URL,
  timeout: 30000,
});

export {http};
