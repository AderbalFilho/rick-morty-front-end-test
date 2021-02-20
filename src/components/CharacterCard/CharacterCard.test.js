import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import CharacterCard from './CharacterCard';
import { GlobalStorage } from '@contexts/GlobalContext';

describe('CharacterCard', () => {
  const character = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    species: 'Human',
    status: 'Alive',
  };

  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(
      <GlobalStorage>
        <CharacterCard character={character} />
      </GlobalStorage>
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  describe('change variant', () => {
    it('renders normal when no variant is passed', () => {
      const { container } = render(
        <GlobalStorage>
          <CharacterCard character={character} />
        </GlobalStorage>
      );
      const characterCard = container.querySelector('.character-card');

      expect(characterCard.classList).toContain('character-card--hoverable');
    });

    it('renders modal', () => {
      const { container } = render(
        <GlobalStorage>
          <CharacterCard character={character} variant="modal" />
        </GlobalStorage>
      );
      const characterCard = container.querySelector('.character-card');

      expect(characterCard.classList).not.toContain(
        'character-card--hoverable'
      );
    });

    it('renders normal', () => {
      const { container } = render(
        <GlobalStorage>
          <CharacterCard character={character} variant="normal" />
        </GlobalStorage>
      );
      const characterCard = container.querySelector('.character-card');

      expect(characterCard.classList).toContain('character-card--hoverable');
    });
  });

  it('renders classes', () => {
    const { container } = render(
      <GlobalStorage>
        <CharacterCard character={character} classes="card-modal" />
      </GlobalStorage>
    );
    const card = container.querySelector('.character-card');

    expect(card.classList).toContain('card-modal');
  });

  it('renders classesImg', () => {
    const { container } = render(
      <GlobalStorage>
        <CharacterCard character={character} classesImg="img-modal" />
      </GlobalStorage>
    );
    const card = container.querySelector('.character-card__img');

    expect(card.classList).toContain('img-modal');
  });
});
