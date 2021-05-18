import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'




const CartWidget = ({cantidadItems}) => {
    cantidadItems = 1;
    return (
        <div className="cart">
        <div className="d-flex">
           <FontAwesomeIcon className="cartIcon" icon={faShoppingCart}/> 
        </div>
        <div className="d-flex">
           {cantidadItems} 
        </div>
    </div>
        );
}

export default CartWidget;
