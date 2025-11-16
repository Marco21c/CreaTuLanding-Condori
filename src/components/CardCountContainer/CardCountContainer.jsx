import {useState } from 'react';
import './CardCountContainer.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
function CardCountContainer({producto}) {
  
  const [contador,setContador] = useState(1);
  const { addCart, cart ,openCart } = useContext(CartContext);
  const [habilitarMsg,setHabilitarMsg] = useState(false);
  
  const removeContador = () =>{
       if(contador > 1){
       setContador(contador -1)}
  }
   const addContador = () =>{
      
     if(contador < producto.stock){ 
       setContador(contador + 1)
      }
      
  }
    
  const handleAddCarrito = () => {
     console.log("Producto que se agrega:", producto);
    addCart(producto, contador);     
    setHabilitarMsg(true);         
    openCart() 
    setTimeout(() => setHabilitarMsg(false), 4000); 
  };

  const productoEnCarrito = cart.find(item => item.id === producto.id);
  const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.quantity : 0;
  const stockDisponible = producto.stock - cantidadEnCarrito;
  const handDisabledCarrito = () => { return contador > stockDisponible}

  return (
  <>  
     {habilitarMsg && (
               <div className="alert-overlay">
                  <div className="alert alert-success">
                    ¡Se agregó exitosamente al carrito! 
                  </div>
                </div>
      ) }
    <div className='botones'>
        <div className='contadorBtn'>
          <button onClick={removeContador} type="button"><i className="bi bi-dash-circle-fill"></i></button>
               <p> {contador} </p>
          <button  onClick={addContador} type="button"><i className="bi bi-plus-circle-fill"></i></button>    
        </div>
        
        <button className='btn btn-warning' onClick={() => handleAddCarrito()} disabled={handDisabledCarrito()} >Agregar al carrito</button>   
        <button type="button" className='btn btn-primary m-2'>Comprar</button>
    </div>
  </>
  )
}

export default CardCountContainer;

