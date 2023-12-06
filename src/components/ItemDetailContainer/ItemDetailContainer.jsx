import { useEffect, useState } from "react"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProductsById } from "../getProducts"


const ItemDetailContainer = () => {

        const [item, setItem] = useState(null)

        const id = useParams().id

        useEffect(()=>{
            getProductsById(id)
                .then((res)=>{
                    setItem(res)
                }
            )
        }, [id])

        return (
                <div>
                    { item && <ItemDetail item={item}/>}
                </div>
        )
}

export default ItemDetailContainer
