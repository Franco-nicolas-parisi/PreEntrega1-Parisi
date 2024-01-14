import { useContext } from "react"
import "./Carrito.css"
import { CartContext } from "../Context/CartContext"

const Carrito = () =>{

    const {carrito, montoFinal, vaciarCarrito} = useContext(CartContext)

    const vaciar = () =>{
        vaciarCarrito()
    }

    return(
        <div>
            <h1>CARRITO</h1>
            {
                carrito.map((prod)=>(
                    <div key={prod.id}>
                        <img src={prod.img} alt="imagen"></img>
                        <h2>{prod.name}</h2>
                        <p>Cantidad Solicitada: {prod.cantidad}</p>
                        <p>Precio Unitario: ${prod.price}</p>
                        <p>Precio Total: ${prod.price * prod.cantidad}</p>
                    </div>
                ))
            }

            {
                carrito.length > 0 ?

                <>
                    <h2>MONTO FINAL: ${montoFinal()}</h2>
                    <button onClick={vaciar}>Vaciar Carrito</button>
                </>

                :
                
                <h2>EL CARRITO ESTÁ VACIO</h2>
                
            }
            
        </div>
    )
}

export default Carrito