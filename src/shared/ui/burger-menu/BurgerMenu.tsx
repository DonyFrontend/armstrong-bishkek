import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const BurgerMenu: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <div className="flex z-[9999] relative">
      <div
        className="flex flex-col gap-y-2 cursor-pointer"
        onClick={() => setState((prev) => !prev)}
      >
        <span className="h-[3px] w-[40px] bg-white rounded-[10px]"></span>
        <span className="h-[3px] w-[40px] bg-white rounded-[10px]"></span>
        <span className="h-[3px] w-[40px] bg-white rounded-[10px]"></span>
      </div>
      {state && (
        <nav className="flex z-[9999] flex-col bg-black border border-white rounded-[10px] gap-y-8 p-3 absolute top-0 -right-10">
          <div className="flex flex-col gap-y-6">{children}</div>
          <button
            className="p-2 bg-main rounded-[10px]"
            onClick={() => setState((prev) => !prev)}
          >
            Закрыть
          </button>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
