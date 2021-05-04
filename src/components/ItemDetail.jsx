
import { useParams} from 'react-router-dom';
import cardinfo from  './data/cardinfo.json'
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
function ItemDetail(props) {
    const { updateCart, cart} = props;
    const { id } = useParams();
    
  
    const cardObject = cardinfo.find( card =>  card.id == id);


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
        
        }
           
      
                
 }


    // console.log(cart)
  
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
        </div>
       
        
    <div className="item_detailimage">
        <img src={cardObject.image} alt=""/>
    </div>
    </div>
</div>
      );
};


export default ItemDetail;
