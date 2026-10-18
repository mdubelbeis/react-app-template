import { httpClient } from '../api/httpClient';

export interface Example {
  id: number;
  name: string;
}

export async function getExamples(): Promise<Example[]> {
  const response = await httpClient.get<Example[]>('/examples');

  return response.data;
}
