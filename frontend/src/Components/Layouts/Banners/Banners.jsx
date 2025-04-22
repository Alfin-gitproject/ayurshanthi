import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banners.css";
import banners from "../../utilities/banners";
import { Link } from "react-router-dom";
function Banners() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="relative w-full overflow-hidden"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link to={banner.link}>
              <img
                className="object-cover h-full md:h-[80vh]"
                style={{ width: "100%" }}
                src={banner.src}
                alt={`banner-${index}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Banners;
