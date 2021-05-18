import React from 'react';

const CartWidget = ({cantidadItems}) => {
    cantidadItems = 1;
    return (
        <div className="cart">
        <div className="d-flex">
           Carrito 
        <i class="fas fa-shopping-cart"></i>
        {cantidadItems}
        </div>
    </div>
        );
}

export default CartWidget;
