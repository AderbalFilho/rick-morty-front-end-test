import React, { createContext, useState } from 'react';

import CharacterService from '@services/character';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const [paginationPage, setPaginationPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalCharacter, setModalCharacter] = useState(null);

  function handleSearch() {
    search(1);
    setPage(1);
    setPaginationPage(1);
  }

  function handlePagination(pageFromPagination) {
    setPaginationPage(pageFromPagination);

    search(pageFromPagination);
  }

  function search(pageToSearch) {
    setIsLoading(true);

    CharacterService.getCharacters(pageToSearch, searchTerm)
      .then(({ data }) => {
        const { info, results } = data.data.characters;

        setCharacters(results);
        setMaxPage(info.pages);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  const value = {
    characters,
    handleSearch,
    handlePagination,
    isLoading,
    maxPage,
    modalCharacter,
    paginationPage,
    searchTerm,
    setModalCharacter,
    setSearchTerm,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
