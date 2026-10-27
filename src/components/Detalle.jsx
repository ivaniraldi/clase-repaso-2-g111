import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'

export default function Detalle() {
  const { id } = useParams()
  const { product, getProduct } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)
  
  useEffect(()=>{
    getProduct(id)
  },[])

  return (
    <div className='container'>
      {product != null ? <div className='row d-flex justify-content-center'>
        <img src={product.images[0]} className='col-6' alt="asdasd" />
        <div className='col-6 p-5'>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <br />
          <h2>${product.price}</h2>
          <button className='btn btn-dark' onClick={()=>addToCart(product.id, product)}>Añadir al carrito</button>
        </div>
      </div> : "Cargando producto..."}
    </div>
  )
}
