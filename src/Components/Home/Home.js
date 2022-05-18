import React from 'react';
import { useSelector } from 'react-redux'
import './../../Styles/Home.css'
import Fade from 'react-reveal/Fade'
import Card from './Card';

function Home(props) {
    const myState = useSelector((state) => state.handleShop)
    // const dispatch = useDispatch()
    console.log(myState.shopData);
    const today = new Date();
    var date = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear()
    console.log(date);
    return (
        <div className="home-container">
            <Fade bottom>
                <h1>SHOPS</h1>
            </Fade>
            <hr />
            <div className="shop-container">
                <Fade left>
                    <Card />
                    <Card />
                    <Card />
                </Fade>
            </div>
        </div>
    );
}

export default Home;
