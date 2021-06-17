import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import spinnerGif from '../../img/spinner.gif';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';


const ItemListContainer = ({ type }) => {
    const { category } = useParams();

    const [items, setItems] = useState([]);
    const [spinner, setSpinner] = useState([false]);

    useEffect(() => {
        setSpinner(true);
        const db = getFirestore();
        let itemCollection;

        if (category){
            itemCollection = db.collection("albums").where("category", "==", +category).orderBy("artistId");
        } else if(type === 'bands') {
            itemCollection = db.collection("artists");
        } else{
            itemCollection = db.collection("albums").orderBy("artistId");
        }

        const itemCollectionQuery = itemCollection.get()

        itemCollectionQuery.then((querySnapshot) => {
            setItems(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
            setSpinner(false);
        })
        .catch((e) => {console.log(e)})
// eslint-disable-next-line
    }, [category])

    return (
        <div className='text-center'>
           {spinner ? <img alt="spinner" src={spinnerGif} /> :  <ItemList list={items} type={type}/>}
        </div>
    );
}

export default ItemListContainer;
