import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Carrito from '../../pages/Carrito/Carrrito';

const CartWidgetContainer = () => {
   const {totalItems,openCart} = useContext(CartContext);
    
   return(
     <>
      <div style={{margin:'10px',fontSize:'20px'}}>
       <a className="btn bi bi-cart4 text-dark" style={{fontSize:'24px'}} onClick={openCart} ></a>
       <span className="badge bg-danger ms-1">{totalItems}</span>
      </div>
      <Carrito></Carrito>
     </>
   )

}

export default CartWidgetContainer