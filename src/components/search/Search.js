import React from 'react';

import SearchItemsList from '../search-items-list';

import './index.css';
import githubLogo from './img/github-logo.png';

export default function Search({ newSearchResults, searchResults, index, setArrowKeys, handleFocus, handleBlur }) {

  const handleText = e => newSearchResults(e.target.value)
  const handleArrowKeys = e => setArrowKeys(e.keyCode);


  return (
    <div className="search-container">
      <div className="search-elements">
        
        <div className="search-box">
          <img src={githubLogo} alt="github-logo" className="search-box-logo"/>
          <div>
            <h1 className="search-title">Search Github Issues</h1>
            <input
              type="text"
              placeholder="Search"
              className="search-input "
              onChange={ handleText }
              onKeyDown= { handleArrowKeys }
              onFocus={ handleFocus }
              onBlur={ handleBlur }
            />
            <SearchItemsList items={ searchResults } index={ index } setArrowKeys={ setArrowKeys } />
          </div>
        </div>
      </div>
    </div>
  )
}
