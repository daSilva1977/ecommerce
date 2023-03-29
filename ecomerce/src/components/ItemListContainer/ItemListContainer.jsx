import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting='saludando'}) => {
    const [productos, setProductos] = useState([])
    
    let usuarios= [
        {nombre: "Mariana", apellido: "da Silva"},
        {nombre: "Mariana", apellido: "da Silva"}                
    ]
    useEffect(()=>{
        let url = "https://google.com" 
        const query = async () => {
            let resp = await fetch(url) 
            console.log(resp)            
        }
        query()
    }, [])
    
    useEffect(()=>{
        mockFetch()        
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=>console.log('Siempre y al último'))        
    }, [])
    return (
        <>
            <div> Hola { greeting }
            </div>
            <div>
            { 
                productos.length !== 0 ?                
                    <ItemList productos={productos} />
                    
                :
                    <h2>Cargando...</h2>
            }
        </div>
        </>
    )
}

export default ItemListContainer
