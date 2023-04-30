
import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)


export const CartContextProvider = ({children}) => { 
 
    const [cartList, setCartList] = useState([])

    const agregarAlCart = (newProduct) =>{

        const indexProduct = cartList.findIndex(product => product.id === newProduct.id)  //  -1
        
        if (indexProduct === -1 ) {
            setCartList([
                ...cartList,
                newProduct
            ])              
        } else {
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList( [ ...cartList ] )
        }

    }
    // localStorage.setItem('nombre', 'valor')

    // cantidad total de productos
    const cantidadTotal = () => cartList.reduce( (cantidadTotal, objProducto) => cantidadTotal += objProducto.quantity ,0 ) 
    // retorna un valor

    // precio total de productos
    const precioTotal = () => {
        return cartList.reduce((totalPrice, objProducto) => totalPrice += (objProducto.price * objProducto.quantity), 0)
    }
    // eliminar por item
    const eliminarProducto = (pid) =>{

        const indexProduct = cartList.findIndex(product => product.id === pid)

        if (cartList[indexProduct].quantity > 1) {
            cartList[indexProduct].quantity = cartList[indexProduct].quantity -  1            
            setCartList( [...cartList] )
        } else {
            setCartList(cartList.filter(product => product.id !== pid ))          
        }
    }
// [1,2,3,4,5,6,7].filter(nro => nro !== numero) -> [1]
    const vaciarCarrito = () => {
        setCartList([])
    }

    return( 
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>       
    )                                                                                                                                                                           
}

