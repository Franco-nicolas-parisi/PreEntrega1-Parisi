import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    const agregar = (item, cantidad) =>{
    const ItemAgregado = {...item, cantidad};
    const newCarrito = [...carrito]
    const estaEnElCarrito = newCarrito.find((product) => product.id === ItemAgregado.id)
    if(estaEnElCarrito){
        estaEnElCarrito.cantidad += cantidad
    } else{
        newCarrito.push(ItemAgregado)}
        setCarrito(newCarrito)
  }
    const cantidadEnCarrito = () =>{
        return carrito.reduce((acc, prod)=> acc + prod.cantidad, 0 )
    }

    const montoFinal = ()=>{
      return carrito.reduce((acc, prod)=> acc + prod.price * prod.cantidad, 0)
    }
  
    const vaciarCarrito = () =>{
      setCarrito([])
    }

    return(
        <>
            <CartContext.Provider value={{carrito, agregar, cantidadEnCarrito, montoFinal, vaciarCarrito}}>
                {children}
            </CartContext.Provider>
        </>
    )
}