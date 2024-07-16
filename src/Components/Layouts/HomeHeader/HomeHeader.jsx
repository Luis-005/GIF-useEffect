import React, { useState } from 'react';

export const HomeHeader = ({ styles, onSearch }) => {
  const [search, setSearch] = useState('');

  const searchInput = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onSearch(searchTerm)
  };

  return (
    <header className={styles}>
      <input onChange={searchInput} type="text" placeholder='QUE GIF DESEAS' />
    </header>
  );
};
