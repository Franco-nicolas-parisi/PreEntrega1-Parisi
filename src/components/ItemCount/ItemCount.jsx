import "./ItemCount.css"

function ItemCount( {cantidad, Restar, Sumar, Agregar} ){

    return(
        <div className="Contador">
            <div className="ControlesCantidad">
                <button className="Btt" onClick={Sumar}>+</button>
                <h3 className="Number">{cantidad}</h3>
                <button className="Btt" onClick={Restar}>-</button>
            </div>
            <div className="AgregarCantidad">
                <button className="Btt-agregar" onClick={Agregar}>
                        AGREGAR AL CARRITO
                </button>
            </div>
            
        </div>
    )
}

export default ItemCount
