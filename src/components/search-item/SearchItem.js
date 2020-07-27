import React from 'react';

import { key } from '../../hooks/use-arrow-keys/key-code';

import './index.css';

export default function SearchItem({ item, className, setArrowKeys, index }) {

  const handleMouseEvent = e => setArrowKeys(key.MOUSE_EVENT, index);

  return (
    <li onMouseEnter={handleMouseEvent} className={`search-item ${className}`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.html_url}
      >
        {item.title}
      </a>
    </li>
  )
}
