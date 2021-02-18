import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);

  function handleSearch() {
    // Do search
    setCharacters([
      /* result */
    ]);
  }

  return (
    <GlobalContext.Provider
      value={{ searchTerm, setSearchTerm, characters, handleSearch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
