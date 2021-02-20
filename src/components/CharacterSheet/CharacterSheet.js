import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { GButton, GCard, GModal, GText, GTitle } from '@ui';
import CharacterInfo from '@components/CharacterInfo';
import CharacterCard from '@components/CharacterCard';
import { GlobalContext } from '@contexts/GlobalContext';

import './CharacterSheet.scss';

function CharacterSheet() {
  const { modalCharacter, setModalCharacter } = useContext(GlobalContext);
  const className = classNames(
    'character-sheet__sheet-img',
    modalCharacter.status === 'Dead' && 'character-sheet__sheet-img--dead'
  );

  return (
    <GModal classes="character-sheet">
      <GCard variant="sheet" classes="character-sheet__card">
        <div className="character-sheet__card-desktop">
          <div className="character-sheet__image-blurred-container">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src={modalCharacter.image}
              alt="image blurred"
              className="character-sheet__image-blurred"
            />
          </div>
          <GButton
            classes="character-sheet__close"
            onClick={() => setModalCharacter(null)}
          >
            Close
          </GButton>
          <GCard
            variant="img-sheet"
            classes="character-sheet__sheet-img-container"
          >
            <img
              src={modalCharacter.image}
              alt={modalCharacter.name}
              className={className}
            />
            <div className="character-sheet__text-container">
              <GTitle
                family="seravek"
                weight="bold"
                classes="character-sheet__text-container-title"
              >
                {modalCharacter.name}
              </GTitle>
              <GText
                family="seravek"
                classes="character-sheet__text-container-subtitle"
              >
                {modalCharacter.species}
              </GText>
            </div>
          </GCard>
        </div>
        <div className="character-sheet__card-mobile">
          <FontAwesomeIcon
            icon={faTimes}
            className="character-sheet__times"
            onClick={() => setModalCharacter(null)}
          />
          <CharacterCard
            character={modalCharacter}
            variant="modal"
            classes="character-sheet__card-img-text"
            classesImg="character-sheet__card-img"
          />
          <div className="character-sheet__gray-box"></div>
        </div>
        <div className="character-sheet__info-content">
          <CharacterInfo />
        </div>
      </GCard>
    </GModal>
  );
}

export default CharacterSheet;
