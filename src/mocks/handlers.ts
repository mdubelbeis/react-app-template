import { http, HttpResponse } from 'msw/http';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  http.get(`${baseURL}/examples`, () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Example One',
      },
      {
        id: 2,
        name: 'Example Two',
      },
    ]);
  }),
];
