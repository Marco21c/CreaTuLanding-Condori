import {useDetailProducto} from '../../hooks/useGetProducto';
import './ProductDetailContainer.css';
import LoadingContainer from '../loadingContainer/LoadingContainer';
import CardCountContainer from '../CardCountContainer/CardCountContainer';

const ProductDetailContainer = ({idProducto}) =>{
    
    const {producto,loading} = useDetailProducto(idProducto)

     if (loading || !producto) return <LoadingContainer/> 
        return (
               <>
                <div className='producto-content'>
                  <div className='containerImg'>
                   <img src={producto.img} alt={producto.nombre} />
                  </div> 
                 <div className='producto-content-info'>
                  <h1> {producto.nombre}</h1>
                  <p>{producto.descripcion}</p>
                  <h2>$ {producto.precio.toLocaleString("es-AR")},00</h2>
                   {producto.stock !== 0 ? 
                   (<p className='text-secondary'> {producto.stock} unidades disponibles</p>) : 
                   (<p className='text-secondary'> Sin stock</p>)
                   }
                   <CardCountContainer producto={producto}/>
                                                 
                 </div>
                 </div>
               </>
             )

          
}

export default ProductDetailContainer