
import { useParams} from 'react-router-dom';
import { useState} from 'react';
import cardinfo from  './data/cardinfo.json'
import { BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";

import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
function ItemDetail(props) {
    const { updateCart, cart} = props;
    const { id } = useParams();
    const [isOpen, setisOpen] = useState(false)  
  
    const cardObject = cardinfo.find( card =>  card.id == id);

const toggleModal = () => {
    setisOpen(!isOpen)
}
    const handler = () => {
        let flag = false;
        cart.map(eachitem=>{
            if(eachitem.id === cardObject.id){
                flag=true;
                console.log('already exists')
            }
        })

        if(flag === true){
            console.log('already exists- increase qty of card object')
           
            updateCart(cart)
        } else{
            console.log('updatecard was triggered')
            updateCart(
                    
                [
        
                ...cart, { name: cardObject.name, price: cardObject.price, id: cardObject.id, image: cardObject.image, qty: 1}
            ])
            toggleModal();
        }
        
      
                
 }


    console.log(isOpen)
  
return (
    <div className="itemdetail_main">

    
    <div className="item_detaildiv">
        <div className="item_detailtext">
            <h1>{cardObject.name}</h1>
            <p>{cardObject.desc}</p>
              <div className="price">
                  <p>Price :</p>
                  <p>${cardObject.price}</p>
              </div>
                <div className="detail_button">
                <button onClick={handler}>ADD TO CART</button> 
                <AiOutlineRetweet className="dicons"/>
                <AiOutlineHeart className="dicons"/>
                </div>
                {isOpen ?(
                    <motion.div
                    initial={{
                        y:-3
                    }}

                    animate={{
                        x:0,
                        y:.3,
                        scale:1
                    }}
                     className="modal">
                        <BsCheckCircle className="check-icon"/>
                    </motion.div>
                ) : null}
        </div>
       
        
    <div className="item_detailimage">
        <img src={cardObject.image} alt=""/>
    </div>
    </div>
</div>
      );
};


export default ItemDetail;
