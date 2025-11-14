import './Carrito.css'
import {CartContext} from '../../context/CartContext'
import { useContext } from 'react'
import ItemCartContainer from '../../components/ItemCartContainer/ItemCartContainer';
import { Link } from 'react-router-dom';
export default function () {
   
  const {cart,totalItems,total,clearCart} = useContext(CartContext);
  
  return (
     <>
      
       <div className='cardCarrito-container'> 
          { cart.length === 0 ? 
           ( <div className='d-grid justify-content-center'>
              <h1> Tu carrito esta vacio </h1>
              <p className='text-center text-secondary'> Te invitamos a ver nuestros productos 🛒 </p>
              <Link type="button" className='btn btn-primary w-1' to='/' >Ver Productos</Link>
             </div>) : 
           ( <h1> Productos seleccionados </h1>)
          }
        {cart.map( (item)=>(
          <ItemCartContainer key={item.id} item={item} />
         ) 
         )}
       </div>
       <div className='detail-container sticky-bottom'>
          <div className='cardCarrito'>
            <div className='cardBody'>
               <h4> Detalles de la compra: </h4>
               <p> Cantidad de productos: {totalItems} </p>
               <h5>Total: ${total.toLocaleString("es-AR")},<small>00</small> </h5>
               <Link type="button" className='btn btn-primary me-1' to='/checkOut' > Iniciar Compra</Link>
               <button type="button" className='btn btn-secondary' onClick={clearCart}> Vaciar</button>
            </div>
          </div>
       </div>
       
     </>
  )
}
