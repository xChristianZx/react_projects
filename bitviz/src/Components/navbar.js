import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-links">
                <li><a>Home</a></li>
                <li><a>News</a></li>
                <li><a>Screener</a></li>
            </ul>
            <p className="navbar-date-time">
                Date and Time
            </p>
        </div>
    )
}

export default Navbar;