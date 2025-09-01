import React, { createContext, useState } from 'react'

export let cartContext = createContext()

export default function Maincontext({ children }) {

    let [cart, setCart] = useState(0)
    let [wishlist, setWishlist] = useState(0)


    let obj = {
        cart,
        setCart,
        wishlist,
        setWishlist,
    }


    return (
        <cartContext.Provider value={obj}>
            {children}
        </cartContext.Provider>
    )
}
