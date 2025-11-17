import {useGetProductoxBadge} from "../../hooks/useGetProducto"
import CardProductContainer from "../CardProductContainer/CardProductContainer"
import { Swiper, SwiperSlide } from "swiper/react";
import './CarouselCardsContainer.css'
import "swiper/css";
import { Autoplay } from "swiper/modules";
export default function CarouselCardsContainer({badge,autoplay}) {
  const ofertas = useGetProductoxBadge(badge) || [];
     
  return (
    <div className="back-carousel">
    <Swiper
      modules={[Autoplay]}
      autoplay={{delay:autoplay, disableOnInteraction: false}}
      slidesPerView={4}
      slidesPerGroup={1}
      spaceBetween={4}
      loop={ofertas.length > 4}
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
