import { useQuery } from '@tanstack/react-query';
import { getExamples } from '../services/ExampleService';

export function useExamples() {
  return useQuery({
    queryKey: ['examples'],
    queryFn: getExamples,
  });
}
