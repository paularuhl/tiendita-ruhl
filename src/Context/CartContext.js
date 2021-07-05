import React, {createContext, useState, useContext} from 'react'

export const Context = createContext()

export const useCartContext = () => useContext(Context)

const CartContext = ({defaultValue = [], children}) => {

    // eslint-disable-next-line
    const [cart, setCart] = useState([])
    
    const quantity = () => cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalItems = () => cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    const addItem = (item, quantity) => {

        const itemInCart = cart.find((i) => i.artistId === item.artistId);

        if(itemInCart){
            itemInCart.quantity += quantity
            setCart([...cart])
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const removeItem = (id) => {
        cart.splice(            
            cart.findIndex((item) => item.id === id), 1
        )
        setCart([...cart]);
    }

    const clear = () => setCart(defaultValue);

    return(
        <Context.Provider value={{ cart, addItem, removeItem, clear, totalItems, quantity }}>
            {children}
        </Context.Provider>
    );

}
export default CartContext;
