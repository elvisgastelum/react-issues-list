import React, { useState, useEffect } from 'react'
import './index.css';

export default function Search() {


  const [list, setList] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    async function fetchList() {
      const data = await fetch("https://api.github.com/repos/facebook/react/issues?per_page=100");
      const list = await data.json()

      setList(list);
    }
    fetchList();
  }, [])

  const handleText = (e) => {
    setResults(
      searchIssues(e.target.value, list)
    )
  }

  function searchIssues(search, itemList){
    if(search === '' || itemList === [])
      return [];


    var rx = new RegExp(`([^"]*${search}[^"]*)`,'gi');
    const listFiltered = itemList.filter(value => filterResults(value, rx))
    const slicedList = listFiltered.slice(0, 5)
    return slicedList;
  }

  function filterResults(value, rx){
    return matchResult(value.title, rx) || matchLabels(value.labels, rx) || matchResult(value.body, rx)
  }

  function matchResult(value, rx){
    return String(value).match(rx)
  }

  function matchLabels(labels, rx){
    var result = labels.filter(label => {
      return String(label.name).match(rx)
    })

    return result.length > 0 ? true : false
  }


  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={handleText}
        />
        <div className="search-items">
        <ul className="search-items-list">
        {
          results.map((item, index) => (
            <li className="search-item" key={index}>
              <a href={item.html_url}>{item.title}</a>
            </li>
          )
        )
        }
        </ul>
      </div>
      </div>

    </div>
  )
}
