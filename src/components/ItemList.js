import React from 'react';
import Item from './Item';
import './ItemList.scss';

const ItemList = ({ list }) => {
  
    return (
        <div className="container">
        <ul >
            {list.map(item => <li key={item.id}><Item item={item} /></li>)}
        </ul>
        </div>
        );
}

export default ItemList;