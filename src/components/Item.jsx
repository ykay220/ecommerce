import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';
import { IconName, ImEye } from "react-icons/im";


function Item(props) {
    const { card } = props;
    let history = useHistory();

    
    return (
        <div className="item" onClick={() => history.push(`/shop/${card.id}`)}>
            <div className="item_image">
                <img src={card.image} alt=""/>
            </div>
            <div className="item_text">
                <p>{card.name}</p>
                <p>${card.price} <span>{card.discount}</span></p>   
           </div>
           
           <div className="ratings">
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
           </div>
           <div className="view">
           <ImEye/>
           </div>
           
        </div>
    )
}

export default Item
