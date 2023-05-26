import slide_image_1 from "../img/referanslar/ref1.jpg";
import slide_image_2 from "../img/referanslar/ref2.jpg";
import slide_image_3 from "../img/referanslar/ref3.jpg";
import slide_image_4 from "../img/referanslar/ref4.jpg";
import slide_image_5 from "../img/referanslar/ref5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Navigation, Scrollbar, A11y, Autoplay } from "swiper";

const Referanslar = () => {
  return (
    <div className="container text-center">
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={true}
      >
        <SwiperSlide>
          <img
            src={slide_image_1}
            className=" rounded-full "
            width={300}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_2}
            className=" rounded-full "
            width={300}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} width={300} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} width={300} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_5}
            className=" rounded-full "
            width={300}
            alt="slide_image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Referanslar;
