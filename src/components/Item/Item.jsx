import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({product}) =>{
    
    return(

        <div  className="CardItem">
            <img className="ItemImg" src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>Precio: ${product.price}</h4>
            <p>Categoría: {product.category}</p>
            <p>Descripción: {product.description}</p>
            <Link className="  verMas  " to={'/item/'+product.id}> VER MAS </Link>
        </div>

    )

}

export default Item