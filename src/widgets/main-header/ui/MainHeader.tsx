import logo from "@/shared/assets/icons/logo.svg";
import { Link } from "react-router-dom";
import CustomLink from "../link/CustomLink";
import BurgerMenu from "@/shared/ui/burger-menu/BurgerMenu";

const MainHeader = ({ mobile }: { mobile: boolean }) => {
  return (
    <header
      className={`w-full flex justify-between items-center p-4  ${
        !mobile && "px-10"
      } ${
        mobile && "gap-x-5"
      } bg-[#00000040] backdrop-blur-[6px] rounded-[70px]`}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className="cursor-pointer w-[174px]" />
      </Link>
      {!mobile && (
        <nav className="flex gap-8">
          <CustomLink to="/catalog">Товары и услуги</CustomLink>
          <a className={`font-bold text-[20px]`} href="#projects">
            Реализованные проекты
          </a>
          <CustomLink to="/blog">Блог</CustomLink>
          <CustomLink to="/contacts">Контакты</CustomLink>
        </nav>
      )}
      <Link
        to={"/contact"}
        className={`${
          mobile ? "text-[12px]" : "text-[20px]"
        } flex justify-center text-nowrap rounded-[10px] p-2 bg-main font-bold`}
      >
        Выйти на связь
      </Link>
      {mobile && (
        <BurgerMenu>
          {" "}
          <CustomLink to="/catalog">Товары и услуги</CustomLink>
          <CustomLink to="/projects">Реализованные проекты</CustomLink>
          <CustomLink to="/blog">Блог</CustomLink>
          <CustomLink to="/contacts">Контакты</CustomLink>
        </BurgerMenu>
      )}
    </header>
  );
};

export default MainHeader;
