import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
// import MockProducts from '../../mockProducts';
// import MockBandInfo from '../../mockBandInfo';
import spinnerGif from '../../img/spinner.gif';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import firebase from 'firebase';

// const listItems = (type = false, category = false) => new Promise(
//     (result, reject) => setTimeout(() => {
//         if(category){
//             result(MockProducts.filter(x => x.category === parseInt(category)));
//         } else if(type === 'bands') {
//             result(MockBandInfo);
//         } else{
//             result(MockProducts);
//         }

//     }, 2000));


const ItemListContainer = ({ type }) => {
    const { category } = useParams();

    const [items, setItems] = useState([]);
    const [spinner, setSpinner] = useState([false]);

    useEffect(() => {
        setSpinner(true);
        const db = getFirestore();
        let itemCollection;

        if (category){
            itemCollection = db.collection("albums").where("category", "==", category).orderBy("artistId");
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
        
        // listItems(type, category).then((result) => { 
        //     setItems(result);
        //     setSpinner(false);
        // });
    }, [category])

    return (
        <div className='text-center'>
           {spinner ? <img alt="spinner" src={spinnerGif} /> :  <ItemList list={items} type={type}/>}
        </div>
    );
}

export default ItemListContainer;
