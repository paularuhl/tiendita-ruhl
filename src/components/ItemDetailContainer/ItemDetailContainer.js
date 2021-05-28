import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import MockProducts from '../../mockProducts';
import spinnerGif from '../../img/spinner.gif';

const getItem = (itemId) => new Promise(
    (result, reject) => setTimeout(() => {
        return result(MockProducts.find(x => x.id === parseInt(itemId)))
    }, 2000)
        
);

const ItemDetailContainer = () => {
    const { id } = useParams();
    
    const [itemDetail, setItemDetail] = useState([]);
    const [spinner, setSpinner] = useState([false]);
    
    useEffect(() => {
        setSpinner(true);
        getItem(id).then((result) => { 
            setItemDetail(result);
            setSpinner(false);
        });
    }, [id]);

    return (
        <div className='item-detail-container'>
            {spinner ? <img src={spinnerGif} /> : <ItemDetail item={itemDetail} />}
        </div>
    );
}

export default ItemDetailContainer;