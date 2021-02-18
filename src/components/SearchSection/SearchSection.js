import React, { useContext } from 'react';

import { GButton, GInput } from '@ui';
import { GlobalContext } from '@contexts/GlobalContext';

import logo from '@assets/imgs/logo.png';

import './SearchSection.scss';

function SearchSection() {
  const { searchTerm, setSearchTerm, handleSearch } = useContext(GlobalContext);

  return (
    <section className="search-section">
      <img
        src={logo}
        alt="Rick and Morty logo"
        className="search-section__logo"
      />
      <div className="search-section__input-container">
        <GInput
          type="text"
          placeholder="Search characters"
          value={searchTerm}
          change={({ target }) => setSearchTerm(target.value)}
        />
        <GButton classes="search-section__button" onClick={handleSearch}>
          Search
        </GButton>
      </div>
    </section>
  );
}

export default SearchSection;
