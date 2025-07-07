import banner from "@/shared/assets/images/banner.png";
import MainSwiper from "@/shared/ui/main-swiper/MainSwiper";
import MainHeader from "@/widgets/main-header/ui/MainHeader";
import { useNavigate } from "react-router-dom";
import Banners from "./Banners";

const Main = () => {
  const navigate = useNavigate();


  return (
    <div className="w-full flex flex-col justify-center">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className={`w-full h-[100vh] bg-cover bg-center flex justify-center`}
      >
        <div className="w-main flex flex-col  items-center justify-between text-white py-10">
          <MainHeader />
          <div className="flex w-full justify-between">
            <div className="flex flex-col w-1/2  gap-6 text-wrap">
              <h1 className="text-[50px] font-bold">
                Официальный дилер Armstrong в Кыргызстане
              </h1>
              <p className="text-[20px]">
                Посетите ARMSTRONG BISHKEK в ТЦ Аю Гранда и узнайте, как мы
                можем помочь вам создать идеальные потолочные решения и
                освещение для вашего пространства.
              </p>
              <div className="w-full flex gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="w-1/2 bg-main rounded-[10px] p-2 font-bold text-[30px] cursor-pointer"
                >
                  Консультация
                </button>
                <button
                  onClick={() => navigate("/catalog")}
                  className="w-1/2 bg-main rounded-[10px] p-2 font-bold text-[30px] cursor-pointer"
                >
                  Узнать подробнее
                </button>
              </div>
            </div>
            <div>
              <MainSwiper />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black flex flex-col items-center gap-[15px]">
        <div className="w-main">
          <Banners />
        </div>
      </div>
    </div>
  );
};

export default Main;
