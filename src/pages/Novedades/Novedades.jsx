
import './Novedades.css'
import CarouselContainer from "../../components/CarouselContainer/CarouselContainer"
import CarouselCardsContainer from '../../components/CarouselCardsContainer/CarouselCardsContainer'
const Novedades = () => {
    return(
    <>
    <CarouselContainer/>
    <h2 className='titleOferta'> Productos en Oferta </h2>
    <p className='text-center text-secondary'> Los mejores precios aqui</p>
    <CarouselCardsContainer badge={"oferta"} autoplay={2300}/>
    <h2 className='titleOferta'> Productos Nuevos </h2>
    <p className='text-center text-secondary'> Sé uno de los primeros en obtenerlos!</p>
    <CarouselCardsContainer badge={"nuevo"} autoplay={2000}/>
    </>
    )
}
export default Novedades