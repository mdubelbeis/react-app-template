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

  // Force Axios to use the Fetch API so requests can be intercepted by MSW
  // during Vitest tests running in jsdom. Without this, Axios selects the
  // XHR adapter and MSW's Node server does not intercept the request.
  adapter: 'fetch',
});
