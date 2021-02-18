import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import GInput from './GInput';

describe('GInput', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<GInput />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  it('fire event when input text changed', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <GInput type="text" placeholder="Search characters" change={onChange} />
    );

    fireEvent.change(getByPlaceholderText(/Search characters/i), {
      target: { value: 'inGaia' },
    });

    expect(onChange).toHaveBeenCalled();
  });

  it('renders classes', () => {
    const { container } = render(<GInput type="text" classes="input-search" />);
    const card = container.querySelector('.g-input');

    expect(card.classList).toContain('input-search');
  });
});
