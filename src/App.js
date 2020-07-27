import React from 'react'

import { useSuggestions } from './hooks/use-suggestions';
import Search from './components/search';

import './App.css';

export default function App() {
  const [ searchResults, newSearchResults, index, setArrowKeys ] = useSuggestions([]);


  return (
    <>
      <div className="wrapper">
        <Search
          searchResults={searchResults}
          newSearchResults={newSearchResults}
          index={index}
          setArrowKeys={setArrowKeys}
        />
      </div>
    </>
  )
}
