import React from 'react';
import { NavLink } from 'react-router-dom';
import Item from '../Item/Item';
import BandDetail from '../BandDetail/BandDetail';
import './ItemList.scss';

const ItemList = ({ list, type }) => {

    return (
        <div className='container'>
            <ul >
                {type === 'bands' ?
                    list.map(item => <li key={item.id}><BandDetail item={item} /></li>)
                    : list.map(item => <li key={item.id}><NavLink to={`/item/${item.id}`} className="link"><Item item={item} /></NavLink></li>)}
            </ul>
        </div>
    );
}

export default ItemList;