import Carrito from "../assets/carrito.png"
import "./CardWidget.css"

const CardWidget = () =>{
    return(
        <div className="CarritoContainer">
            <img src={Carrito} alt="carrito" className="Carrito" />
            0
        </div>
    )
}

export default CardWidget