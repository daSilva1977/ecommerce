import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <div className='card w-25 m-5'>
            <img src={producto.foto} className='card-img-top w-100' alt="imagen"/>
            <div className="card-body">
                <label>Nombre: {producto.name}</label>
                <label>Precio: {producto.price}</label>
                <label>Stock: {producto.stock}</label>
            </div>
            <div className="card-footer">
                <Link to={ `/detail/${producto.id}` }>
                <button className="btn btn-outline-dark">Detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item

