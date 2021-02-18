import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import SearchSection from '@components/SearchSection';
import TheLoading from '@components/TheLoading';
import CharacterCard from '@components/CharacterCard';
import { GPagination } from '@ui';
import { GlobalContext } from '@contexts/GlobalContext';

import './TheHome.scss';

function TheHome() {
  const { characters, isLoading } = useContext(GlobalContext);
  const className = classNames('the-home', isLoading && ' the-home--blur');

  return (
    <>
      {isLoading && <TheLoading />}
      <div className={className}>
        <div className="the-home__img-background">
          <SearchSection />
          <section className="the-home__cards">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </section>
          {characters.length && (
            <section className="the-home__pagination-section">
              <GPagination />
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default TheHome;
