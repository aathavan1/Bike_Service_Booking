import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><h3>Bike service booking</h3></div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/add">Add</a></li>
          <li><a href="/Cust">Customer</a></li>
          <li><a href="/Owner">Owner</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
