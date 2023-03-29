import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"

const Contenedor = () => {
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        mockFetch()        
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=>console.log('Siempre y al último'))        
    }, [])
    console.log(productos)
    
    return (
        <div>
                {/*    [ <li>1</li>, <li>2</li>], <li>4</li> .... ]   */}
            {/* { [1,1,2,3,4].map((itemNum, index )=> <li key={index} >{itemNum}</li>) } */}
            { 
                productos.length !== 0 ? 
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        {productos.map( producto =>  <div key={producto.id} className='card w-25'>
                                                        <img src={producto.foto} className='card-img-top w-100' alt="imagen"/>
                                                        <div className="card-body">
                                                            <label>Nombre: {producto.name}</label>
                                                            <label>Precio: {producto.price}</label>
                                                            <label>Stock: {producto.stock}</label>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button className="btn btn-outline-dark">Detalle</button>
                                                        </div>
                                                    </div>
                        )}                 
                    </div>
                :
                    <h2>Cargando...</h2>
            }
        </div>
    )
}
export default Contenedor
