import { useParams } from 'react-router-dom'
import {useGetProducto} from '../../hooks/useGetProducto'

const ItemDetail = () =>{
    
    const {idProducto} = useParams()
    const {producto,loading} = useGetProducto(idProducto)

     if (loading) return <p>Cargando ...</p>
     if (!producto) return <p>Producto no encontrado.</p> 
    
        return (
               <>
                 <div
                   className="modal fade"
                   id={`exampleModal-${producto.id}`}
                   tabIndex="-1"
                   aria-labelledby={`exampleModalLabel-${producto.id}`}
                   aria-hidden="true"
                 >
                   <div className="modal-dialog">
                     <div className="modal-content">
                       <div className="modal-header">
                         <h5 className="modal-title fs-5" id={`exampleModalLabel-${producto.id}`}>
                           {producto.nombre}
                         </h5>
                         <button
                           type="button"
                           className="btn-close"
                           data-bs-dismiss="modal"
                           aria-label="Close"
                         ></button>
                       </div>
             
                       <div className="modal-body">
                         <img
                           src={producto.imagen}
                           alt={producto.nombre}
                           title={producto.nombre}
                           style={{ width: '100%', borderRadius: '8px' }}
                         />
                         <p>{producto.descripcion}</p>
                         <h2>${producto.precio}</h2>
                       </div>
             
                       <div className="modal-footer">
                         <button
                           type="button"
                           className="btn btn-secondary"
                           data-bs-dismiss="modal"
                         >
                           Cerrar
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               </>
             );

          
}

export default ItemDetail