import React from 'react';
import './CartWidget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext';

const CartWidget = ({cantidadItems}) => {
    const { quantity } = useCartContext();

    return (
        <div className='cart link'>
        <div className='d-flex'>
           <FontAwesomeIcon className='cartIcon' icon={faShoppingCart}/> 
        </div>
        <div className='d-flex'>
           {quantity()}
        </div>
    </div>
        );
}

export default CartWidget;
