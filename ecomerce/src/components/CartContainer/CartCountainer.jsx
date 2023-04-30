import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"

const CartCountainer = () => {
    const [ id, setId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const { 
        cartList, 
        vaciarCarrito, 
        precioTotal,
        eliminarProducto 
    } = useCartContext()

    const handleSubmit = (event) => {
        event.preventDefault()

        const order={
            buyer: formData, 
            items: cartList.map(({id, name, price})=> ({id, name, price})), 
            total: precioTotal() 
        }

        const db = getFirestore()
        
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp =>setId(resp.id))
        .catch(err => console.log(err))
        .finally(()=>{
                vaciarCarrito()
        })
    }

    const handleOnChange = (event)=> {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <>
        {id && <h2>Hemos generado el id de su compra: {id}</h2>}
        {cartList.length === 0 ? 
            <center>
                <h2>revise su email para seguimiento de la orden</h2>
                <Link to='/'> ⬅ seguir viendo productos</Link>
            </center>
        :
            <div>
                    { cartList.map(product => (
                        <li key={product.id}>
                            <img src={product.foto} alt='imagen' className="w-25" />
                            Nombre: {product.name} - Cantidad: {product.quantity}
                            <button className="btn btn-secondary" onClick={()=> eliminarProducto(product.id)}> {' '} X {' '} </button>
                        </li>
                    ))}
                    <h3>Precio Total: {precioTotal()}</h3>
                    <button className="btn btn-secondary" onClick={vaciarCarrito}>Vaciar Carrito</button>

                    <form  onSubmit={handleSubmit}>
                        <input                         
                            type="text"
                            name="name"
                            placeholder="ingrese el nomber"
                            onChange={handleOnChange}
                            value={formData.name}
                        />
                        <input                         
                            type="text"
                            name="phone"
                            placeholder="ingrese el teléfono"
                            onChange={handleOnChange}
                            value={formData.phone}
                        />
                        <input                         
                            type="text"
                            name="email"
                            placeholder="ingrese el mail"
                            onChange={handleOnChange}
                            value={formData.email}
                        />
                        <input                         
                            type="text"
                            name="repetirMail"
                            placeholder="repetir el mail "
                            onChange={()=>{}}
                            // value={''}
                        />
                        <button className="btn btn-success">Generar Orden</button>
                    </form>
            </div>
        }
        </>
    )
}

export default CartCountainer
