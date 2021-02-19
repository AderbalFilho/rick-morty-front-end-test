import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUserFriends } from '@fortawesome/free-solid-svg-icons';

import { GCard, GModal, GText, GTitle } from '@ui';
import CharacterCard from '@components/CharacterCard';
import { GlobalContext } from '@contexts/GlobalContext';

import './CharacterSheetMobile.scss';

function CharacterSheetMobile() {
  const { modalCharacter, setModalCharacter } = useContext(GlobalContext);

  return (
    <GModal>
      <GCard variant="sheet" classes="character-sheet-mobile__card">
        <div className="character-sheet-mobile__gray-box"></div>
        <FontAwesomeIcon
          icon={faTimes}
          className="character-sheet-mobile__times"
          onClick={() => setModalCharacter(null)}
        />
        <CharacterCard
          character={modalCharacter}
          classes="character-sheet-mobile__card-img"
        />
        <div className="character-sheet-mobile__info-content">
          <GTitle
            color="lime-green"
            spacing="large"
            classes="info-content-mobile__title"
          >
            About
          </GTitle>
          <GText classes="info-content-mobile__about-text">{`${
            modalCharacter.name
          } is a ${modalCharacter.gender.toLowerCase()} ${modalCharacter.species.toLowerCase()}. ${
            modalCharacter.gender.toLowerCase() === 'male'
              ? 'He'
              : modalCharacter.gender.toLowerCase() === 'female'
              ? 'She'
              : 'It'
          } is ${
            modalCharacter.status === 'Alive'
              ? `${modalCharacter.status.toLowerCase()} and well`
              : modalCharacter.status.toLowerCase()
          }. Last seen in ${
            modalCharacter.episode[modalCharacter.episode.length - 1].air_date
          }.`}</GText>
          <GTitle
            color="lime-green"
            spacing="large"
            classes="info-content-mobile__title info-content-mobile__title--origin"
          >
            Origin
          </GTitle>
          <GTitle
            tag="h2"
            color="darkest-grey"
            classes="info-content-mobile__title-planet"
          >
            {modalCharacter.origin.type}
          </GTitle>
          <GTitle tag="h3" classes="info-content-mobile__title-planet-name">
            {modalCharacter.origin.name}
          </GTitle>
          <GTitle
            tag="h4"
            color="light-grey"
            classes="info-content-mobile__title-planet-dimension"
          >
            {modalCharacter.origin.dimension}
          </GTitle>
          <div className="info-content-mobile__residents">
            <FontAwesomeIcon icon={faUserFriends} />
            <GText
              color="darkest-grey"
              classes="info-content-mobile__residents-text"
            >
              {modalCharacter.origin.residents.length} residents
            </GText>
          </div>
          <GTitle
            color="lime-green"
            spacing="large"
            classes="info-content-mobile__title info-content-mobile__title--location"
          >
            Location
          </GTitle>
          <GTitle
            tag="h2"
            color="darkest-grey"
            classes="info-content-mobile__title-planet"
          >
            {modalCharacter.location.type}
          </GTitle>
          <GTitle tag="h3" classes="info-content-mobile__title-planet-name">
            {modalCharacter.location.name}
          </GTitle>
          <GTitle
            tag="h4"
            color="light-grey"
            classes="info-content-mobile__title-planet-dimension"
          >
            {modalCharacter.location.dimension}
          </GTitle>
          <div className="info-content-mobile__residents">
            <FontAwesomeIcon icon={faUserFriends} />
            <GText
              color="darkest-grey"
              classes="info-content-mobile__residents-text"
            >
              {modalCharacter.location.residents.length} residents
            </GText>
          </div>
        </div>
      </GCard>
    </GModal>
  );
}

export default CharacterSheetMobile;
