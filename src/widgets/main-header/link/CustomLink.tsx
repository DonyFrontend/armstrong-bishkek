import { Link, useMatch } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

const CustomLink = ({ children, to }: Props) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={`font-bold text-[20px] ${match && "text-main"}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
