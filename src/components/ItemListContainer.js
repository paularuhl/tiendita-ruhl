import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import MockProducts from "../mockProducts";

const listProducts = new Promise (
    (result, reject) => setTimeout(() => result(MockProducts), 2000)

);

const ItemListContainer = ({ greeting }) => {
    
    let [productos, setProductos] = useState([]);

    useEffect(() => {
        listProducts.then(setProductos)
    }, [])

    return (
        <div className="text-center">
            <h1 > {greeting} </h1>
            <ItemList list={productos} />
        </div>
    );
}

export default ItemListContainer;
