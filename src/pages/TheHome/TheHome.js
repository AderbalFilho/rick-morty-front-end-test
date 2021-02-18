import React from 'react';
import SearchSection from '@components/SearchSection';

import './TheHome.scss';

function TheHome() {
  return (
    <div className="the-home">
      <div className="the-home__img-background">
        <SearchSection />
      </div>
    </div>
  );
}

export default TheHome;
