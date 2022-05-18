import React from 'react';
import './../../Styles/card.css'
import ShopImg from './../../assets/grocery.jfif'

function Card(props) {
    return (
        <>
        <div className="shop-card">
            <div className="shop-img">
                <img src={ShopImg} alt="shop-img"/>
            </div>
            <div className="shop-desc">
                <p className="shop-name">Shree Grocery Store</p>
                <p>Category : Grocery Store</p>
                <p>Location : Mumbai</p>
            </div>
        </div>
        <hr />
        </>
    );
}

export default Card;