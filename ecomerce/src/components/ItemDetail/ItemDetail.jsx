import React from "react"
import { ItemCount } from "../ItemCount/ItemCount"
const ItemDetail = ({product}) => {
  return (
    <div className="row">
      <div className="col-6">
       <img src={"product.foto"} className="w-25"/>
       <h3>Nombre: {product.name} </h3>
       <h4>Precio: {product.price} </h4>
       <h4>Categoria: {product.categoria} </h4>
      </div>
      <div className="col-6">
    <ItemCount/>
      </div>
    </div>
  )
} 
export default ItemDetail
