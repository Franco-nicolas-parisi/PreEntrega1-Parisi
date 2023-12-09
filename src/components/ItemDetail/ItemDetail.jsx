import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({item})=> {
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
            <ItemCount item={item}/>
        </div>
        )
}

export default ItemDetail
