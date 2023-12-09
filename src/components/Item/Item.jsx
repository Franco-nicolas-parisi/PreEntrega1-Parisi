import { Link } from "react-router-dom"
import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({product}) =>{
    
    return(

        <div  className="CardItem">
            <img className="ItemImg" src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>Precio: ${product.price}</h3>
            <h4>Stock: {product.stock}</h4>
            <p>Categoría: {product.category}</p>
            <p>Descripción: {product.description}</p>
            <Link className="verMas" to={'/item/'+product.id}> VER MAS </Link>
            <ItemCount/>
        </div>

    )

}

export default Item