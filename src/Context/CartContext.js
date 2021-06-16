import React, {createContext, useState, useContext} from 'react'

export const Context = createContext()

export const useCartContext = () => useContext(Context)

const CartContext = ({defaultValue = [], children}) => {

    const [isInCart, setIsInCart] = useState(false)
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const itemInCart = cart.find((x) => x.id === item.id)
        setIsInCart(true)
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
        if(cart.length === 0)
            setIsInCart(false)
    }

    const clear = () => setCart(defaultValue);

    return(
        <Context.Provider value={{ cart, addItem, removeItem, clear }}>
            {children}
        </Context.Provider>
    );

}
export default CartContext;
