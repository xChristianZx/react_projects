import React from "react";
import './Navbar.css';

const Navbar = () => {
  const date = new Date();
  const currentTime = new Date(date);
  const timeOptions = {
    weekday: "long",
    month: 'short',
    day:'numeric',
    year: 'numeric'
  };
  return (
    <div className="navbar-container">
      <ul className="navbar-links">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a>Screener</a>
        </li>
      </ul>
      <p className="navbar-date-time">        
        <span>{currentTime.toLocaleTimeString("en-us", timeOptions)}</span>
      </p>
    </div>
  );
};

export default Navbar;
