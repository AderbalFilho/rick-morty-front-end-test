import React from 'react';
import TestRenderer from 'react-test-renderer';

import TheHome from './TheHome';
import { GlobalStorage } from '@contexts/GlobalContext';

describe('TheHome', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(
      <GlobalStorage>
        <TheHome />
      </GlobalStorage>
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
