
import { useParams } from "react-router-dom"
import {useGetOrder} from '../../hooks/useGetOrder'
import ItemCartContainer from "../../components/ItemCartContainer/ItemCartContainer";
export default function DatosDeCompra() {
  
 const {idCompra} = useParams();
 const {order,loading} = useGetOrder(idCompra);
   
 if (loading || !order) return <p> Loading... </p>
  return (
    <> <div className="datContainer">
     <h1>Compra realizada con exito! ✅</h1>
     <h2> N° de compra: { idCompra } </h2>
     <h3> Detalles 🛒: </h3>
      {order.compra.map((item) => (
        <ItemCartContainer item={item}/>
        )
      )} 
      <div>
        <h3> Datos del comprador: </h3>
          <p> {order.comprador.nombre}</p>
          <p> {order.comprador.email}</p>
          <p> {order.comprador.postal}</p>
      </div>
      <div>
        <h4> Total: {order.total} </h4>
        <h4> Fecha: {order.fecha?.toDate().toLocaleString()}</h4>
      </div>
    </div> </>
  )
}
