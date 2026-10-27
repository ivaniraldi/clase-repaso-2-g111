import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const ProductProvider = ({children})=>{
    const [products, setProducts] = useState(null)
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        async function getProducts() {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setProducts(data.products)
        }
        getProducts()
    },[])

    const getProduct = async(id)=>{
        const res = await fetch("https://dummyjson.com/products/" + id)
        const data = await res.json()
        setProduct(data)
    }

    return(
        <ProductContext.Provider value={{products, getProduct, product}}>
            { children }
        </ProductContext.Provider>
    )
}

export default ProductProvider