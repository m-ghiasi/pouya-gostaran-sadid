import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import oil2 from "../../assets/oil2.jpg";

import oil4 from "../../assets/oil4.jpg";

import oil6 from "../../assets/oil6.jpg";
import oil7 from "../../assets/oil7.jpg";

export default function Customer() {
  return (
    <Swiper slidesPerView={4} spaceBetween={10}>
      <SwiperSlide>
        <img className="w-full" src={oil2} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={oil6} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={oil7} />
      </SwiperSlide>

      <SwiperSlide>
        <img className="w-full" src={oil4} />
      </SwiperSlide>
    </Swiper>
  );
}
