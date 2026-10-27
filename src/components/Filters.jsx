import React from 'react'

export default function Filters() {
  return (
    <div>
      <div>
        <h6>Filtrar productos</h6>
      </div>
      <div>
        <label htmlFor="Precio">Precio</label>
        <input type="range" name="" id="" />
        <br />
        <label htmlFor="">Categoria</label>
        <select className='form-control' name="test" id="">
          <option value="1">Comida</option>
          <option value="1">Electronica</option>
          <option value="1">Maquillaje</option>
        </select>
      </div>
    </div>
  )
}
