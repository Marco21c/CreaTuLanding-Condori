import { useParams } from 'react-router-dom'
import {useGetCategorias} from '../../hooks/useGetCategorias'
import CardProducto from '../CardProducto/CardProducto'
import './ItemListContainer.css'
const ItemListContainer = () => {
  
  const {categoriaId} = useParams()
  const {productosFiltrados,loading} = useGetCategorias(categoriaId)
  
  if (loading) return <p>Cargando ...</p>
  return(
    <> 
       <div className='card-list'>
          { productosFiltrados.map((producto,index) => 
              (<CardProducto key={index} 
              producto = {producto}/>)
          
          )}    
       </div>
    </>
  )

} 

export default ItemListContainer