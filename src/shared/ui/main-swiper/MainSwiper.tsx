import slide_1 from "@/shared/assets/images/slides/slide_1.png";
import slide_2 from "@/shared/assets/images/slides/slide_2.png";
import slide_3 from "@/shared/assets/images/slides/slide_3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainSwiper = ({ mobile }: { mobile: boolean }) => {
  return (
    <div className={`relative ${mobile ? "w-[350px]" : "w-[580px]"}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        className={` ${
          mobile ? "w-[350px] h-[200px]" : "h-[360px]"
        } rounded-[12px] overflow-hidden`}
      >
        <SwiperSlide>
          <img
            src={slide_1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Стрелки вне картинки */}
      <button className={`custom-prev absolute ${mobile ? "-left-0.5" : "-left-8"} top-1/2 -translate-y-1/2 text-white text-3xl z-10 hover:text-main`}>
        ⟨
      </button>
      <button className={`custom-next absolute ${mobile ? "-right-1" : "-right-8"} top-1/2 -translate-y-1/2 text-white text-3xl z-10 hover:text-main`}>
        ⟩
      </button>

      {/* Точки вне картинки */}
      <div className="custom-pagination absolute left-1/2 -translate-x-1/2 flex gap-2 justify-center w-full z-10">
        <div className="custom-pagination -bottom-8 flex gap-2" />
      </div>
    </div>
  );
};

export default MainSwiper;
