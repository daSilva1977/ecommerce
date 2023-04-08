import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mockFetch } from "../../utils/mockFetch"


const ItemDetailContainer = () => {
    const [product, setProductos] = useState({})
    const {pid} =useParams()

    useEffect(()=>{mockFetch(pid)
      .then(resp => setProductos(resp))
            .catch(err => console.log(err))
    }, [])
  return (
<ItemDetail product={product}/>
  )
}

export default ItemDetailContainer
