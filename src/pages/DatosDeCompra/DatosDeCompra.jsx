import './DatosDeCompra.css'
import { useParams } from "react-router-dom"
import {useGetOrder} from '../../hooks/useGetOrder'
import ItemCartContainer from "../../components/ItemCartContainer/ItemCartContainer";
export default function DatosDeCompra() {
  
 const {idCompra} = useParams();
 const {order,loading} = useGetOrder(idCompra);
   
 if (loading || !order) return <p> Loading... </p>
  return (
    <> <div className="datContainer">
      <div className='datComprador'>
      <h5>Compra realizada con exito! ✅</h5>
      <h5> N° de compra: { idCompra } </h5>
      <div className='datos'>
        <h6> Tus datos: </h6>
          <p> Nombre: {order.comprador.nombre}</p>
          <p> Email: {order.comprador.email}</p>
          <p> Codigo Postal: {order.comprador.postal}</p>
          <p> Direccion: {order.comprador.direccion}</p>
          <p>Ciudad: {order.comprador.ciudad}</p>
      </div>
      <div>
        <p> Fecha: {order.fecha?.toDate().toLocaleString()}</p>
        <h5> Total: ${order.total.toLocaleString("es-AR")},00</h5>
      </div> 
      </div> 
      <div className='datProducts'>
        <h3> Detalles de los productos: </h3>
            
             {order.compra.map((item) => (
               <div className='cardProduct'>
                <ItemCartContainer item={item}/>
               </div> 
              ))} 
          
      </div>

    </div> </>
  )
}
