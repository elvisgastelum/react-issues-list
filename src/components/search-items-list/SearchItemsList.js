import React from 'react';

import SearchItem from '../search-item'
import './index.css';

export default function SearchItemsList({ items, index, setArrowKeys }) {

  const itemClassName = i => i === index ? "active" : "";

  return (
    <div className="search-items-list">
      <ul>
      {
        items.map( (item, i) => (
          <SearchItem 
            item={ item }
            key={ item.id }
            className={itemClassName(i)}
            setArrowKeys={ setArrowKeys }
            index={ i + 1 }
          /> 
        ))
      }
      </ul>
    </div>
  )
}
