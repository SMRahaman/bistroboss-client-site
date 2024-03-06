import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
const CatSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="relative" src={slider1} />
          <div className="bg-black bg-opacity-50 w-full py-5 absolute bottom-0">
            <p className="text-white font-[cinzel] text-2xl uppercase text-center">
              salad
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slider3} />
          <div className="bg-black bg-opacity-50 w-full py-5 absolute bottom-0">
            <p className="text-white font-[cinzel] text-2xl uppercase text-center">
              Soups
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slider2} />
          <div className="bg-black bg-opacity-50 w-full py-5 absolute bottom-0">
            <p className="text-white font-[cinzel] text-2xl uppercase text-center">
              Pizzas
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slider4} />
          <div className="bg-black bg-opacity-50 w-full py-5 absolute bottom-0">
            <p className="text-white font-[cinzel] text-2xl uppercase text-center">
              Desserts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slider5} />
          <div className="bg-black bg-opacity-50 w-full py-5 absolute bottom-0">
            <p className="text-white font-[cinzel] text-2xl uppercase text-center">
              Drinks
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CatSlider;
