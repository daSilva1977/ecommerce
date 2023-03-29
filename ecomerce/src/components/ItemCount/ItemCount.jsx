import { useEffect, useRef, useState } from "react"

export const ItemCount = () => {
    const [contador, setContador] = useState(0) 
    const [booleano, setBooleano ] = useState(true)
    const renderCount = useRef(0)
    
    useEffect(()=>{
        console.log('Efecto siempre- en cada render -1')
        return () =>{ 
            console.log('document.removeEventlistener("click", función)')
        }
    })
    const handleContador = () => {        
        setContador(contador + 1)
    }
    const handleBool = () => {
        setBooleano(!booleano)
    }
    renderCount.current++
    console.log('ItemCount-4')
    return ( 
        <div>
            <h2>Contador: {contador}</h2>
            <p>cantidad en count : {renderCount.current}</p>
            <button onClick={handleContador}> + </button>
            <button > - </button>
        </div>  
)}
