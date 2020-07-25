import React from 'react';

import { useSuggestions } from '../../hooks/use-suggestions';
import SearchItemsList from '../search-items-list';
import './index.css';

export default function Search() {
  const [ searchResults, newSearchResults ] = useSuggestions([]);

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={ newSearchResults }
        />
        <SearchItemsList items={ searchResults } />
      </div>
    </div>
  )
}
