
import { useContext } from "react"
import "./CardWidget.css"
import { Link } from "react-router-dom"
import { CartContext, CartProvider } from "../Context/CartContext"

const CardWidget = () =>{

    const {cantidadEnCarrito} = useContext(CartContext)

    return(
        <div className="CarritoContainer">
            <Link to='/carrito' className="carrito"> 
                Carrito  
                <span>{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CardWidget