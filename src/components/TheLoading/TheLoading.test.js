import React from 'react';
import TestRenderer from 'react-test-renderer';

import TheLoading from './TheLoading';

describe('TheLoading', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<TheLoading />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
