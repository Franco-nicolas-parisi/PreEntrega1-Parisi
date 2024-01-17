import {useForm} from "react-hook-form";
import "./Checkout.css"
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { collection, addDoc} from "firebase/firestore";
import { db } from "../../firebase/config"

const Checkout = () =>{

    const [pedidoId, setPedidoId] = useState("")
    
    const {carrito, montoFinal, vaciarCarrito} = useContext(CartContext)

    const {register, handleSubmit} = useForm();

    const comprar = (data) =>{
        const pedido = {
            cliente: data,
            productos: carrito,
            total: montoFinal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc)=>{
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if(pedidoId){
        return(
            <div className="container">
                <h1>¡MUCHAS GRACIAS POR TU COMPRA!</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return(
        <div className="checkout-form">
            <h1>INGRESE SUS DATOS</h1>
            <form className="Form-compra" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")}/>
                <input type="email" placeholder="Ingrese su e-mail" {...register("email")}/>
                <input type="phone" placeholder="Ingrese su número de teléfono"{...register("phone")}/>
                <button className="btt-submit" type="submit">ENVIAR DATOS Y CONFIRMAR COMPRA</button>
            </form>
        </div>
    )
}

export default Checkout