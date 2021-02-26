/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/watch">Watch</a>
                <a href="/contact-us">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;