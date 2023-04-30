import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from "../ItemList/ItemList.jsx"
import Loading from "../Loading/Loading"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const {cid} = useParams()

    useEffect(()=>{
    const db = getFirestore()        
    const queryCollection = collection(db, 'productos') 
    const queryFilter = cid ? query(queryCollection,where('categoria', '==', cid))   : queryCollection

    getDocs(queryFilter)
    .then(resp => setProductos( resp.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
    .catch(err => console.log(err))
    .finally(()=> setIsLoading(false))        

    }, [cid])   


    return (
        <>
            { isLoading 
                ?
                    <Loading />  
                :
                    <ItemList 
                        productos = {productos}
                    />
            
            }       
            
        </>
    )
}

export default ItemListContainer
