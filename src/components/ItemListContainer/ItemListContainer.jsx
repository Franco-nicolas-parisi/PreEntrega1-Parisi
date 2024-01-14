import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import getProducts from "../getProducts"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const [titulo, setTitulo] = useState("Productos")

    const category = useParams().category

    useEffect(()=>{
        getProducts()
            .then((res)=>{
                if(category){
                setProducts(res.filter((prod)=>prod.category === category));
                setTitulo(category);}

                else{
                    setProducts(res)
                    setTitulo("Productos")
                }
            }
        )
    }, [category])


    return(
        <div className="ItemListContainer">
            <ItemList products={products} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer