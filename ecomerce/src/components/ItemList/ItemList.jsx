import Item from "../Item/Item"

const ItemList = ({productos}) => {
    const objStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // gap: '30px'
    }
    return (
        <div style={objStyle}>
            {productos.map( producto =>  <Item  key={producto.id} producto={producto} /> )      }
        </div>               
    )
}

export default ItemList

