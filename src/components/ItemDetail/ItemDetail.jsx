import { useParams } from 'react-router-dom'
import {useGetProducto} from '../../hooks/useGetProducto'
import './ItemDetail.css'
const ItemDetail = () =>{
    
    const {idProducto} = useParams()
    const {producto,loading} = useGetProducto(idProducto)

     if (loading) return <p>Cargando ...</p>
     if (!producto) return <p>Producto no encontrado.</p> 
    
        return (
               <>
                <div className='producto-content'>
                 
                   <img src={producto.imagen} alt={producto.nombre} />
                 
                 <div className='producto-content-info'>
                  <h1> {producto.nombre}</h1>
                  <p>{producto.descripcion}</p>
                  <h2> $ {producto.precio}</h2>
                   <div className='botones'>
                     <button className='btn btn-dark'>Agregar a carrito</button>
                     <button className='btn btn-primary'>Comprar</button>
                   </div>
                 </div>
                 </div>
               </>
             )

          
}

export default ItemDetail