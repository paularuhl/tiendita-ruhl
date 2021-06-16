import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import './ItemCount.scss'

const ItemCount = ({ stock, initial, onAdd, message, item}) => {

    const [quantity, setQuantity] = useState(initial);

    const changeQuantity = (value) => {
        if(quantity + value <= stock && 0 <= quantity + value)
        setQuantity(quantity + value);
    };

    return (
        <div className='itemCount'>
            <div className='itemControls' >
                <button onClick={() => changeQuantity(-1)}>
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>
                <h1>
                    {quantity}
                </h1>
                <button onClick={() => changeQuantity(+1)}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
            </div>
            <button className='btn'
                onClick={() => onAdd(item, quantity)}> Agregar al carrito
            </button>
            <p>
                {message}
            </p>
        </div>
    );
}

export default ItemCount;