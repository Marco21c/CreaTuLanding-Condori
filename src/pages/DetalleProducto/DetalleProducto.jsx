import './DetalleProducto.css'
import { useParams } from 'react-router-dom'
import ProductDetailContainer from '../../components/ProductDetailContainer/ProductDetailContainer'
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer'
function DetalleProducto() {

   const {idProducto} = useParams() ;

  return (
    <>
       <CarouselContainer/>
       <ProductDetailContainer idProducto={idProducto}/>
    </>
  )
}

export default DetalleProducto;