import CarouselContainer from "../../components/CarouselContainer/CarouselContainer"
import ProductListContainer from "../../components/ProductListContainer/ProductListContainer"
import { useParams } from 'react-router-dom'
import './Home.css'
import CarouselCardsContainer from "../../components/CarouselCardsContainer/CarouselCardsContainer"
function Home() {
  const { idCategoria } = useParams();
  
  return (
    <>
    <CarouselContainer/>
    { idCategoria ? ( 
      <div className="section-filtrado">
       <h1> Productos Filtrados: </h1> 
      </div>
    ) : 
    (<div>
    <div className="section-home">
    <h1> Nor<span>Tecno</span></h1>
    <p> Los mejores <span>precios</span> en un solo lugar. </p>
    </div>
    <CarouselCardsContainer/>
    </div> )
     } 
    <ProductListContainer idCategoria={idCategoria}/>
    </>
  )
}

export default Home;