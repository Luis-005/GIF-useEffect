import React, { useState } from 'react';
import { HomeHeader } from '../../Layouts/HomeHeader/HomeHeader';
import { HomeMain } from '../../Layouts/HomeMain/HomeMain';
import './Home.css';

export const Home = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (term) => {
    setSearch(term);
  };

  return (
    <main className='principalMainHome'>
      <HomeHeader styles='HeaderHome' onSearch={handleSearch} />
      <HomeMain styles='HomeMain' search={search} />
    </main>
  );
};
