
import './Novedades.css'
import CarouselContainer from "../../components/CarouselContainer/CarouselContainer"
import CarouselCardsContainer from '../../components/CarouselCardsContainer/CarouselCardsContainer'
const Novedades = () => {
    return(
    <>
    <CarouselContainer/>
    <h2 className='titleOferta'> Productos en Oferta </h2>
    <p className='text-center text-secondary'> Los mejores precios aqui</p>
    <CarouselCardsContainer/>
    </>
    )
}
export default Novedades