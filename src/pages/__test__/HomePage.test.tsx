import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('App', () => {
  it('should render homepage with h1', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'React Application Template',
      })
    ).toBeInTheDocument();
  });
});
