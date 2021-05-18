import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart">
        <div className="d-flex">
            <i class="fas fa-shopping-cart"></i>
        </div>
        <div className="d-flex justify-content-center">
            <span className="">3</span>
        </div>
    </div>
        );
}

export default CartWidget;
