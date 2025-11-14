
import { useGetProducto } from '../../hooks/useGetProducto';
import CardProductContainer from '../CardProductContainer/CardProductContainer';
import LoadingContainer from "../loadingContainer/LoadingContainer"
import './ProductListContainer.css';

const ProductListContainer = ({idCategoria}) => {
 
  const {productos,loading} = useGetProducto(idCategoria);
  
  if (loading) return <LoadingContainer/>;
  
  return(
    <> 
       <div className='card-list'>
          { productos.map((producto) => 
              (<CardProductContainer key={producto.id} 
              producto = {producto}/>)
          
          )}    
       </div>
    </>
  )

} 

export default ProductListContainer