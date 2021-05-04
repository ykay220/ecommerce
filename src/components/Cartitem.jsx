import React from 'react'
import ItemDetail from './ItemDetail';

function Cartitem(props) {
    const {eachcart, updateQty} = props;
  
    const subtractHandler = () => {
        updateQty(id, qty - 1)
    } 

    const addHandler = () => {
        updateQty(id, qty + 1)
    } 
    
  
    const {id, name, image, price, qty} = eachcart

    // console.log(updateQty)

    
    return (
       <div className="card">
            <div className="image-container">
                <img src={eachcart.image} alt=""/>
            </div>
        
            <div className="card-content">
                <div className="content-p">
                    <p>{name}</p>
                    {/* <p onClick={removeHandler}>remove</p> */}
                </div> 
                <div className="content-titles">
                <div className="button-p">
                    <button onClick={subtractHandler}>-</button><span>{qty}</span><button onClick={addHandler}>+</button>
                </div>
                <p>{price} </p>
                <p>{qty * price}</p>

              </div>
            </div>  
        </div>
    )
}

export default Cartitem
