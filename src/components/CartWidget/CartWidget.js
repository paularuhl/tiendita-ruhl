import React from 'react';
import './CartWidget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext';

const CartWidget = ({cantidadItems}) => {
    const { cart } = useCartContext();

    cantidadItems = 1;
    return (
        <div className='cart link'>
        <div className='d-flex'>
           <FontAwesomeIcon className='cartIcon' icon={faShoppingCart}/> 
        </div>
        <div className='d-flex'>
           {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </div>
    </div>
        );
}

export default CartWidget;
