import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext'
import { useContext } from 'react'
export default function ItemCartContainer({item}) {
    
      const {removeFromCart} = useContext(CartContext);

    return (
    <>
     <div key={item.id} className="cardCarrito mb-3">
     <div className="row">
        <div className="sectionImg col-md-2 col-3">
          <img src={item.img} className="img-fluid rounded-start" alt={item.nombre}/>
        </div>
        <div className="col-md-10 col-9">
          <div className="cardBody">
            <h4> {item.nombre} </h4>
            <h5 className="card-title">${item.precio.toLocaleString("es-AR")},<small>00</small></h5>
            <p className="card-text"> Cantidad: {item.quantity}</p>  
            <p className='card-text'> Subtotal: ${(item.quantity * item.precio).toLocaleString("es-AR")},<small>00</small></p>   
            <Link type='button' to={`/producto/${item.id}`} className="btn btn-outline-dark me-1">Ver</Link>     
            <button className='btn btn-outline-danger' onClick={() =>removeFromCart(item.id)} type="button">Eliminar</button>
          </div>
        </div>
       </div>
      </div>
    </>
  )
}
