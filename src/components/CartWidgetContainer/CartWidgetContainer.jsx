import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Carrito from '../../pages/Carrito/Carrrito';

const CartWidgetContainer = () => {
   const {totalItems,openCart} = useContext(CartContext);
    
   return(
     <>
      <div style={{margin:'15px',fontSize:'20px'}}>
       <button className="btn btn-outline-warning bi bi-cart-fill text-dark" onClick={openCart} ></button>
       <span className="badge bg-danger ms-1">{totalItems}</span>
      </div>
      <Carrito></Carrito>
     </>
   )

}

export default CartWidgetContainer