import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import MockProducts from '../../mockProducts';
import MockBandInfo from '../../mockBandInfo';
import spinnerGif from '../../img/spinner.gif';
import { useParams } from 'react-router-dom';

const listItems = (type = false, category = false) => new Promise(
    (result, reject) => setTimeout(() => {
        if(category){
            result(MockProducts.filter(x => x.category === parseInt(category)));
        } else if(type === 'bands') {
            result(MockBandInfo);
        } else{
            result(MockProducts);
        }

    }, 2000));

const ItemListContainer = ({ type }) => {
    const { category } = useParams();

    const [items, setItems] = useState([]);
    const [spinner, setSpinner] = useState([false]);

    useEffect(() => {
        setSpinner(true);
        listItems(type, category).then((result) => { 
            setItems(result);
            setSpinner(false);
        });
    }, [category])

    return (
        <div className='text-center'>
           {spinner ? <img src={spinnerGif} /> :  <ItemList list={items} type={type}/>}
        </div>
    );
}

export default ItemListContainer;
