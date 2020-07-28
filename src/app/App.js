import React, { createRef } from 'react'

import { useSuggestions } from '../hooks/use-suggestions';
import Search from '../components/search';

import './App.css';

export default function App() {
  const [ searchResults, newSearchResults, index, setArrowKeys ] = useSuggestions([]);

  const wrapper = createRef();

  const handleFocus = e => {
    wrapper.current.classList.add('inactive')
  }

  const handleBlur = e => {
    wrapper.current.classList.remove('inactive')
  }

  return (
    <>
      <div className="wrapper" ref={wrapper}>
        <Search
          searchResults={searchResults}
          newSearchResults={newSearchResults}
          index={index}
          setArrowKeys={setArrowKeys}
          handleFocus={ handleFocus }
          handleBlur={ handleBlur }
        />
      </div>
    </>
  )
}
