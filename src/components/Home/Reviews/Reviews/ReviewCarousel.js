import React, { useEffect, useState } from "react";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination, Autoplay]);

const ReviewCarousel = ({ reviews }) => {
  const [carouselItem, setCarouselItem] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width < 767) {
        setCarouselItem(1);
      } else if (window.screen.width < 1023) {
        setCarouselItem(2);
      } else {
        setCarouselItem(3);
      }
    };
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    console.log(carouselItem);
  }, [carouselItem]);
  console.log(reviews);
  return (
    <Swiper
      autoplay
      spaceBetween={20}
      slidesPerView={carouselItem}
      pagination={{ clickable: true }}
    >
      {reviews?.map((review, index) => (
        <SwiperSlide key={index} className="mt-3">
          {review}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCarousel;
