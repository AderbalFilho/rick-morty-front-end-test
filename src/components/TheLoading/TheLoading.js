import React from 'react';

import { GModal, GText } from '@ui';

import loading from '@assets/imgs/loading.png';

import './TheLoading.scss';

function TheLoading() {
  return (
    <GModal>
      <img
        src={loading}
        alt="Rick and Morty visiting an alien planet"
        className="the-loading__img"
      />
      <GText classes="the-loading__text">Loading</GText>
    </GModal>
  );
}

export default TheLoading;
