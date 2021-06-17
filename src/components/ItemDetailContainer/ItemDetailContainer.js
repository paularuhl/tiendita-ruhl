import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
// import MockProducts from '../../mockProducts';
import spinnerGif from '../../img/spinner.gif';
import { getFirestore } from '../../firebase';

// const getItem = (itemId) => new Promise(
//     (result, reject) => setTimeout(() => {
//         return result(MockProducts.find(x => x.id === parseInt(itemId)))
//     }, 2000)
        
// );

const ItemDetailContainer = () => {
    const { id } = useParams();
    
    const [itemDetail, setItemDetail] = useState([]);
    const [spinner, setSpinner] = useState([false]);
    
    useEffect(() => {
        setSpinner(true);
        const db = getFirestore()
        const getItem = db.collection("albums").doc(id)

        getItem.get().then((querySnapshot) => {
            setItemDetail(querySnapshot.data())
            setSpinner(false) 
        })
        .catch((e) => {console.log(e)})

    }, [id]);

    return (
        <div className='item-detail-container'>
            {spinner ? <img alt="spinner" src={spinnerGif} /> : <ItemDetail item={itemDetail} />}
        </div>
    );
}

export default ItemDetailContainer;