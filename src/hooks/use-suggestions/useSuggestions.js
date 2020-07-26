import { useState } from 'react';

import { useGithubIssuesList } from '../use-github-issues-list';
import { useArrowKeys } from '../use-arrow-keys';

export const useSuggestions = initialState => {
  const list = useGithubIssuesList([]);
  const [ searchResults, setSearchResults ] = useState(initialState);
  const [  index, handleArrowKeys ] = useArrowKeys(0, handleEnter);

  const newSearchResults = value => {
    setSearchResults(
      searchIssues(value, list)
    )
  }

  const setArrowKeys = (keyCode, element) => {
    handleArrowKeys(keyCode, searchResults.length)
  }

  function handleEnter(){
    const itemSelected = searchResults[index].html_url;

    window.open(itemSelected);
  }



  return [ searchResults, newSearchResults, index, setArrowKeys ]
};


function searchIssues(search, itemList){
  if(search === '' || itemList === [])
    return [];


  var rx = new RegExp(`([^"]*${search}[^"]*)`,'gi');
  const listFiltered = itemList.filter(item => filterResults(item, rx))
  const slicedList = listFiltered.slice(0, 5)
  return slicedList;
}

function filterResults({ title, labels, body }, rx){
  return matchResult(title, rx) || matchResult(labels, rx) || matchResult(body, rx)
}

function matchResult(item, rx){
  if (Array.isArray(item)) {
    var result = item.filter( ({ name }) => {
      return String(name).match(rx)
    })

    return result.length > 0 ? true : false
  }

  return String(item).match(rx)
}
