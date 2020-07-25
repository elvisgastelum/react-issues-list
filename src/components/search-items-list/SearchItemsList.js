import React from 'react';

import SearchItem from '../search-item'
import './index.css';

export default function SearchItemsList({ items }) {

  return (
    <div className="search-items">
      <ul className="search-items-list">
      {
        items.map( item => <SearchItem item={ item } key={ item.id }/> )
      }
      </ul>
    </div>
  )
}
