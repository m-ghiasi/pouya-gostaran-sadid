import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import oil2 from "../../assets/oil2.jpg";
import oil3 from "../../assets/oil3.jpg";
import oil4 from "../../assets/oil4.jpg";
import oil5 from "../../assets/oil5.webp";
import oil6 from "../../assets/oil6.jpg";
import oil7 from "../../assets/oil7.jpg";
import oil9 from "../../assets/oil9.jpg";

export default function MySlider() {
  return (
    <Swiper slidesPerView={1} spaceBetween={20}>
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
        <img className="w-full" src={oil9} />
      </SwiperSlide>

      <SwiperSlide>
        <img className="w-full" src={oil3} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={oil4} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={oil5} />
      </SwiperSlide>
    </Swiper>
  );
}
