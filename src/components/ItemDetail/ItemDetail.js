import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';

const ItemDetail = ({ item }) => {
    let stock = 5;
    let initialQuantity = 1;

    let [message, setMessage] = useState('');

    const changeMessage = (value) =>{
        setMessage(value);
    };

    const addItems = (items, ok = true) => {
       ok ? changeMessage(`Se agregaron ${items} productos al carrito`) : changeMessage(`No puede agregarse esa cantidad. Stock disponible: ${items}. Verificar.`);
    }

    return (
        <div className='item-detail-card'> 
            <img src={item.pictureUrl} width='100' alt={`Album cover of ${item.title}`}/>
            <div className='detailInfo'>
            <h5>{item.title} <span>${item.price}</span></h5>
            <p>{item.description}</p>
            <ItemCount stock={stock} initial={initialQuantity} onAdd={addItems} message={message} />
            </div>
        </div> 
    );
}

export default ItemDetail;