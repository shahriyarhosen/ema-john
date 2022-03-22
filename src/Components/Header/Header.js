import React from 'react';
import Logo from '../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={Logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
                </div>
        </nav>
    );
};

export default Header;