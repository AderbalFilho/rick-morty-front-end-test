import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { GCard, GText, GTitle } from '@ui';

import './CharacterCard.scss';

function CharacterCard({ character }) {
  const className = classNames(
    'character-card__img',
    character.status === 'Dead' && 'character-card__img--dead'
  );

  return (
    <>
      <GCard classes="character-card">
        <img src={character.image} alt={character.name} className={className} />
        <div className="character-card__text-container">
          <GTitle
            family="seravek"
            weight="bold"
            classes="character-card__title"
          >
            {character.name}
          </GTitle>
          <GText family="seravek" classes="character-card__subtitle">
            {character.species}
          </GText>
        </div>
      </GCard>
    </>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;
