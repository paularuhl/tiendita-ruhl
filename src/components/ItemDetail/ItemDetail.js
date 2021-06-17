import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({ item }) => {
    let stock = 5;
    let initialQuantity = 1;

    // eslint-disable-next-line
    const [quantity, setQuantity] = useState(0);    
    const [terminarCompra, setTerminarCompra] = useState(false);
    // eslint-disable-next-line
    const [itemCountResult, setItemCountResult] = useState();

    const { addItem } = useCartContext();


    const addItems = (item, quantity) => {
        setQuantity(quantity)
        setItemCountResult(item);
        addItem(item, quantity);
        setTerminarCompra(true);
    }

    return (
        <div className='item-detail-card'>
            <img src={item.pictureUrl} width='100' alt={`Album cover of ${item.title}`} />
            <div className='detailInfo'>
                <h5>{item.title} <span>${item.price}</span></h5>
                <p>{item.description}</p>
                {terminarCompra ? 
                    <NavLink to={`/cart`}> <button className='btn'>Termina tu compra</button>  </NavLink> 
                     : <ItemCount stock={stock} initial={initialQuantity} onAdd={addItems} item={item} />}
            </div>
        </div>
    );
}

export default ItemDetail;