import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mockFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { Filter } from "../RenderProps/Filter"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {cid} = useParams()
    useEffect(()=>{
    if (cid) {
        mockFetch()
            .then(resp => {          
               setProductos(resp.filter(prod => prod.categoria === cid))
            })        
            .catch(err => console.log(err))
            .finally(()=> console.log('Siempre y al último'))          
        
    } else {
        mockFetch()
            .then(resp => {   
               setProductos(resp)
            })        
            .catch(err => console.log(err))
            .finally(()=> console.log('Siempre y al último'))             
    }
}, [cid])
    
    const hanldePoductsFiltered =  ({filterState, handleFilterChange}) => (
        <div>
            <h2>Buscar Producto</h2>
            <h2>{filterState}</h2>
            <input type="text" value={filterState} onChange={handleFilterChange} />
           <ItemList
                productos = {
                    filterState === '' ?
                        productos
                    :
                        productos.filter( producto => producto.name.toLowerCase().includes(filterState.toLowerCase()) )
                }
            />
        </div>
        
    )
    return (
        <>
            { productos.length !== 0 ?
                  <Filter>
                  { hanldePoductsFiltered }                   
               </Filter>
                :
                    <h2>Cargando...</h2>
            }
            <div>
        </div>
        </>
    )
}      

export default ItemListContainer
