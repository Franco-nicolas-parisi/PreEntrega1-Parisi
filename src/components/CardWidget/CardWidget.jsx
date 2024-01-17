
import { useContext } from "react"
import "./CardWidget.css"
import { Link } from "react-router-dom"
import { CartContext} from "../Context/CartContext"


const CardWidget = () =>{

    const {cantidadEnCarrito} = useContext(CartContext)

    return(
        <div className="CarritoContainer">
            <Link to='/carrito' className="carrito">
                <i class="bi bi-cart3"></i> 
                <span>  {cantidadEnCarrito()}  </span>
            </Link>
        </div>
    )
}

export default CardWidget