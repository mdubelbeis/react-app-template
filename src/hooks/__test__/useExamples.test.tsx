import { renderHook, waitFor } from '@testing-library/react';
import { useExamples } from '../useExamples';
import { describe, expect, it } from 'vitest';
import { http, HttpResponse } from 'msw/http';
import { server } from '../../mocks/server';
import { createQueryWrapper } from '../../test/testUtils';

describe('useExamples', () => {
  it('returns examples from the MSW API', async () => {
    const { result } = renderHook(() => useExamples(), {
      wrapper: createQueryWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual([
      { id: 1, name: 'Example One' },
      { id: 2, name: 'Example Two' },
    ]);
  });

  it('returns an error when the API request fails', async () => {
    server.use(
      http.get('http://localhost:8080/api/examples', () => {
        return HttpResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      })
    );

    const { result } = renderHook(() => useExamples(), {
      wrapper: createQueryWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    expect(result.current.error).toBeDefined();
  });
});
