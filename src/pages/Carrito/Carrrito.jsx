import './Carrito.css'
import {CartContext} from '../../context/CartContext'
import { useContext } from 'react'
import ItemCartContainer from '../../components/ItemCartContainer/ItemCartContainer';
import { Link } from 'react-router-dom';
import DetalleCompraContainer from '../../components/DetalleCompraContainer/DetalleCompraContainer';
import { Offcanvas } from "react-bootstrap";

export default function Carrito () {
   
  const {cart,totalItems,total,clearCart,showCart,closeCart,removeFromCart} = useContext(CartContext);
  
  

  return (
    <>
       <Offcanvas show={showCart} onHide={closeCart} placement="end" className="bg-light text-dark">
         <Offcanvas.Header closeButton className='titleCart'>
                  <Offcanvas.Title >Carrito de Compras</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
         <div className='carrito-container'> 
          { cart.length === 0 ? 
           ( <div className='empty-cart'>
              <h1> Tu carrito esta vacio </h1>
              <p className='text-secondary'> Te invitamos a ver nuestros productos 🛒 </p>
              <Link type="button" className='btn btn-primary w-1' to='/' onClick={closeCart}  >Ver Productos</Link>
             </div>) : 
           ( 
             <div className='detail-container'>
                {cart.map( (item)=>(    
                 <div key={item.id} className="cardCarrito">      
                  <div className='cartButton'>
                      <i onClick={() =>removeFromCart(item.id)} className="bi bi-x-lg" type='button'></i>       
                  </div>          
                 <ItemCartContainer item={item}/>                                                              
                 </div> ) )}
              <div className='cardDetail'>
                   <h4> Detalles de la compra: </h4>
                  <DetalleCompraContainer totalItems={totalItems} total={total}/>
                  <Link type="button" className='btn btn-primary me-2' onClick={closeCart} to='/checkOut' > Iniciar Compra</Link>
                  <button type="button" className='btn btn-secondary' onClick={clearCart}> Vaciar Carrito</button>
              </div>
                
            </div>)}
         </div> 
         </Offcanvas.Body> 
       </Offcanvas>

     </>
  )
}
