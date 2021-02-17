import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import GText from './GText';

describe('GText', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<GText>inGaia</GText>);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  describe('change color', () => {
    it('renders white when no color is passed', () => {
      const { container } = render(<GText>inGaia</GText>);
      const text = container.querySelector('.g-text');

      expect(text.classList).toContain('g-text--white');
    });

    it('renders darkest-grey', () => {
      const { container } = render(<GText color="darkest-grey">inGaia</GText>);
      const text = container.querySelector('.g-text');

      expect(text.classList).toContain('g-text--darkest-grey');
    });

    it('renders light-grey', () => {
      const { container } = render(<GText color="light-grey">inGaia</GText>);
      const text = container.querySelector('.g-text');

      expect(text.classList).toContain('g-text--light-grey');
    });

    it('renders white', () => {
      const { container } = render(<GText color="white">inGaia</GText>);
      const text = container.querySelector('.g-text');

      expect(text.classList).toContain('g-text--white');
    });
  });

  describe('change family', () => {
    it('renders Nunito when no family is passed', () => {
      const { container } = render(<GText>inGaia</GText>);
      const text = container.querySelector('.g-text');

      expect(text.classList).toContain('g-text--nunito');
    });

    it('renders Seravek', () => {
      const { container } = render(<GText family="seravek">inGaia</GText>);
      const text = container.querySelector('.g-text');

      expect(text.classList).toContain('g-text--seravek');
    });

    it('renders Nunito', () => {
      const { container } = render(<GText family="nunito">inGaia</GText>);
      const text = container.querySelector('.g-text');

      expect(text.classList).toContain('g-text--nunito');
    });
  });

  it('renders children', () => {
    const { container } = render(<GText>inGaia</GText>);
    const text = container.querySelector('.g-text');

    expect(text.textContent).toBe('inGaia');
  });

  it('renders classes', () => {
    const { container } = render(<GText classes="rick-text">inGaia</GText>);
    const text = container.querySelector('.g-text');

    expect(text.classList).toContain('rick-text');
  });
});
