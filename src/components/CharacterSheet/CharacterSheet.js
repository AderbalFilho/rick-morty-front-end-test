import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

import { GButton, GCard, GModal, GText, GTitle } from '@ui';
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
          <GTitle
            color="lime-green"
            spacing="large"
            classes="info-content__title"
          >
            About
          </GTitle>
          <GText classes="info-content__about-text">{`${
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
            classes="info-content__title info-content__title--origin"
          >
            Origin
          </GTitle>
          <GTitle
            tag="h2"
            color="darkest-grey"
            classes="info-content__title-planet"
          >
            {modalCharacter.origin.type}
          </GTitle>
          <GTitle tag="h3" classes="info-content__title-planet-name">
            {modalCharacter.origin.name}
          </GTitle>
          <GTitle
            tag="h4"
            color="light-grey"
            classes="info-content__title-planet-dimension"
          >
            {modalCharacter.origin.dimension}
          </GTitle>
          <div className="info-content__residents">
            <FontAwesomeIcon icon={faUserFriends} />
            <GText color="darkest-grey" classes="info-content__residents-text">
              {(modalCharacter.origin.residents &&
                modalCharacter.origin.residents.length) ||
                'unknow'}{' '}
              residents
            </GText>
          </div>
          <GTitle
            color="lime-green"
            spacing="large"
            classes="info-content__title info-content__title--location"
          >
            Location
          </GTitle>
          <GTitle
            tag="h2"
            color="darkest-grey"
            classes="info-content__title-planet"
          >
            {modalCharacter.location.type}
          </GTitle>
          <GTitle tag="h3" classes="info-content__title-planet-name">
            {modalCharacter.location.name}
          </GTitle>
          <GTitle
            tag="h4"
            color="light-grey"
            classes="info-content__title-planet-dimension"
          >
            {modalCharacter.location.dimension}
          </GTitle>
          <div className="info-content__residents">
            <FontAwesomeIcon icon={faUserFriends} />
            <GText color="darkest-grey" classes="info-content__residents-text">
              {(modalCharacter.location.residents &&
                modalCharacter.location.residents.length) ||
                'unknow'}{' '}
              residents
            </GText>
          </div>
        </div>
      </GCard>
    </GModal>
  );
}

export default CharacterSheet;
