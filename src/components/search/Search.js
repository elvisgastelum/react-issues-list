import React from 'react';

import SearchItemsList from '../search-items-list';

import './index.css';

export default function Search({ newSearchResults, searchResults, index, setArrowKeys }) {

  const handleText = e => newSearchResults(e.target.value)
  const handleArrowKeys = e => setArrowKeys(e.keyCode);
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={ handleText }
          onKeyDown= { handleArrowKeys }
        />
      <SearchItemsList items={ searchResults } index={ index } setArrowKeys={ setArrowKeys } />
      </div>
    </div>
  )
}
