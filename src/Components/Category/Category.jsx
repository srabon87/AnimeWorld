import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/AnimeSliders/dandadan-2024.avif";
import slide2 from "../../assets/AnimeSliders/erased-2016.avif";
import slide3 from "../../assets/AnimeSliders/haikyuu.avif";
import slide4 from "../../assets/AnimeSliders/kaguya-sama-love-is-war.avif";
import slide5 from "../../assets/AnimeSliders/monster.avif";
import slide6 from "../../assets/AnimeSliders/naruto-shippuden-tv-series-poster.avif";
import slide7 from "../../assets/AnimeSliders/demon-slayer-kimetsu-no-yaiba.avif";
import slide8 from "../../assets/AnimeSliders/code-geass-lelouch-of-the-rebellion-2006.avif";
import slide9 from "../../assets/AnimeSliders/one-punch-man-tv-series-poster.avif";
import slide10 from "../../assets/AnimeSliders/81uQQjetXXL.jpg";
import { LucidePenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Category = () => {
  return (
    <section className="w-10/12 mx-auto pt-10">
      <h2 className="text-center font-bold text-5xl text-cyan-700">
        Explore Your Favourite Anime Category Wise:
      </h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-20 w-[1600px]"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide10} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="items-center text-center">
        <Link to="/animelist">
            <a className="btn w-[200px] h-[70px] rounded-4xl text-2xl btn-soft btn-success">For More <FaArrowRight /></a>
        </Link>
      </div>
    </section>
  );
};

export default Category;
