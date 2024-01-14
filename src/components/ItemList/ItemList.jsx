import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products, titulo})=>{

    return(

        <div>

            <h2>{titulo}</h2>
            <div className="ListGroup">
                {products.length > 0 && products.map((product)=>{
                    return(
                        <div className="items">
                            <Item key={product.id} product={product}/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default ItemList