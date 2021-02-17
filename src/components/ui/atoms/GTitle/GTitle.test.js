import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import GTitle from './GTitle';

describe('GTitle', () => {
  describe('change color', () => {
    it('renders white when no color is passed', () => {
      const { container } = render(<GTitle>inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--white');
    });

    it('renders darkest-grey', () => {
      const { container } = render(
        <GTitle color="darkest-grey">inGaia</GTitle>
      );
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--darkest-grey');
    });

    it('renders light-grey', () => {
      const { container } = render(<GTitle color="light-grey">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--light-grey');
    });

    it('renders lime-green', () => {
      const { container } = render(<GTitle color="lime-green">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--lime-green');
    });

    it('renders white', () => {
      const { container } = render(<GTitle color="white">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--white');
    });
  });

  describe('change family', () => {
    it('renders Nunito when no family is passed', () => {
      const { container } = render(<GTitle>inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--nunito');
    });

    it('renders Seravek', () => {
      const { container } = render(<GTitle family="seravek">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--seravek');
    });

    it('renders Nunito', () => {
      const { container } = render(<GTitle family="nunito">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--nunito');
    });
  });

  describe('change spacing', () => {
    it('renders normal when no spacing is passed', () => {
      const { container } = render(<GTitle>inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--space-normal');
    });

    it('renders large', () => {
      const { container } = render(<GTitle spacing="large">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--space-large');
    });

    it('renders normal', () => {
      const { container } = render(<GTitle spacing="normal">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--space-normal');
    });
  });

  describe('change tag', () => {
    it('renders h1 when no tag is passed', () => {
      const testRenderer = TestRenderer.create(<GTitle>inGaia</GTitle>);
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders h2', () => {
      const testRenderer = TestRenderer.create(
        <GTitle tag="h2">inGaia</GTitle>
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders h3', () => {
      const testRenderer = TestRenderer.create(
        <GTitle tag="h3">inGaia</GTitle>
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders h4', () => {
      const testRenderer = TestRenderer.create(
        <GTitle tag="h4">inGaia</GTitle>
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders h5', () => {
      const testRenderer = TestRenderer.create(
        <GTitle tag="h5">inGaia</GTitle>
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders h6', () => {
      const testRenderer = TestRenderer.create(
        <GTitle tag="h6">inGaia</GTitle>
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders h1', () => {
      const testRenderer = TestRenderer.create(
        <GTitle tag="h1">inGaia</GTitle>
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });
  });

  describe('change weight', () => {
    it('renders normal when no weight is passed', () => {
      const { container } = render(<GTitle>inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--normal');
    });

    it('renders bold', () => {
      const { container } = render(<GTitle weight="bold">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--bold');
    });

    it('renders normal', () => {
      const { container } = render(<GTitle weight="normal">inGaia</GTitle>);
      const title = container.querySelector('.g-title');

      expect(title.classList).toContain('g-title--normal');
    });
  });

  it('renders children', () => {
    const { container } = render(<GTitle>inGaia</GTitle>);
    const title = container.querySelector('.g-title');

    expect(title.textContent).toBe('inGaia');
  });

  it('renders classes', () => {
    const { container } = render(<GTitle classes="rick-title">inGaia</GTitle>);
    const title = container.querySelector('.g-title');

    expect(title.classList).toContain('rick-title');
  });
});
