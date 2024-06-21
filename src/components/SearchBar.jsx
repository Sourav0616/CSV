import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
