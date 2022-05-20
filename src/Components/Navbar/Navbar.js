import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/ShopList.png'
import './../../Styles/Navbar.css'

function Navbar(props) {
    return (
        <div className="shoplist-navbar">
            <div className="shoplist-logo">
                <img src={Logo} alt="ShopList" className="logo" />
            </div>
            <div className="nav-menus">
                <Link to={{ pathname: "/" }} >Home</Link>
                <Link to={{ pathname: "/addshop" }} >Add Shops</Link>
                <Link to={{ pathname: "/delete-shop" }} >Delete Shop</Link>
            </div>
        </div>
    );
}

export default Navbar;