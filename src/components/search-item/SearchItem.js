import React from 'react';
import './index.css';

export default function SearchItem({ item, className }) {

  return (
    <li className={"search-item " + className}>
      <div>
        <a href={item.html_url}>{item.title}</a>
      </div>
    </li>
  )
}
