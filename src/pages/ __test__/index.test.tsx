import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Routing from '..';

describe('Routing', () => {
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/non-existing-route']}>
        <Routing />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404');
  });
});
