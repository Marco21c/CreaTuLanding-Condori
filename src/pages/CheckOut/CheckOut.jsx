import FormCheckOut from "../../components/FormCheckOutContainer/FormCheckOut"
import './CheckOut.css'
import { useContext } from "react"
import {CartContext} from '../../context/CartContext'
import DetalleCompraContainer from "../../components/DetalleCompraContainer/DetalleCompraContainer"
export default function CheckOut() {
   
     const {totalItems,total,cart} = useContext(CartContext);
      
  return (
   <>
     <div className="container-check">
      <FormCheckOut/> 
     <div className="detailCompra">
        <h1 className="title-check"> Detalles de la Compra 🛒</h1> 
        <div>
        {cart.map((item)=> <img key={item.id} src={item.img} alt={item.nombre}/>)}
        </div>
        <DetalleCompraContainer totalItems={totalItems} total={total}/>
     </div>
     
     </div>
   </>
  )
}
