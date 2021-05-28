import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import MockProducts from '../../mockProducts';
import MockBandInfo from '../../mockBandInfo';
import spinnerGif from '../../img/spinner.gif';

const listItems = (type) => new Promise (
    (result, reject) => setTimeout(() => result(type === 'bands' ? MockBandInfo : MockProducts), 2000)
);

const ItemListContainer = ({ type }) => {
    
    const [items, setItems] = useState([]);
    const [spinner, setSpinner] = useState([false]);

    useEffect(() => {
        setSpinner(true);
        listItems(type).then((result) => { 
            setItems(result);
            setSpinner(false);
        });
    }, [])

    return (
        <div className='text-center'>
           {spinner ? <img src={spinnerGif} /> :  <ItemList list={items} type={type}/>}
        </div>
    );
}

export default ItemListContainer;
