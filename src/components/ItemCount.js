import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ stock, initial, onAdd, message }) => {

    const [quantity, setQuantity] = useState(initial);
    const [currentStock, setCurrentStock] = useState(stock);

    const changeQuantity = (value) => {
        setQuantity(quantity + value);
    };

    const canAdd = () => {
       return quantity <= currentStock && quantity >= 0;
    }

    return (
        <div className="container text-center itemCount">
            <div className="container itemControls" >
                <button className="btnCounter" onClick={() => changeQuantity(-1)}>
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>
                <h1 className="quantity">{quantity}
                </h1>
                <button className="btnCounter" onClick={() => changeQuantity(+1)}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
            </div>
            <button className="btn addToCart"
                onClick={() => {
                    if (canAdd()) {
                        onAdd(quantity);
                        setCurrentStock(currentStock - quantity);
                    } else onAdd(currentStock, false);
                }}> Agregar al carrito
            </button>
            <p>
                {message}
            </p>
        </div>
    );
}

export default ItemCount;