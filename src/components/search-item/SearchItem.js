import React from 'react';
import './index.css';

export default function SearchItem({ item }) {

  return (
    <li className="search-item">
      <a href={item.html_url}>{item.title}</a>
    </li>
  )
}
