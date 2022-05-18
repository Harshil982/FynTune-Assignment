import React, { useState } from 'react';
import Select from 'react-select'
import './../../Styles/Addshop.css'
// import Fade from 'react-reveal/Fade'
import { useDispatch } from 'react-redux'
import { addShop, removeShop } from './../Redux/Actions/index'

function AddShop(props) {
    // const myState = useSelector((state) => state.handleShop)
    const dispatch = useDispatch()
    // console.log(myState.shopData);
    // console.log(shop);
    const [shopDetails, setShopDetails] = useState({
        shopName: '',
        area: '',
        category: '',
        openDate: '',
        closeDate: ''
    })
    // console.log(shopDetails);
    const sel = (e) => {
        setShopDetails({ ...shopDetails, area: e.value })
    }
    const selectCategory = (e) => {
        setShopDetails({ ...shopDetails, category: e.value })
    }
    const AreaOptions =
        [
            { value: 'Thane', label: 'Thane' },
            { value: 'Pune', label: 'Pune' },
            { value: 'Mumbai Suburban', label: 'Mumbai Suburban' },
            { value: 'Nashik', label: 'Nashik' },
            { value: 'Nagpur', label: 'Nagpur' },
            { value: 'Ahmednagar', label: 'Ahmednagar' },
            { value: 'Solapur', label: 'Solapur' }
        ];
    const CategoryOptions =
        [
            { value: 'Grocery', label: 'Grocery' },
            { value: 'Butcher', label: 'Butcher' },
            { value: 'Baker', label: 'Baker' },
            { value: 'Chemist', label: 'Chemist' },
            { value: 'Stationery shop', label: 'Stationery shop' },
        ]
    const regex = new RegExp("/^[A-Za-z]+$/")
    const isValid = regex.test("abgfd")
    console.log(isValid);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (shopDetails.area === '') {
            alert("Please Provide Area");
            return false
        }
        else if (shopDetails.category === '') {
            alert("Please Provide Category")
            return false
        }
        console.log(shopDetails);
        dispatch(addShop(shopDetails))
        setShopDetails({
            shopName: '',
            area: '',
            category: '',
            openDate: '',
            closeDate: ''
        })
    }
    const shop = "harshil"
    return (
        <div className="addshop-form">
            {/* <input type="text" onChange={(e) => setShop(e.target.value)} required />
            <button onClick={() => dispatch(addShop({name : "harshil",place : "malpur"}))} >Add Shop</button>
            <button onClick={() => dispatch(removeShop("shrevalli"))} >DELETE</button> */}
            <form className="shop-adding-form" onSubmit={handleSubmit} >
                <h2>Add Your Shop</h2>
                <input type="text" id="shopName" value={shopDetails.shopName} required placeholder="Enter Shop Name here" onChange={(e) => setShopDetails({ ...shopDetails, shopName: e.target.value })} autoComplete="off" /><br /><br />

                <label>Select Area :</label>
                <Select
                    defaultValue={shopDetails.area}
                    onChange={sel}
                    options={AreaOptions}
                /><br /><br />

                <label>Select Category :</label>
                <Select
                    defaultValue={shopDetails.category}
                    onChange={selectCategory}
                    options={CategoryOptions}
                    required
                /><br /><br />

                <label>Open Date :</label><br />
                <input type="date" value={shopDetails.openDate} required onChange={(e) => setShopDetails({ ...shopDetails, openDate: e.target.value })} /><br /><br />
                {/* {opendate ? <h1>{opendate}</h1> : null} */}
                <label>Closing Date :</label><br />
                <input type="date" value={shopDetails.closeDate} min={shopDetails.openDate} required onChange={(e) => setShopDetails({ ...shopDetails, closeDate: e.target.value })} disabled={shopDetails.openDate ? false : true} /><br /><br />

                <button type="submit">Submit</button>
            </form>
            <button onClick={() => dispatch(removeShop(shop))} >Delete</button>
        </div>
    );
}

export default AddShop;