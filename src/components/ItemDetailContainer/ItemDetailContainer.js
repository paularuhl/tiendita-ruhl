import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import MockProducts from "../../mockProducts";

const getItems = new Promise (
    (result, reject) => setTimeout(() => result(MockProducts), 2000)
);

const ItemDetailContainer = () => {
    let [itemDetail, setItemDetail] = useState([]);

    useEffect(() => {
        getItems.then(setItemDetail(MockProducts[0]))
    }, []);

    return (
        <div className="item-detail-container"> 
            {itemDetail ? <ItemDetail item={itemDetail} /> : null}
        </div>
    );
}

export default ItemDetailContainer;