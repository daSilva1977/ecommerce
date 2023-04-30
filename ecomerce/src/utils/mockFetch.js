let productos = [
    { id: '1' ,categoria: 'carteras', name: "Bolso Cuero Color Marron ", stock:50, price: 15700, foto:'https://2.bp.blogspot.com/-xocuAbDndSE/TqdCAZcYSII/AAAAAAAASjg/hWGcN_4w0N0/s1600/EIVI-carteras-diseno-argentina.jpg', colores:[{nombre:'rojo', clase:''}] },
    { id: '2' ,categoria: 'carteras', name: "Cartera Cuero Color Mostaza ", stock:50, price: 20500, foto:'https://th.bing.com/th/id/OIP.S-4YFLbLyw1M2n2Yv8A77AHaHa?pid=ImgDet&w=1000&h=1000&rs=1' },
    { id: '3' ,categoria: 'carteras', name: "Cartera Cuero rigida Color Naranja ", stock:50, price: 14000, foto:'https://th.bing.com/th/id/R.4b9f0a5ceec88fbd24e58687bff94311?rik=6r4MGzIqlBlp%2bA&pid=ImgRaw&r=0' },
    { id: '4' ,categoria: 'calzado',  name: "Sandalia Estileto Gamuza Fuccia ", stock:50, price: 15500, foto:'https://th.bing.com/th/id/R.1da28e2ba050006db158b701e6f79ac8?rik=%2b6EvXGKYKVzWsg&pid=ImgRaw&r=0' },
    { id: '5' ,categoria: 'calzado',  name: "Estileto Cuero Gama Rosa ", stock:50, price: 10500, foto:'https://i.pinimg.com/originals/42/70/66/427066bea7af6fd4bc023f39f4f6da07.jpg' },
    { id: '6' ,categoria: 'calzado',  name: "Estileto Cuero Negro ", stock:50, price: 19000, foto:'https://th.bing.com/th/id/OIP.CklvbpUFUBK3GVKNLfwzhQHaHa?pid=ImgDet&w=640&h=640&rs=1' },
    { id: '7' ,categoria: 'calzado',  name: "Estileto Cuero Celeste ", stock:50, price: 22000,  foto:'https://asset2.zankyou.com/images/mag-card-t/09d/03d8/350/350/-/fr/wp-content/uploads/2015/08/So-Kate-Vernis-Christian-Louboutin..jpg' }  
] 

export let mockFetch = (id) =>{
    return new Promise( (resolve, reject)=>{ // 12/6
        // acciones        
        setTimeout(()=>{
            resolve(id ? productos.find(prod => id === prod.id)  : productos)    
        }, 1000)   
    } )
}

