import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const [titulo, setTitulo] = useState("Productos")

    const category = useParams().category

    useEffect(()=>{
        const productsRef = collection(db, "products");
        const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

        getDocs(q)
            .then((res)=>{
                setProducts(
                    res.docs.map((doc)=>{
                        return {...doc.data(), id: doc.id}
                    })
                )
            })
    }, [category])


    return(
        <div className="ItemListContainer">
            <ItemList products={products} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer