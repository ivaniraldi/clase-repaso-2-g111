import React, { useContext } from 'react'
import Filters from './Filters'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Gallery() {
  const { products } = useContext(ProductContext)
  
  const { addToCart } = useContext(CartContext)

  const navigate = useNavigate()
  return (
    <div className='container d-flex my-2'>
      <Filters/>
      <div className='d-flex justify-content-center'>
        <div className='row gap-2 d-flex justify-content-center'>

          {products != null ? products.map((p, i)=> {
            return(
              <div className='col-3 p-3 bg-light border rounded' key={i}>
                <img className='card-img' src={p.images[0]} alt={p.title}/>
                <h5>{p.title}</h5>
                <p>${p.price}</p>
                <button className='btn btn-dark btn-sm' onClick={()=>addToCart(p.id, p)}>Añadir al carrito</button>
                <button className='btn btn-light btn-sm' onClick={()=>navigate("/detail/" + p.id)}>Ver detalle</button>
              </div>
            )
          }): "Cargando productos..." }
        </div>
      </div>
    </div>
  )
}
