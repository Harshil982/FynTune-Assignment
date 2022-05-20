import React from 'react';
import './../../Styles/card.css'

function Card({data}) {
    // const [isOpen,setIsOpen] = useState(false)
    const {shopName,category,area,isOpen} = data;

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
            </div>
        </div>
        <hr />
        </>
    );
}

export default Card;