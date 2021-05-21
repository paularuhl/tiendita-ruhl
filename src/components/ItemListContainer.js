import React, {useState} from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    
    let [message, setMessage] = useState("");
  
    const changeMessage = (value) =>{
        setMessage(value);
    };

    let stock = 5;
    let initialQuantity = 1;

    const addItems = (items, ok = true) => {

       ok ? changeMessage(`Se agregaron ${items} productos al carrito`) : changeMessage(`No puede agregarse esa cantidad. Stock disponible: ${items}. Verificar.`);
    }

    return (
        <div className="text-center">
            <h1 > {greeting} </h1>
            <ItemCount stock={stock} initial={initialQuantity} onAdd={addItems} message={message} />
        </div>
    );
}

export default ItemListContainer;
