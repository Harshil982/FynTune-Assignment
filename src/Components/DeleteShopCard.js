import React from 'react';
import { useDispatch } from 'react-redux';
import './../Styles/card.css'
import { removeShop } from './Redux/Actions';

function DeleteShopCard({data}) {
    // const [isOpen,setIsOpen] = useState(false)
    const {shopName,category,area,isOpen,id} = data;
    const dispatch = useDispatch()
    let imgSrc = '';
    if(category === 'Grocery')
    {
        imgSrc = '/grocery.jfif'
    }
    else if(category === 'Butcher')
    {
        imgSrc = '/Butchers.png'
    }
    else if(category === 'Baker')
    {
        imgSrc = '/Baker.jfif'
    }
    else if(category === 'Chemist')
    {
        imgSrc = '/Chemist.jpg'
    }
    else if(category === 'Stationery shop')
    {
        imgSrc = '/Stationary.jpg'
    }
    const handleShopDelete = (e) => {
        dispatch(removeShop(id));
        alert(`Shop With Name "${shopName}" is Deleted`)
    }
    return (
        <>
        <div className="shop-card">
            <div className="shop-img">
                <img src={imgSrc} alt="shop-img"/>
            </div>
            <div className="shop-desc">
                <p className="shop-name">{shopName}</p>
                <p>Category : {category}</p>
                <p>Location : {area}</p>
                {isOpen ? <p className="status-open">Open</p> : <p className="status-closed">Closed</p>}
                <button value={id} onClick={handleShopDelete} className="delete-btn" >Delete Shop</button>
            </div>
        </div>
        <hr />
        </>
    );
}

export default DeleteShopCard;