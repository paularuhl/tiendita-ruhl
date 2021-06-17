import React from 'react';
import './Item.scss';


const Item = ({ item }) => {
   
    return (
        <div className='item-card'>
            <img src={item.pictureUrl} width='100' alt={`Album cover of ${item.title}`} />
            <h6>{item.title} <span>${item.price}</span></h6>
            <p>{item.description}</p>
        </div>
    );
}

export default Item;