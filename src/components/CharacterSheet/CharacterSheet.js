import React, { useContext } from 'react';

import { GButton, GCard, GModal, GText, GTitle } from '@ui';
import CharacterInfo from '@components/CharacterInfo';
import { GlobalContext } from '@contexts/GlobalContext';

import './CharacterSheet.scss';

function CharacterSheet() {
  const { modalCharacter, setModalCharacter } = useContext(GlobalContext);

  return (
    <GModal>
      <GCard variant="sheet" classes="character-sheet__card">
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
            className="character-sheet__sheet-img"
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
        <div className="character-sheet__info-content">
          <CharacterInfo />
        </div>
      </GCard>
    </GModal>
  );
}

export default CharacterSheet;
