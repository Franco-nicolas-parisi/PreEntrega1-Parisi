import productsJson from "./products/products.json"

const getProducts =()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productsJson)
        }, 500)
    })
}
export default getProducts


export const getProductsById =(id)=>{
    return new Promise((resolve, reject)=>{
        const item = productsJson.find((el) => el.id === id)
        if(item){
            resolve(item)
        }else{
            reject('error: NO SE ENCONTRÓ EL PRODUCTO')
        }
    })
}

