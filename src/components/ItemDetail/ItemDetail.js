import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';
import { NavLink } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    let stock = 5;
    let initialQuantity = 1;

    let [message, setMessage] = useState('');
    let [terminarCompra, setTerminarCompra] = useState(false);
    let [itemCountResult, setItemCountResult] = useState();

    const changeMessage = (value) =>{
        setMessage(value);
    };

    const addItems = (value, ok = true) => {
        setItemCountResult(value);
        setTerminarCompra(true);
        // ok ? changeMessage(`Se agregaron ${value} productos al carrito`) : changeMessage(`No puede agregarse esa cantidad. Stock disponible: ${value}. Verificar.`);
    }

    return (
        <div className='item-detail-card'>
            <img src={item.pictureUrl} width='100' alt={`Album cover of ${item.title}`} />
            <div className='detailInfo'>
                <h5>{item.title} <span>${item.price}</span></h5>
                <p>{item.description}</p>
                {terminarCompra ? 
                    <NavLink to={`/cart`}> <button className='btn'>Termina tu compra</button>  </NavLink> 
                     : <ItemCount stock={stock} initial={initialQuantity} onAdd={addItems} message={message} />}
            </div>
        </div>
    );
}

export default ItemDetail;