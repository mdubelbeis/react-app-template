import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { routes } from '../router';
import { describe, expect, it } from 'vitest';

describe('router', () => {
  it('renders the home page at the root route', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /react application template/i,
      })
    ).toBeInTheDocument();
  });

  it('renders the not found page for an unknown route', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/unknown'],
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /page not found/i,
      })
    ).toBeInTheDocument();
  });
});
