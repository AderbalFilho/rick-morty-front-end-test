import React, { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '@contexts/GlobalContext';
import { GText, GTitle } from '@ui';
import CharacterLocation from '@components/CharacterLocation';

import './CharacterInfo.scss';

function CharacterInfo() {
  const { modalCharacter } = useContext(GlobalContext);
  const gender = modalCharacter.gender.toLowerCase();
  const species = modalCharacter.species.toLowerCase();
  const status = `${modalCharacter.status.toLowerCase()}${
    modalCharacter.status === 'Alive' ? ' and well' : ''
  }`;
  const lastSeen =
    modalCharacter.episode[modalCharacter.episode.length - 1].air_date;
  const [aboutText, setAboutText] = useState('');

  function returnPersonalPronoun() {
    switch (gender) {
      case 'male':
        return 'He';
      case 'female':
        return 'She';
      default:
        return 'It';
    }
  }

  useEffect(() => {
    const { name } = modalCharacter;

    setAboutText(
      `${name} is a ${gender} ${species}. ${returnPersonalPronoun()} is ${status}. \
      Last seen in ${lastSeen}.`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GTitle
        color="lime-green"
        spacing="large"
        classes="character-info__title"
      >
        About
      </GTitle>
      <GText classes="character-info__about-text">{aboutText}</GText>
      <GTitle
        color="lime-green"
        spacing="large"
        classes="character-info__title character-info__title--origin"
      >
        Origin
      </GTitle>
      <CharacterLocation location={modalCharacter.origin} />
      <GTitle
        color="lime-green"
        spacing="large"
        classes="character-info__title character-info__title--location"
      >
        Location
      </GTitle>
      <CharacterLocation location={modalCharacter.location} />
    </>
  );
}

export default CharacterInfo;
