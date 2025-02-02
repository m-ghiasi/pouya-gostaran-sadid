import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import cost1 from "../../assets/cost1.jpg";
import cost2 from "../../assets/cost2.jpg";
import cost3 from "../../assets/cost3.jpg";
import cost4 from "../../assets/cost4.jpg";
import cost5 from "../../assets/cost5.jpg";
import cost6 from "../../assets/cost6.jpg";
import cost7 from "../../assets/cost7.jpg";
import cost8 from "../../assets/cost8.jpg";



export default function Customer() {
  return (
    <Swiper slidesPerView={4} spaceBetween={10}>
      <SwiperSlide>
        <img className="w-full" src={cost1} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={cost2} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={cost3} />
      </SwiperSlide>

      <SwiperSlide>
        <img className="w-full" src={cost4} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={cost5} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={cost6} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={cost7} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={cost8} />
      </SwiperSlide>
    </Swiper>
  );
}
