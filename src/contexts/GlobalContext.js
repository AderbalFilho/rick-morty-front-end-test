import React, { createContext, useState } from 'react';

import CharacterService from '@services/character';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [page /*, setPage */] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch() {
    setIsLoading(true);

    CharacterService.getCharacters(page, searchTerm)
      .then(({ data }) => {
        const { /*info,*/ results } = data.data.characters;

        setCharacters(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  return (
    <GlobalContext.Provider
      value={{ searchTerm, setSearchTerm, characters, handleSearch, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
