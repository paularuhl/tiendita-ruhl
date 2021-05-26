import React from 'react';
import ItemCount from './ItemCount';
import './Item.scss';

const Item = ({ item }) => {
    
    return (
        <div className="item-card"> 
            <h4>{item.title} <span>${item.price}</span></h4>
            <p>{item.description}</p>
            <img src={item.pictureUrl} width="100" alt={`Album cover of ${item.title}`}/>
            {/* <ItemCount stock="1" initial="2" onAdd="1" message="1" /> */}

        </div>
    );
}

export default Item;