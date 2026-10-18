import { render, screen } from '@testing-library/react';

import { http, HttpResponse } from 'msw/http';
import { server } from '../../mocks/server';
import { ExamplesList } from '../ExamplesList';
import { describe, expect, it } from 'vitest';
import { createQueryWrapper } from '../../test/testUtils';

describe('ExampleList', () => {
  it('displays a loading indicator while examples are loading', () => {
    render(<ExamplesList />, {
      wrapper: createQueryWrapper(),
    });

    expect(screen.getByRole('progressbar', { name: /loading examples/i })).toBeInTheDocument();
  });

  it('displays examples when the request succeeds', async () => {
    render(<ExamplesList />, {
      wrapper: createQueryWrapper(),
    });

    expect(await screen.findByText('Example One')).toBeInTheDocument();
    expect(screen.getByText('Example Two')).toBeInTheDocument();
  });

  it('displays an error message when the request fails', async () => {
    server.use(
      http.get('http://localhost:8080/api/examples', () => {
        return HttpResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      })
    );

    render(<ExamplesList />, {
      wrapper: createQueryWrapper(),
    });

    expect(await screen.findByText(/unable to load examples/i)).toBeInTheDocument();
  });
});
