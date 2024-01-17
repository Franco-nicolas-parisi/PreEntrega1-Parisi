import { useContext } from "react"
import "./Carrito.css"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"

const Carrito = () =>{

    const {carrito, montoFinal, vaciarCarrito} = useContext(CartContext)

    const vaciar = () =>{
        vaciarCarrito()
    }

    return(
        <div className="carritopage">

            <div>
                {
                    carrito.map((prod)=>(
                        <div key={prod.id} className="info-product">
                            <img src={prod.img} alt={prod.description} className="img-carrito-item"></img>
                            <div className="cantidad-precio">
                                <h2>{prod.name}</h2>
                                <p>Cantidad Solicitada: {prod.cantidad}</p>
                                <p>Precio Unitario: ${prod.price}</p>
                                <p>Precio Total: ${prod.price * prod.cantidad}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

            {
                carrito.length > 0 ?

                <>
                    <h2>MONTO FINAL: ${montoFinal()}</h2>
                    <button onClick={vaciar} className="vaciar-carrito-button">Vaciar Carrito</button>
                    <button className="finalizarCompra-btt"><Link to="/Checkout" className="finalizarCompra">Finalizar Compra</Link></button>
                </>

                :
                
                <h2>EL CARRITO ESTÁ VACIO</h2>
                
            }
            
        </div>
    )
}

export default Carrito