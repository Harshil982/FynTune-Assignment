import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import './../../Styles/Home.css'
import Fade from 'react-reveal/Fade'
import Card from './Card';
import Select from 'react-select'
import { Link } from 'react-router-dom';

function Home(props) {
    const myState = useSelector((state) => state.handleShop)
    const [filtertype, setfiltertype] = useState('')
    const [filterCategory, setfilterCategory] = useState('')
    // const dispatch = useDispatch()
    console.log(myState.shopData);
    const AreaOptions =
        [
            { value: 'Area', label: 'Area' },
            { value: 'Category', label: 'Category' },
            { value: 'Open/Close', label: 'open/Close' },
            { value: '', label: 'none' },
        ];
    let CategoryOptions = []
    if (filtertype === 'Area') {
        CategoryOptions =
            [
                { value: 'Thane', label: 'Thane' },
                { value: 'Pune', label: 'Pune' },
                { value: 'Mumbai Suburban', label: 'Mumbai Suburban' },
                { value: 'Nashik', label: 'Nashik' },
                { value: 'Nagpur', label: 'Nagpur' },
                { value: 'Ahmednagar', label: 'Ahmednagar' },
                { value: 'Solapur', label: 'Solapur' }
            ]
    }
    else if (filtertype === 'Category') {
        CategoryOptions =
            [
                { value: 'Grocery', label: 'Grocery' },
                { value: 'Butcher', label: 'Butcher' },
                { value: 'Baker', label: 'Baker' },
                { value: 'Chemist', label: 'Chemist' },
                { value: 'Stationery shop', label: 'Stationery shop' },
            ]
    }
    else if (filtertype === 'Open/Close') {
        CategoryOptions =
            [
                { value: true, label: 'open' },
                { value: false, label: 'Close' },
            ]
    }
    const sel = (e) => {
        setfiltertype(e.value)
    }
    const selectCategory = (e) => {
        setfilterCategory(e.value)
    }
    const Shops = () => {
        if(filtertype === 'Area')
        {
            const filtered = myState.shopData.filter((sh) => sh.area === filterCategory);
            return(
                filtered.length === 0 ? <h1>No shop Available</h1> : filtered.map((shop,index) => (
                    <Card data={shop} />
                ))
            )
        }
        else if(filtertype === 'Category')
        {
            const filtered = myState.shopData.filter((sh) => sh.category === filterCategory);
            return(
                filtered.length === 0 ? <h1>No shop Available</h1> : filtered.map((shop,index) => (
                    <Card data={shop} />
                ))
            )
        }
        else if(filtertype === 'Open/Close')
        {
            const filtered = myState.shopData.filter((sh) => sh.isOpen === filterCategory);
            return(
                filtered.length === 0 ? <h1>No shop Available</h1> : filtered.map((shop,index) => (
                    <Card data={shop} />
                ))
            )
        }
        else
        {
            return(
            myState.shopData.map((shop,index) => (
                <Card data={shop} />
            )))
        }
    }
    return (
        <div className="home-container">
            <div className="shop-filter">
                <h1>SHOPS</h1>
            </div>
            <div className="filters">
                <p>Filter Data :</p>
                <div className="option">
                    <Select
                        defaultValue={filtertype}
                        onChange={sel}
                        options={AreaOptions}
                        isDisabled = {myState.shopData.length === 0 ? true : false}
                        placeholder="Select Filter Type"
                    /></div>
                <div className="option">
                    <Select
                        defaultValue={filterCategory}
                        onChange={selectCategory}
                        options={CategoryOptions}
                        placeholder="Select Filter Value"
                        isDisabled={filtertype ? false : true}
                    /></div>
            </div>
            <hr />
            <div className="shop-container">
                <Fade left>
                    {myState.shopData.length === 0
                        ?
                        <div>
                            <h2>No Stores Currently</h2>
                            <Link to="addshop" >Add Your Shop</Link>
                        </div>
                        :
                        <Shops />
                    }
                </Fade>
            </div>
        </div>
    );
}

export default Home;
