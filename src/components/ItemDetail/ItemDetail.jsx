
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { CartContext } from "../Context/CartContext"


const ItemDetail = ({item})=> {

        const {carrito, agregar} = useContext(CartContext)
        console.log(carrito)

        const [cantidad, setCantidad] = useState(1)

        const Sumar = () =>{
            cantidad < item.stock && setCantidad(cantidad + 1)
        }
            const Restar = () =>{
                cantidad > 1 && setCantidad(cantidad - 1)
        }


        return (
        <div className="detailContainer">
            <div className="detailCard">
                <img className="DetailImg" src={item.img} alt={item.name} />
                <div className="detailInfo">
                    <h2>{item.name}</h2>
                    <h3>Precio: ${item.price}</h3>
                    <h4>Stock: {item.stock}</h4>
                    <p>Categoría: {item.category}</p>
                    <p>Descripción: {item.description}</p>
                </div>
            </div>
                <ItemCount cantidad={cantidad} Restar={Restar} Sumar={Sumar} Agregar={()=>{
                    agregar(item, cantidad)
                }}/>
        </div>
        )
}

export default ItemDetail
