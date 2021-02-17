import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import GInput from './GInput';

describe('GInput', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<GInput />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  it('renders classes', () => {
    const { container } = render(<GInput classes="input-search" />);
    const card = container.querySelector('.g-input');

    expect(card.classList).toContain('input-search');
  });
});
