import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import MockProducts from "./../mockProducts.json";

const listProducts = new Promise (
    (result, reject) => setTimeout(() => result(MockProducts), 2000)

);

const ItemListContainer = ({ greeting }) => {
    
    let [message, setMessage] = useState("");
    let [productos, setProductos] = useState([]);
    let stock = 5;
    let initialQuantity = 1;

    useEffect(() => {
        listProducts.then(setProductos)
    }, [])


    const changeMessage = (value) =>{
        setMessage(value);
    };


    const addItems = (items, ok = true) => {
       ok ? changeMessage(`Se agregaron ${items} productos al carrito`) : changeMessage(`No puede agregarse esa cantidad. Stock disponible: ${items}. Verificar.`);
    }

    return (
        <div className="text-center">
            <h1 > {greeting} </h1>
            <ItemCount stock={stock} initial={initialQuantity} onAdd={addItems} message={message} />
            <ItemList list={productos} />
        </div>
    );
}

export default ItemListContainer;
