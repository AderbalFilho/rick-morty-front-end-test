import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import GCard from './GCard';

describe('GCard', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<GCard>inGaia</GCard>);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  describe('change variant', () => {
    it('renders normal when no variant is passed', () => {
      const { container } = render(<GCard>inGaia</GCard>);
      const card = container.querySelector('.g-card');

      expect(card.classList).toContain('g-card--normal');
    });

    it('renders loading', () => {
      const { container } = render(<GCard variant="loading">inGaia</GCard>);
      const card = container.querySelector('.g-card');

      expect(card.classList).toContain('g-card--loading');
    });

    it('renders sheet', () => {
      const { container } = render(<GCard variant="sheet">inGaia</GCard>);
      const card = container.querySelector('.g-card');

      expect(card.classList).toContain('g-card--sheet');
    });

    it('renders img-sheet', () => {
      const { container } = render(<GCard variant="img-sheet">inGaia</GCard>);
      const card = container.querySelector('.g-card');

      expect(card.classList).toContain('g-card--img-sheet');
    });

    it('renders normal', () => {
      const { container } = render(<GCard variant="normal">inGaia</GCard>);
      const card = container.querySelector('.g-card');

      expect(card.classList).toContain('g-card--normal');
    });
  });

  it('renders children', () => {
    const { container } = render(<GCard>inGaia</GCard>);
    const card = container.querySelector('.g-card');

    expect(card.textContent).toBe('inGaia');
  });

  it('renders classes', () => {
    const { container } = render(<GCard classes="rick-card">inGaia</GCard>);
    const card = container.querySelector('.g-card');

    expect(card.classList).toContain('rick-card');
  });
});
