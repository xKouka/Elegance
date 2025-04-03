import React, { useState } from 'react';
import search from '../assets/search.svg';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="w-auto flex justify-center mt-8">
      <div className="relative flex justify-between w-1/4 h-11">
        <input
          type="text"
          placeholder="Buscar"
          className="border-2 border-black rounded-3xl w-full p-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="button"
          className="h-6 w-6 rounded-xl absolute right-0 m-3"
          onClick={handleSearch}
        >
          <img src={search} className="h-6 w-6" alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default Search;