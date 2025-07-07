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
import { Link, useNavigate } from "react-router-dom";
import r_project_1 from "@/shared/assets/images/realized_project_1.png";
import r_project_2 from "@/shared/assets/images/realized_project_2.png";
import r_project_3 from "@/shared/assets/images/realized_project_3.png";
import {
  useCatalogsStore,
  useFeedbacksStore,
} from "@/app/store/feedbacks/feedbacksStore";
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

  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [loading, setLoading] = useState(false);
  const { feedbacks, getFeedbacks } = useFeedbacksStore();
  const { catalogs, getCatalogs } = useCatalogsStore();

  useEffect(() => {
    getFeedbacks(setLoading);
    getCatalogs(setLoading);
  }, [getFeedbacks, getCatalogs]);

  console.log(feedbacks);

  return (
    <div className="flex flex-col gap-y-11 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 text-white text-[18px] font-bold">
        {banners.map((item, index) => (
          <article
            key={index}
            className={`flex flex-col gap-y-3 p-4 rounded-[10px] justify-between items-center text-center cursor-pointer border-[3px] min-w-0 ${
              hoveredIndex === index ? "border-main" : "border-white"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={hoveredIndex === index ? item.image_active : item.image}
              alt="img"
              className="w-12 h-12 object-contain"
            />
            <p
              className={`text-[18px] ${hoveredIndex === index && "text-main"}`}
            >
              {item.text}
            </p>
          </article>
        ))}
      </section>
      <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[70vh] overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-3">
          <div
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="h-64 lg:h-1/2 relative rounded-[10px] cursor-pointer overflow-hidden"
            onClick={() => navigate("/catalog")}
          >
            <div
              className="flex p-3 justify-center gap-4 w-full h-full bg-[#9c9c9c] rounded-[10px] transition-all"
              style={{ filter: hoveredIndex === 5 ? "blur(4px)" : "none" }}
            >
              <img src={banner_1} alt="" className="max-w-[50%] object-cover" />
              <img src={banner_2} alt="" className="max-w-[50%] object-cover" />
            </div>
            {hoveredIndex === 5 && (
              <p className="absolute inset-0 text-main flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl font-bold">
                Полочные и потолочные плиты
              </p>
            )}
          </div>
          <div
            onClick={() => navigate("/contact")}
            className="cursor-pointer h-64 lg:h-1/2 flex p-3 justify-center items-center gap-4 rounded-[10px] bg-[#9c9c9c] hover:bg-main transition-all"
          >
            <p className="text-xl sm:text-2xl lg:text-[30px] text-nowrap font-bold text-white text-center">
              Сделать индивидуальный заказ
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => setHoveredIndex(7)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="cursor-pointer w-full lg:w-1/2 h-64 lg:h-full relative rounded-[10px] overflow-hidden"
          onClick={() => navigate("/catalog")}
        >
          <div
            className={`w-full h-full bg-[#9c9c9c] flex justify-center items-center rounded-[10px] transition-all ${
              hoveredIndex === 7 ? "blur-sm" : ""
            }`}
          >
            <img
              src={banner_3}
              alt="image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {hoveredIndex === 7 && (
            <p className="absolute inset-0 flex justify-center items-center text-main text-2xl sm:text-3xl lg:text-4xl font-bold">
              Светильники и лампы
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-2 justify-start">
        <h3 className="text-[30px] font-bold text-white">Релевантные товары</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-4">
          {catalogs.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              className="cursor-pointer block"
              to={`/product/${item.id}`}
            >
              <div className="relative group w-full h-[424px] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={`https://wide-clocks-enjoy.loca.lt${item.images[0]}`}
                  alt={`catalog-${item.id}`}
                  className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition duration-300 text-white bg-black/40 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold mb-6">{item.title}</h3>
                    <p className="text-sm mb-3">{item.description}</p>
                    <p className="text-lg font-semibold">Цена розничная:</p>
                    <p className="text-lg font-semibold mb-4">
                      {item.price_retail} руб
                    </p>
                    <button className="bg-[#FEBC30] cursor-pointer hover:bg-yellow-400 transition text-black text-sm px-7 py-3">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div id="projects" className="flex flex-col gap-y-3 items-start">
        <h3 className="text-[30px] font-bold text-white">
          Реализованные проекты
        </h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full">
          <img
            className="w-full h-48 object-cover rounded-[10px]"
            src={r_project_1}
            alt=""
          />
          <img
            className="w-full h-48 object-cover rounded-[10px]"
            src={r_project_2}
            alt=""
          />
          <img
            className="w-full h-48 object-cover rounded-[10px]"
            src={r_project_3}
            alt=""
          />
        </section>
      </div>
      <div className="flex flex-col gap-y-3 items-start">
        <h3 className="text-[30px] font-bold text-white">
          Наши видео на YouTube
        </h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full">
          <iframe
            className="w-full h-48 sm:h-60 rounded-[10px]"
            src="https://www.youtube.com/embed/VpBmBDb0IHI?si=C2XcLJ2Q-hsgjxBQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            className="w-full h-48 sm:h-60 rounded-[10px]"
            src="https://www.youtube.com/embed/VpBmBDb0IHI?si=C2XcLJ2Q-hsgjxBQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            className="w-full h-48 sm:h-60 rounded-[10px]"
            src="https://www.youtube.com/embed/VpBmBDb0IHI?si=C2XcLJ2Q-hsgjxBQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
      </div>
      <div className="flex flex-col gap-y-3 items-start">
        <h3 className="text-[30px] font-bold text-white">Отзывы</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full py-4">
          {loading ? (
            <h4 className="text-white">Loading...</h4>
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
