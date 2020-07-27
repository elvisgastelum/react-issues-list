import { useState } from 'react';

import { useGithubIssuesList } from '../use-github-issues-list';
import { useArrowKeys } from '../use-arrow-keys';
import { searchIssues } from './searchIssues';

export const useSuggestions = (initialState, mockList) => {
  const list = mockList || useGithubIssuesList([]);
  const [ searchResults, setSearchResults ] = useState(initialState);
  const [  index, handleArrowKeys ] = useArrowKeys(0, handleEnter);

  const newSearchResults = value => {
    setSearchResults(
      searchIssues(value, list)
    )
  }

  const setArrowKeys = (keyCode, index) => {
    if (index) {
      handleArrowKeys(keyCode, index);  
    } else {
      handleArrowKeys(keyCode, searchResults.length);
    }
  }

  function handleEnter(){
    const itemSelected = searchResults[index].html_url;

    window.open(itemSelected);
  }


  return [ searchResults, newSearchResults, index, setArrowKeys ]
};



