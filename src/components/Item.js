import React from 'react';
import './Item.scss';

const Item = ({ item }) => {
    return (
        <div className="item-card"> 
            <h5>{item.title} <span>${item.price}</span></h5>
            <p>{item.description}</p>
            <img src={item.pictureUrl} width="100" alt={`Album cover of ${item.title}`}/>
        </div>
    );
}

export default Item;