import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <nav className='header'>
        <div className='container'>
          <p className='header__brand'>SR</p>
          <div className='header__links'>
            {props.links.map(link => (
              <a href='#' className='link' key={link}>{link}</a>
            ))}
          </div>
        </div>
      </nav>
  )
}
