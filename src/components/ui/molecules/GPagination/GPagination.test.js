import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import GPagination from './GPagination';
import { GlobalStorage } from '@contexts/GlobalContext';

describe('GPagination', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(
      <GlobalStorage>
        <GPagination />
      </GlobalStorage>
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  it('renders classes', () => {
    const { container } = render(
      <GlobalStorage>
        <GPagination classes="pagination-mobile" />
      </GlobalStorage>
    );
    const pagination = container.querySelector('.g-pagination');

    expect(pagination.classList).toContain('pagination-mobile');
  });
});
