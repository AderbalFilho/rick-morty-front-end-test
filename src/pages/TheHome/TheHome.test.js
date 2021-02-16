import React from 'react';
import TestRenderer from 'react-test-renderer';

import TheHome from './TheHome';

describe('TheHome', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<TheHome />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
