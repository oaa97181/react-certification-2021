import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header sticky">
      <a href="/" className="logo">
        <img src="WLLogo.png" className="logo" alt="logo" />
      </a>
      <div className="header-right">
        <a href="/">Dark mode</a>
        <a href="/">Profile Pic goes here</a>
      </div>
    </div>
  );
}

export default Header;
