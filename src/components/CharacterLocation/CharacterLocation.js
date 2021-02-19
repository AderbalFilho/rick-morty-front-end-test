import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

import { GText, GTitle } from '@ui';

import './CharacterLocation.scss';

function CharacterLocation({ location }) {
  const [residentsNumber, setResidentsNumber] = useState(
    location.residents && location.residents.length
  );

  useEffect(() => {
    if (!residentsNumber && residentsNumber !== 0) {
      setResidentsNumber('unknown quantify of');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GTitle
        tag="h2"
        color="darkest-grey"
        classes="character-location__title-planet"
      >
        {location.type || 'unknown type'}
      </GTitle>
      <GTitle tag="h3" classes="character-location__title-planet-name">
        {location.name || 'unknown location'}
      </GTitle>
      <GTitle
        tag="h4"
        color="light-grey"
        classes="character-location__title-planet-dimension"
      >
        {location.dimension || 'unknown dimension'}
      </GTitle>
      <div className="character-location__residents">
        <FontAwesomeIcon icon={faUserFriends} />
        <GText
          color="darkest-grey"
          classes="character-location__residents-text"
        >
          {residentsNumber} residents
        </GText>
      </div>
    </>
  );
}

CharacterLocation.propTypes = {
  location: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    dimension: PropTypes.string,
    residents: PropTypes.array,
  }).isRequired,
};

export default CharacterLocation;
