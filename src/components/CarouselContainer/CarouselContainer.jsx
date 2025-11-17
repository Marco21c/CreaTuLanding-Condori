import { Carousel } from "react-bootstrap"
import './CarouselContainer.css'

function CarouselContainer() {
  return (
    <> <div className="containerCarousel">
     <Carousel className="carousell">
      <Carousel.Item > 
        <img className="d-block w-100" src="https://tecnocomproar.vtexassets.com/assets/vtex.file-manager-graphql/images/f1922cdc-19e6-4dd4-9c67-f6b0cbceed5e___23ce02c75d12c8ab7af78c25a0b1e763.jpg" alt="Slide 1" />
          
       </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://http2.mlstatic.com/D_NQ_867629-MLA95955608362_102025-OO.webp" alt="Slide 2" />
           
      </Carousel.Item>
    </Carousel>
     </div>  </>
  )
}

export default CarouselContainer;