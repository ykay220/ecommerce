import { useState } from 'react';
import Cartitem from './Cartitem';


function Cart(props) {
    const { cart, updateCart } = props;
    const [itemCount, setitemCount] = useState(cart.length)
    const [newCart, setNewCart] = useState(cart)
   
    const updateQty = (id,newQty) => {
        const newCarts = newCart.map(elcarts =>{
            if (elcarts.id === id){
                return {...elcarts, qty: newQty}
            }
            return elcarts
        });
        setNewCart(newCarts)
    }


    const grandTotal = newCart.reduce((total, elcart) =>(
        total + elcart.qty * elcart.price
    ), 0)
    // console.log(cart)
    return (
        <div className="main-cartdiv">
            <div className="header">
                <div className="header-top">
                    <h1>Shopping Cart</h1>
                    <h1>{itemCount} items</h1>
                </div>
                <div class="header-middle">
                    <div class="header-p">
                        <p>PRODUCT DETAILS</p>
                    </div>
                     <div class="header-titles">
                         <p>QUANTITY</p>
                         <p>PRICE</p>
                          <p>TOTAL</p>
                    </div>
                </div>
                <div className="section">
                    
                    <div className="middle-div">
                        {newCart.map(eachcart=>
                            <Cartitem updateQty={updateQty}newCart={newCart }key={eachcart.id}eachcart={eachcart}/>
                         )}
                         </div>
                   
                </div>
                      
                   
                
            </div>
            <div className="order-div">
                <div className="order-text">
                    <h1>Order Summary</h1>
                    {/* <p>{grandTotal}</p> */}
                </div>
                <div className="general-info">
                    <p>ITEMS {itemCount}</p>
                    <p>${grandTotal}</p>
                </div>
                <div className="order-shipping">
                    <p>SHIPPING</p>
                </div>
                <div className="order-form">
                    <form action="#">
                    <select name="cars" id="cars">
                        <option value="Canada Post">Canada Post</option>
                        <option value="Fedex">Fedex</option>
                        
                    </select>
                    <div className="form-promo">
                        <p>PROMO CODE</p>
                    </div>
                    <div className="input-text">
                    <input type="text" placeholder="Enter your code"/>
                    <button type="submit">APPLY</button>
                    </div>
                    
                    </form>
                </div>
                <div className="checkout">
                    <div className="checkout-p">
                        <p>TOTAL COST</p>
                        <p>{grandTotal}</p>
                    </div>
                    <div className="checkout-button">
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart
