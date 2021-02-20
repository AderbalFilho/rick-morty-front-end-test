import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { GCard, GText, GTitle } from '@ui';
import { GlobalContext } from '@contexts/GlobalContext';

import './CharacterCard.scss';

function CharacterCard({ classes, classesImg, character, variant }) {
  const className = classNames(
    'character-card',
    variant === 'normal' && 'character-card--hoverable',
    classes
  );
  const classNameImg = classNames(
    'character-card__img',
    character.status === 'Dead' && 'character-card__img--dead',
    classesImg
  );
  const { setModalCharacter } = useContext(GlobalContext);

  function handleClick() {
    if (variant !== 'modal') {
      setModalCharacter(character);
    }
  }

  return (
    <GCard classes={className} onClick={handleClick}>
      <img
        src={character.image}
        alt={character.name}
        className={classNameImg}
      />
      <div className="character-card__text-container">
        <GTitle family="seravek" weight="bold" classes="character-card__title">
          {character.name}
        </GTitle>
        <GText family="seravek" classes="character-card__subtitle">
          {character.species}
        </GText>
      </div>
    </GCard>
  );
}

CharacterCard.defaultProps = {
  variant: 'normal',
};

CharacterCard.propTypes = {
  classes: PropTypes.string,
  classesImg: PropTypes.string,
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(['normal', 'modal']),
};

export default CharacterCard;
