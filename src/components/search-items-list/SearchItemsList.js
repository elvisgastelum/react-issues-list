import React from 'react';

import SearchItem from '../search-item'
import './index.css';

/**
 * Render a list of suggestions
 *
 * @param {{ items: [], index: number, setArrowKeys: (keyCode: number, index?: number) => void}} props used for the component
 * @return {JSX.Element} the JSX.Element
 */
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
