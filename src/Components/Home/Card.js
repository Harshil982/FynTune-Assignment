import React from 'react';
import './../../Styles/card.css'

function Card({data}) {
    // const [isOpen,setIsOpen] = useState(false)
    const {shopName,category,area,openDate,closeDate} = data;

    const date = new Date()
    const today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()

    const [year1,month1,day1] = openDate.split("-")
    const [year2,month2,day2] = closeDate.split("-")
    const [year3,month3,day3] = today.split("-")

    const newOpenDate = new Date(year1,month1-1,day1);
    const newCloseDate = new Date(year2,month2-1,day2);
    const todayDate = new Date(year3,month3-1,day3);

    const condition = todayDate > newOpenDate && todayDate < newCloseDate ? true : false;
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
                {condition ? <p className="status-open">Open</p> : <p className="status-closed">Closed</p>}
            </div>
        </div>
        <hr />
        </>
    );
}

export default Card;