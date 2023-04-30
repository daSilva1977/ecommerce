import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"



const ItemDetail = ({product}) => {
	const [tineCantidad, actualizarTieneCantidad] = useState(false)
	const { agregarAlCart } = useCartContext()

	const onAdd = (cantidad) => {  // { product, cantidad:  }
		console.log(cantidad)
		agregarAlCart( { ...product, quantity: cantidad } )
		actualizarTieneCantidad(true)
	} 
    return (
    <div className="row">
	<div className="col-6">
			<img src={product.foto} className="w-25" />
			<h3>Nombre: {product.name}</h3>
			<h4>Precio: {product.price}</h4>
			<h4>Categoria: {product.categoria}</h4>
		</div>
		<div className="col-6">
		{/* condition */}
			{tineCantidad ? 
					<>
						<Link className="btn btn-dark" to='/cart'>Finalizar Compra</Link>
						<Link className="btn btn-info" to='/'>Continuar Comprando</Link>
					</>
				: 
					<ItemCount inital={1} stock={5} onAdd={onAdd} />
			}
		</div>
    </div>
    )
}

export default ItemDetail
