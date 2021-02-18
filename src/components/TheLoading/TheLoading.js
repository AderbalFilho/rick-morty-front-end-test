import React from 'react';

import { GText } from '@ui';

import loading from '@assets/imgs/loading.png';

import './TheLoading.scss';

function TheLoading() {
  return (
    <div className="the-loading">
      <img
        src={loading}
        alt="Rick and Morty visiting an alien planet"
        className="the-loading__img"
      />
      <GText classes="the-loading__text">Loading</GText>
    </div>
  );
}

export default TheLoading;
