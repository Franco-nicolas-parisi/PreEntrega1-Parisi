import { useState } from "react";
import "./ItemCount.css"

function ItemCount( {item} ){
    const [cantidad, setCantidad] = useState(1)

    const Sumar = () =>{
            cantidad < item.stock && setCantidad(cantidad + 1)
        }
    const Restar = () =>{
            cantidad > 1 && setCantidad(cantidad - 1)
    }

    return(
        <div className="Contador">
            <div className="ControlesCantidad">
                <button className="Btt" onClick={Sumar}>+</button>
                <h3 className="Number">{cantidad}</h3>
                <button className="Btt" onClick={Restar}>-</button>
            </div>
            <div className="AgregarCantidad">
                <button className="Btt-agregar">
                        AGREGAR AL CARRITO
                </button>
            </div>
            
        </div>
    )
}

export default ItemCount
