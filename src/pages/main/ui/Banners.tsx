import { useEffect, useState } from "react";
import hand from "@/shared/assets/icons/hand.svg";
import hand_active from "@/shared/assets/icons/hand_active.svg";
import location from "@/shared/assets/icons/location.svg";
import location_active from "@/shared/assets/icons/location_active.svg";
import car from "@/shared/assets/icons/car.svg";
import car_active from "@/shared/assets/icons/car_active.svg";
import wrench from "@/shared/assets/icons/wrench.svg";
import wrench_active from "@/shared/assets/icons/wrench_active.svg";
import banner_1 from "@/shared/assets/images/banner_1.png";
import banner_2 from "@/shared/assets/images/banner_2.png";
import banner_3 from "@/shared/assets/images/banner_3.png";
import { useNavigate } from "react-router-dom";
import r_project_1 from "@/shared/assets/images/realized_project_1.png";
import r_project_2 from "@/shared/assets/images/realized_project_2.png";
import r_project_3 from "@/shared/assets/images/realized_project_3.png";
import { useFeedbacksStore } from "@/app/store/feedbacks/feedbacksStore";
import Feedback from "@/shared/ui/feedback/Feedback";

const Banners = () => {
  const navigate = useNavigate();
  const banners = [
    {
      image: location,
      image_active: location_active,
      text: "Удобное расположение в ТЦ Аю Гранд с шоурумом и оптовым складом",
    },
    {
      image: wrench,
      image_active: wrench_active,
      text: 'Решетчатые потолки "ГРИЛЬЯТО" — готовые комплекты для монтажа',
    },
    {
      image: car,
      image_active: car_active,
      text: "Прямые поставки от производителей из Китая и России",
    },
    {
      image: hand,
      image_active: hand_active,
      text: "Компания ARMSTRONG обеспечивает быструю доставку товара",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const { feedbacks, getFeedbacks } = useFeedbacksStore();

  useEffect(() => {
    getFeedbacks(setLoading);
  }, [getFeedbacks]);

  console.log(feedbacks);

  return (
    <div className="flex flex-col gap-y-11">
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 auto-rows-auto gap-6 py-10 text-white text-[18px] font-bold">
        {banners.map((item, index) => (
          <article
            key={index}
            className={`flex flex-col gap-y-3 p-4 rounded-[10px] justify-between items-center text-center cursor-pointer border-[3px] ${
              hoveredIndex === index ? "border-main" : "border-white"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={hoveredIndex === index ? item.image_active : item.image}
              alt="img"
            />
            <p className={`${hoveredIndex === index && "text-main"}`}>
              {item.text}
            </p>
          </article>
        ))}
      </section>
      <div className="flex h-[90vh] justify-between gap-4">
        <div className="w-1/2 flex flex-col gap-y-3">
          <div
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="h-1/2 relative rounded-[10px] cursor-pointer"
            onClick={() => navigate("/catalog")}
          >
            {/* Слой с изображениями — он блюрится */}
            <div
              className="flex p-3 justify-center gap-4 w-full h-full bg-[#9c9c9c] rounded-[10px] transition-all"
              style={{ filter: hoveredIndex === 5 ? "blur(4px)" : "none" }}
            >
              <img src={banner_1} alt="" />
              <img src={banner_2} alt="" />
            </div>

            {/* Надпись поверх, не блюрится */}
            {hoveredIndex === 5 && (
              <p className="absolute inset-0 text-main flex justify-center items-center text-4xl font-bold">
                Полочные и потолочные плиты
              </p>
            )}
          </div>
          <div
            onClick={() => navigate("/contact")}
            className="cursor-pointer h-1/2 flex p-3 justify-center items-center gap-4 rounded-[10px] bg-[#9c9c9c] hover:bg-main transition-all"
          >
            <p className="text-[30px] text-nowrap font-bold text-white">
              Сделать индивидуальный заказ
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => setHoveredIndex(7)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="cursor-pointer flex w-1/2 h-full justify-center items-start relative rounded-[10px]"
          onClick={() => navigate("/catalog")}
        >
          {/* Фоновый слой с блюром */}
          <div
            className={`w-full h-full bg-[#9c9c9c] flex justify-center items-center rounded-[10px] transition-all ${
              hoveredIndex === 7 ? "blur-sm" : ""
            }`}
          >
            <img src={banner_3} alt="image" className="w-[360px]" />
          </div>

          {/* Текст поверх */}
          {hoveredIndex === 7 && (
            <p className="absolute inset-0 flex justify-center items-center text-main text-4xl font-bold">
              Светильники и лампы
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-start">
        <h3 className="text-[30px] font-bold text-white">Релевантные товары</h3>
      </div>
      <div id="projects" className="flex flex-col gap-y-3 items-start">
        <h3 className="text-[30px] font-bold text-white">
          Реализованные проекты
        </h3>
        <section className="flex flex-col lg:flex-row gap-x-10">
          <img
            className="w-full lg:w-[33%] rounded-[10px]"
            src={r_project_1}
            alt=""
          />
          <img
            className="w-full lg:w-[33%] rounded-[10px]"
            src={r_project_2}
            alt=""
          />
          <img
            className="w-full lg:w-[33%] rounded-[10px]"
            src={r_project_3}
            alt=""
          />
        </section>
      </div>
      <div className="flex flex-col gap-y-3 items-start">
        <h3 className="text-[30px] font-bold text-white">
          Наши видео на YouTube
        </h3>
        <section className="flex flex-col lg:flex-row w-full gap-x-10">
          <iframe
            className="w-[33%]"
            height="240"
            src="https://www.youtube.com/embed/VpBmBDb0IHI?si=C2XcLJ2Q-hsgjxBQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            className="w-[33%]"
            height="240"
            src="https://www.youtube.com/embed/VpBmBDb0IHI?si=C2XcLJ2Q-hsgjxBQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            className="w-[33%]"
            height="240"
            src="https://www.youtube.com/embed/VpBmBDb0IHI?si=C2XcLJ2Q-hsgjxBQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
      </div>
      <div className="flex flex-col gap-y-3 items-start">
        <h3 className="text-[30px] font-bold text-white">Отзывы</h3>
        <section className="flex gap-x-10 py-4">
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            feedbacks.map((item) => (
              <Feedback
                created_at={item.created_at}
                key={item.id}
                name={item.name}
                review={item.review}
              />
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default Banners;
