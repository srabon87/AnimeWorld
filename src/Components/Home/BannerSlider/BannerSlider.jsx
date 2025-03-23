import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
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
    <div className="w-full mx-auto mb-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[650px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="relative">
            <img
              src={banner.img}
              alt={banner.title}
              className="w-full h-[1300px] object-cover"
            //   className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-sky-600 bg-opacity-50 flex flex-col items-center justify-end text-center px-4">
              <h2 className="text-3xl mb-8 md:text-5xl font-bold">{banner.title}</h2>
              <Link to="animelist" className="btn mb-6 btn-soft btn-info">Watch More</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
