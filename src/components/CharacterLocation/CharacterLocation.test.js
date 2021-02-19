import React from 'react';
import TestRenderer from 'react-test-renderer';

import CharacterLocation from './CharacterLocation';

describe('CharacterLocation', () => {
  it('matches snapshot', () => {
    const location = {
      type: 'Planet',
      name: 'Earth (C-137)',
      dimension: 'Dimension C-137',
      residents: [{ id: '1' }, { id: '2' }, { id: '3' }],
    };
    const testRenderer = TestRenderer.create(
      <CharacterLocation location={location} />
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
