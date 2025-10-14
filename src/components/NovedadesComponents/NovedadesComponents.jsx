import { Carousel } from "react-bootstrap"
import './NovedadesComponents.css'
const NovedadesComponents = () => {
    return(
    <>
    <h1 className="title-Novedades">Proximamente en nuestro local</h1>
    <Carousel className="carousel">
      <Carousel.Item > 
        <img className="d-block w-100" style={{height:'30em'}} src="https://http2.mlstatic.com/D_Q_NP_933105-MLA91954003147_092025-B.webp" alt="Slide 1" />
          <Carousel.Caption>
           <h1>PLAYSTATION 5</h1>
           <p> Nueva PlayStation, lleva tus juegos al siguiente nivel.</p>
          </Carousel.Caption>  
       </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{height:'30em'}} src="https://http2.mlstatic.com/D_NQ_NP_901150-MLA93385041961_092025-O.webp" alt="Slide 2" />
          <Carousel.Caption>
           <h1>IPHONE 17 PRO MAX</h1>
           <p>Nueva experiencia de usuario. Con un diseño impresionante.</p>
          </Carousel.Caption> 
      </Carousel.Item>
    </Carousel>
    </>
    )
}
export default NovedadesComponents