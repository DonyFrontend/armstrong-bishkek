import logo from "@/shared/assets/icons/logo.svg";
import { Link } from "react-router-dom";
import CustomLink from "../link/CustomLink";
import BurgerMenu from "@/shared/ui/burger-menu/BurgerMenu";

const MainHeader = ({ mobile }: { mobile: boolean }) => {
  return (
    <header
      className={`w-full text-white text-nowrap flex justify-between items-center p-4 gap-4
        ${!mobile ? "px-6 md:px-10" : ""}
        bg-[#00000040] backdrop-blur-[6px] rounded-[70px]
        max-w-[calc(100vw-32px)] mx-auto`}
    >
      <Link
        to="/"
        className="w-[100px] md:w-[174px] h-[60px] flex justify-center items-center shrink-0"
      >
        <img
          src={logo}
          alt="Logo"
          className=" cursor-pointer w-full"
        />
      </Link>

      {!mobile && (
        <nav className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide px-2">
          <CustomLink to="/catalog">Товары и услуги</CustomLink>
          <a
            className={`font-bold text-[16px] md:text-[20px]`}
            href="#projects"
          >
            Реализованные проекты
          </a>
          <CustomLink to="/blog">Блог</CustomLink>
          <CustomLink to="/contact">Контакты</CustomLink>
        </nav>
      )}

      <div className="flex items-center gap-4">
        <Link
          to={"/contact"}
          className={`text-[14px] md:text-[20px] whitespace-nowrap rounded-[10px] p-2 bg-main font-bold shrink-0`}
        >
          Выйти на связь
        </Link>

        {mobile && (
          <BurgerMenu>
            <CustomLink to="/catalog">Товары и услуги</CustomLink>
            <CustomLink to="/projects">Реализованные проекты</CustomLink>
            <CustomLink to="/blog">Блог</CustomLink>
            <CustomLink to="/contacts">Контакты</CustomLink>
          </BurgerMenu>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
