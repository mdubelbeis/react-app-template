import axios from 'axios';

/*
 Centralized place for things such as: 
  - API base URL, headers
  - Authentication handling 
  - Interceptors
  - common HTTP behavior. 
*/

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
