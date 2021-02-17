import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import GButton from './GButton';

describe('GButton', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<GButton>inGaia</GButton>);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(<GButton>inGaia</GButton>);
    const button = container.querySelector('.g-button');

    expect(button.textContent).toBe('inGaia');
  });

  it('renders classes', () => {
    const { container } = render(
      <GButton classes="button-search">inGaia</GButton>
    );
    const button = container.querySelector('.g-button');

    expect(button.classList).toContain('button-search');
  });
});
