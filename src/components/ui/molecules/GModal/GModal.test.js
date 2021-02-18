import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import GModal from './GModal';

describe('GModal', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<GModal>inGaia</GModal>);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(<GModal>inGaia</GModal>);
    const modal = container.querySelector('.g-modal');

    expect(modal.textContent).toBe('inGaia');
  });

  it('renders classes', () => {
    const { container } = render(
      <GModal classes="modal-loading">inGaia</GModal>
    );
    const modal = container.querySelector('.g-modal');

    expect(modal.classList).toContain('modal-loading');
  });
});
