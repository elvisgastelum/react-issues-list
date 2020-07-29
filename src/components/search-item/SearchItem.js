import React from 'react';

import { key } from '../../hooks/use-arrow-keys/key-code';

import './index.css';


/**
 * Render item of suggestions
 *
 * @param {{ item: Object, className: string, index: number, setArrowKeys: (keyCode: number, index?: number) => void}} props used for the component
 * @return {JSX.Element} the JSX.Element
 */
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
