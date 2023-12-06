import { useState } from "react";
import "./ItemCount.css"

function ItemCount({stock, initial, onAdd}){
    const [cantidad, setCantidad] = useState(initial)

    const Sumar = () =>{
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const Restar = () =>{
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className="Contador">
            <div className="ControlesCantidad">
                <button className="Btt" onClick={Sumar}>+</button>
                <h3 className="Number">{cantidad}</h3>
                <button className="Btt" onClick={Restar}>-</button>
            </div>
            <div className="AgregarCantidad">
                <button className="Btt-agregar" onClick={()=>onAdd(cantidad)} disabled={!stock}>
                        AGREGAR AL CARRITO
                </button>
            </div>
            
        </div>
    )
}

export default ItemCount
