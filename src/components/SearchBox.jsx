import React from "react";

const SearchBox = ({ searchTerm, onSearchChange, onSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Type to search.."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
