import {useGetProductoxBadge} from "../../hooks/useGetProducto"
import CardProductContainer from "../CardProductContainer/CardProductContainer"
import { Swiper, SwiperSlide } from "swiper/react";
import './CarouselCardsContainer.css'
import "swiper/css";
import { Autoplay } from "swiper/modules";
export default function CarouselCardsContainer() {
  const ofertas = useGetProductoxBadge("oferta") || [];
     
  return (
    <div className="back-carousel">
    <Swiper
      modules={[Autoplay]}
      autoplay={{delay:2000, disableOnInteraction: false}}
      slidesPerView={4}
      slidesPerGroup={1}
      spaceBetween={5}
      loop={true}
      breakpoints={{
      0: { slidesPerView: 2 },
      800: { slidesPerView: 3},
      1200: { slidesPerView: 4}
      }}
    >
      {ofertas.map((prod) => (
        <SwiperSlide key={prod.id} className="centrar-cards">
          <CardProductContainer producto={prod} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}
