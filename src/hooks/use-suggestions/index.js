import { useState } from 'react';

import { useGithubIssuesList } from '../use-github-issues-list'

export const useSuggestions = (initialState) => {
  const list = useGithubIssuesList([]);
  const [searchResults, setSearchResults] = useState(initialState);



  const newSearchResults = (e) => {
    setSearchResults(
      searchIssues(e.target.value, list)
    )
  }

  return [ searchResults, newSearchResults ]
};


function searchIssues(search, itemList){
  if(search === '' || itemList === [])
    return [];


  var rx = new RegExp(`([^"]*${search}[^"]*)`,'gi');
  const listFiltered = itemList.filter(value => filterResults(value, rx))
  const slicedList = listFiltered.slice(0, 5)
  return slicedList;
}

function filterResults(value, rx){
  return matchResult(value.title, rx) || matchResult(value.labels, rx) || matchResult(value.body, rx)
}

function matchResult(value, rx){
  if (Array.isArray(value)) {
    var result = value.filter(label => {
      return String(label.name).match(rx)
    })

    return result.length > 0 ? true : false
  }

  return String(value).match(rx)
}
