import logo from "@/shared/assets/icons/logo.svg";
import { Link } from "react-router-dom";
import CustomLink from "../link/CustomLink";

const MainHeader = () => {
  return (
    <header className="w-full flex justify-between items-center p-4 px-10 bg-[#00000040] backdrop-blur-[6px] rounded-[70px]">
      <Link to="/">
        <img src={logo} alt="Logo" className="cursor-pointer w-[174px]" />
      </Link>
      <nav className="flex gap-8">
        <CustomLink to="/catalog">Товары и услуги</CustomLink>
        <CustomLink to="/projects">Реализованные проекты</CustomLink>
        <CustomLink to="/blog">Блог</CustomLink>
        <CustomLink to="/contacts">Контакты</CustomLink>
      </nav>
      <button className="text-[20px] rounded-[10px] p-2 bg-main font-bold">
        Выйти на связь
      </button>
    </header>
  );
};

export default MainHeader;
