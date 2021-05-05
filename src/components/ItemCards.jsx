import Item from './Item';

import cardinfo from  './data/cardinfo.json'

function ItemCards() {
   
 

    return (
        <div className="mains">
            <div className="banner">
                {/* <img src="https://i.pinimg.com/originals/82/fd/a3/82fda3eadc5bc1ef2181fd0c38ec2593.jpg" alt=""/> */}
            </div>
        <div className="main">
        <div className="featured-div">
            <h1>FEATURED CARS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo eum illo sunt illum, deserunt rerum nostrum placeat odit quo aliquam. Harum, eligendi architecto incidunt ipsum ratione recusandae doloribus consequatur!</p>
        </div>
        
        <div className="items">
            {cardinfo.map(card=>
                <Item key={card.id} card={card}/>
                )}
        </div>
        </div>
        </div>
        
    )
}

export default ItemCards
