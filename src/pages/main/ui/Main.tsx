import banner from "@/shared/assets/images/banner.png";
import MainSwiper from "@/shared/ui/main-swiper/MainSwiper";
import MainHeader from "@/widgets/main-header/ui/MainHeader";
import { useNavigate } from "react-router-dom";
import Banners from "./Banners";
import { useMediaQuery } from "@/shared/hooks/useMedia";

const Main = () => {
  const navigate = useNavigate();
  const mobile = useMediaQuery("(max-width:1023px)");

  return (
    <div className="w-full flex flex-col justify-center">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className={`w-full h-[80vh] ${
          mobile && "h-[190vh]"
        } bg-cover bg-center flex justify-center`}
      >
        <div className="w-main flex flex-col justify-center items-center gap-y-16 text-white py-10">
          <div
            className={`${
              !mobile && "absolute top-4 left-1/2 -translate-x-1/2"
            }`}
          >
            <MainHeader mobile={mobile} />
          </div>

          <div
            className={`flex ${
              mobile
                ? "flex-col gap-y-12 items-center"
                : "items-start justify-between"
            } w-full`}
          >
            <div
              className={`flex flex-col ${
                mobile ? "w-full items-center text-center" : "w-1/2"
              } gap-6`}
            >
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
                  className={`w-1/2 bg-main rounded-[10px] p-2 font-bold ${
                    mobile ? "text-[18px]" : "text-[30px]"
                  } cursor-pointer`}
                >
                  Консультация
                </button>
                <button
                  onClick={() => navigate("/catalog")}
                  className={`w-1/2 bg-main rounded-[10px] ${
                    mobile ? "text-[18px]" : "text-[30px]"
                  } font-bold cursor-pointer p-2`}
                >
                  Узнать подробнее
                </button>
              </div>
            </div>

            <div>
              <MainSwiper mobile={mobile} />
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
