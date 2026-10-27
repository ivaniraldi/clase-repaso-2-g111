import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function Destacados() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate()
  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Nuestros productos destacados:</h3>

      <div>
        {products != null ? (
          <div  className=" row d-flex justify-content-around">
            <div className=" col-3 bg-light rounded border p-4">
              <img className="card-img" src={products[0].images[0]} alt="" />
              <h5>{products[0].title}</h5>
              <button onClick={()=> navigate("/detail/" + products[0].id)} className="btn btn-dark">Ver mas</button>
            </div>
                  <div className=" col-3 bg-light rounded border p-4">
              <img className="card-img" src={products[1].images[0]} alt="" />
              <h5>{products[1].title}</h5>
              <button onClick={()=> navigate("/detail/" + products[1].id)} className="btn btn-dark">Ver mas</button>
            </div>
                  <div className=" col-3 bg-light rounded border p-4">
              <img className="card-img" src={products[2].images[0]} alt="" />
              <h5>{products[2].title}</h5>
              <button onClick={()=> navigate("/detail/" + products[2].id)} className="btn btn-dark">Ver mas</button>
            </div>
           
          </div>
        ) : (
          <p>Cargando... </p>
        )}
      </div>
    </div>
  );
}
