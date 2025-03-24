import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// import React from "react";
const BannerSlider = () => {
  const [banners, setBanners] = useState([]);

  // Fetch banner data from public/banners.json
  useEffect(() => {
    fetch("/banners.json")
      .then((response) => response.json())
      .then((data) => setBanners(data))
      .catch((error) => console.error("Error loading banner data:", error));
  }, []);

  return (
    <div className="w-10/12 mx-auto mt-10 mb-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full sm:h-[200px]  lg:h-[650px] "
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="relative">
            <img
              src={banner.img}
              alt={banner.title}
              className="md:w-full sm:h-[800px] rounded-b-2xl rounded-2xl md:h-[1000px] "
            />
            <div className="absolute inset-0 text-indigo-400 bg-opacity-50 flex flex-col items-center justify-end text-center px-4">
              <h2 className="text-2xl md:mb-8 sm:mb-7 md:text-4xl font-bold">{banner.title}</h2>
              <Link to="animelist" className="btn sm:p-3 md:p-5 rounded-3xl mb-6 btn-soft btn-warning">Watch More <FaArrowRight /></Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
