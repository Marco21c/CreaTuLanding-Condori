import { useParams } from "react-router-dom"
import { useGetProductosBuscados } from "../../hooks/useGetProducto";
import CardProductContainer from '../../components/CardProductContainer/CardProductContainer'
import LoadingContainer from "../../components/loadingContainer/LoadingContainer"
import './Buscar.css'
export default function Buscar() {

  const {buscado} = useParams();
  const {encontrados,loading} = useGetProductosBuscados(buscado);
  if (loading) return <LoadingContainer/>;

  return (
    <div className="buscar-container">
          <h1> Resultado para: {buscado} </h1> 
          { encontrados.length == 0 ? ( <h4> No se encontro resultados. </h4> ): (
          <div className="container-encontrados">
           {encontrados.map((prod)=> (
                 <CardProductContainer producto={prod}/>  
           ))}
           </div> ) }
    </div>
  )
}
