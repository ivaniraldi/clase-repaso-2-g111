import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  const { cart, sumarUno, restarUno, quitarDelCarrito } = useContext(CartContext)
  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-8'>
          {cart.length > 0 ? cart.map((p, i)=>
            <div key={i} className='d-flex justify-content-between bg-light p-2 mb-2 border rounded' >
              
              <div className='d-flex justify-content-center gap-2 align-items-center'>
                <img src={p.thumbnail} style={{width:"56px"}} alt="" />
                <h6>{p.title}</h6>
              </div>
              <div className='d-flex justify-content-center gap-2 align-items-center'>
                <button onClick={()=> restarUno(p.id)} className='btn btn-dark btn-sm'>-</button> {p.quantity? p.quantity : 0} <button onClick={()=> sumarUno(p.id)} className='btn btn-dark  btn-sm'>+</button><button onClick={()=> quitarDelCarrito(p.id)} className='btn btn-danger  btn-sm'>x</button>
              </div>
               </div>
        ) : "Aún no añadiste ningun producto al carrito :( "}
        </div>
           <div className='col-4'>
            <h3>Info de tu compra:</h3>
            <h5>Total: {cart.reduce((a, p) => (a += p.price * p.quantity), 0).toLocaleString()}</h5>
        </div>
      </div>
    </div>
  )
}
