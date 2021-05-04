import Item from './Item';

import cardinfo from  './data/cardinfo.json'

function ItemCards() {
   
 

    return (
        <div className="main">

        
        <div className="items">
            {cardinfo.map(card=>
                <Item key={card.id} card={card}/>
                )}
        </div>
        </div>
        
    )
}

export default ItemCards
