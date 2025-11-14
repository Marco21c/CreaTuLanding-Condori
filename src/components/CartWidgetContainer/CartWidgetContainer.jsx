import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const cartWidgetContainer = () => {
   const {totalItems} = useContext(CartContext);
   
   
   return(
     <>
      <div style={{margin:'15px',fontSize:'20px'}}>
       <Link  to={`/carrito`} className="bi bi-cart-fill text-dark" ></Link>
       <span className="badge bg-danger ms-1">{totalItems}</span>
      </div>
     </>
   )

}

export default cartWidgetContainer