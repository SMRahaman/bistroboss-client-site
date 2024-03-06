import React, { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import Testimonial from "../../../Components/Testimonial/Testimonial";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      autoplay
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {reviews.map((review) => (
        <SwiperSlide className="mb-20">
          <Rating
            readOnly
            style={{ maxWidth: "250px", margin: "auto" }}
            value={review.rating}
          ></Rating>
          <p className="text-center text-[16px] text-[#444] mt-5 mb-5">
            {review.details}
          </p>
          <p className=" uppercase text-center text-[32px] text-[#CD9003]">
            {review.name}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
