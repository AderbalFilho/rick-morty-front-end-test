import React from 'react';
import TestRenderer from 'react-test-renderer';

import SearchSection from './SearchSection';
import { GlobalStorage } from '@contexts/GlobalContext';

describe('SearchSection', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(
      <GlobalStorage>
        <SearchSection />
      </GlobalStorage>
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
