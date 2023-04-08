import { useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contenedor from './components/Contenedor/Contenedor'
import NavBar from './components/NavBar/NavBar'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { FormContainer } from './components/FormContainer/FormContainer'

function App() { 
    const divRef = useRef(null)
    // console.log(divRef)

    const handleClick = () => {
        divRef.current.innerHTML = 'nuevo contenido'
    }
    // console.log('Componente App')
    return(
        <BrowserRouter>
        <div className='App'>
            <NavBar />
            <FormContainer/>
            <Routes>
            <Route path='/' element={<ItemListContainer greeting='estoy saludando' />} />
            <Route path='/categoria/:cid' element={<ItemListContainer sgreeting='estoy saludando'/>}/>
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />     
            <Route path='*' element={<Navigate to='/'/>} />     
        </Routes>
        </div>      
        </BrowserRouter>
)}

export default App
