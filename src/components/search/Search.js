import React from 'react';
import SearchItemsList from '../search-items-list';

import { useSuggestions } from '../../hooks/use-suggestions';
import './index.css';

export default function Search() {
  const [ searchResults, newSearchResults, index, setArrowKeys ] = useSuggestions([]);


  const handleText = e => newSearchResults(e.target.value)
  const handleArrowKeys = e => setArrowKeys(e.keyCode)

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
      <SearchItemsList items={ searchResults } index={ index } />
      </div>
    </div>
  )
}
