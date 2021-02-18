import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import SearchSection from '@components/SearchSection';
import TheLoading from '@components/TheLoading';
import { GlobalContext } from '@contexts/GlobalContext';

import './TheHome.scss';

function TheHome() {
  const { isLoading } = useContext(GlobalContext);
  const className = classNames('the-home', isLoading && ' the-home--blur');

  return (
    <>
      {isLoading && <TheLoading />}
      <div className={className}>
        <div className="the-home__img-background">
          <SearchSection />
        </div>
      </div>
    </>
  );
}

export default TheHome;
