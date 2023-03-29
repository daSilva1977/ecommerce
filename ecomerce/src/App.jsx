import { useRef, useState } from 'react'

import Contenedor from './components/Contenedor/Contenedor'
import NavBar from './components/NavBar/NavBar'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'



function App() { 
    const divRef = useRef(null)
    // console.log(divRef)

    const handleClick = () => {
        divRef.current.innerHTML = 'nuevo contenido'
    }
    // console.log('Componente App')
    return(
        <div className='App'>
            <NavBar />
            <ItemListContainer greeting='estoy saludando' />
            <ItemCount />
        </div>
)}

export default App


// render 
// 1 ver -> montaje
// sgtes re render 
// última -> dismounting

// que produce un re render : 
    // cambios en un props
    // cambios en un estados
    // - evento
