import React from 'react';
import TestRenderer from 'react-test-renderer';

import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  it('matches snapshot', () => {
    const character = {
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      species: 'Human',
      status: 'Alive',
    };
    const testRenderer = TestRenderer.create(
      <CharacterCard character={character} />
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
