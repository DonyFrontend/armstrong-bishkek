import MainHeader from "@/widgets/main-header/ui/MainHeader"
import { Search } from "lucide-react"
import { useState } from "react"
import arrowDown from '@/shared/assets/icons/arrow_down.png'
import { useMediaQuery } from "@/shared/hooks/useMediaQuery"

const Catalog = () => {

    const [openLight, setOpenLight] = useState(false);
    const [openCeiling, setOpenCeiling] = useState(false);
    const [openCompound, setOpenCompound] = useState(false);
    const [openMaterials, setOpenMaterials] = useState(false);
    const isMobile = useMediaQuery('(max-width: 729px)')

    return (
        <>
            <div className="bg-black w-full h-full flex justify-center pt-8">

                <div className={`${isMobile ? "w-full" : "w-catalog"}`}>

                    <MainHeader />

                    <div className="flex flex-col p-4 items-center mt-8">
                        <div className="relative w-full">
                            <input
                                type="search"
                                placeholder="Найти"
                                className="w-full pl-10 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none transition-all"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    <div className={`flex items-start text-black px-4 mt-4 ${isMobile ? "flex-col gap-5" : "justify-between gap-10"} `}>

                        {/* Освещение */}
                        <div
                            className={`relative ${isMobile ? "w-full" : "w-[20%]"} bg-white ${openLight ? 'rounded-t-2xl' : 'rounded-2xl'} duration-100 p-5 text-black`}
                            onMouseEnter={() => setOpenLight(true)}
                            onMouseLeave={() => setOpenLight(false)}
                        >
                            <div className={`cursor-pointer flex items-center gap-2  ${isMobile ? "" : "justify-center"} `}>
                                <span className={`${isMobile ? "text-lg" : "text-xl"}`}>Освещение</span>
                                <span>{openLight ? <img className="w-6 rotate-180 duration-300 mt-1" src={arrowDown} /> : <img className="w-6 duration-300 mt-1" src={arrowDown} />}</span>
                            </div>

                            <div
                                className={`absolute left-0 top-full w-full bg-white rounded-b-xl shadow transition-all duration-300 ease-in-out transform origin-top z-10
      ${openLight ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
    `}
                            >
                                <div className="ml-2 flex flex-col gap-2 p-2">
                                    <p className="cursor-pointer">Лампы</p>
                                    <p className="cursor-pointer">Светильники</p>
                                    <p className="cursor-pointer">Аксессуары</p>
                                    <p className="cursor-pointer">Оборудование</p>
                                </div>
                            </div>
                        </div>

                        {/* Потолки */}
                        <div
                            className={`relative ${isMobile ? "w-full" : "w-[20%]"} bg-white ${openCeiling ? 'rounded-t-2xl' : 'rounded-2xl'} duration-100 p-5 text-black`}
                            onMouseEnter={() => setOpenCeiling(true)}
                            onMouseLeave={() => setOpenCeiling(false)}
                        >
                            <div className={`cursor-pointer flex items-center gap-2 ${isMobile ? "" : "justify-center"}`}>
                                <span className={`${isMobile ? "text-lg" : "text-xl"}`}>Потолки</span>
                                <span>{openCeiling ? <img className="w-6 rotate-180 duration-300 mt-1" src={arrowDown} /> : <img className="w-6 duration-300 mt-1" src={arrowDown} />}</span>
                            </div>

                            <div
                                className={`absolute left-0 top-full w-full bg-white rounded-b-xl shadow transition-all duration-300 ease-in-out transform origin-top z-10
    ${openCeiling ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
  `}
                            >
                                <div className="ml-2 flex flex-col gap-2 p-2">
                                    <p className="cursor-pointer">Реечные подвесные потолки</p>
                                    <p className="cursor-pointer">Решетчатые потолки "ГРИЛЬЯТО"</p>
                                    <p className="cursor-pointer">Подвесные потолки Армстронг</p>
                                </div>
                            </div>
                        </div>

                        {/* Состав материала */}
                        <div
                            className={`relative ${isMobile ? "w-full" : "w-[20%]"} bg-white ${openCompound ? 'rounded-t-2xl' : 'rounded-2xl'} duration-100 p-5 text-black`}
                            onMouseEnter={() => setOpenCompound(true)}
                            onMouseLeave={() => setOpenCompound(false)}
                        >
                            <div className={`cursor-pointer flex items-center gap-2 ${isMobile ? "" : "justify-center"}`}>
                                <span className={`whitespace-nowrap ${isMobile ? "text-lg" : "text-xl"}`}>Состав материала</span>
                                <span>{openCompound ? <img className="w-6 rotate-180 duration-300 mt-1" src={arrowDown} /> : <img className="w-6 duration-300 mt-1" src={arrowDown} />}</span>
                            </div>

                            <div
                                className={`absolute left-0 top-full w-full bg-white rounded-b-xl shadow transition-all duration-300 ease-in-out transform origin-top z-10
    ${openCompound ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
  `}
                            >
                                <div className="ml-2 flex flex-col gap-2 p-2">
                                    <p className="cursor-pointer">Дерево</p>
                                    <p className="cursor-pointer">Пластик</p>
                                    <p className="cursor-pointer">Гипсокартон</p>
                                    <p className="cursor-pointer">Фарфор</p>
                                </div>
                            </div>
                        </div>

                        {/* Материалы из */}
                        <div
                            className={`relative ${isMobile ? "w-full" : "w-[20%]"} bg-white ${openMaterials ? 'rounded-t-2xl' : 'rounded-2xl'} duration-100 p-5 text-black`}
                            onMouseEnter={() => setOpenMaterials(true)}
                            onMouseLeave={() => setOpenMaterials(false)}
                        >
                            <div className={`cursor-pointer flex items-center gap-2 ${isMobile ? "" : "justify-center"} `}>
                                <span className={`whitespace-nowrap ${isMobile ? "text-lg" : "text-xl"}`}>Материалы из:</span>
                                <span>{openMaterials ? <img className="w-6 rotate-180 duration-300 mt-1" src={arrowDown} /> : <img className="w-6 duration-300 mt-1" src={arrowDown} />}</span>
                            </div>

                            <div
                                className={`absolute left-0 top-full w-full bg-white rounded-b-xl shadow transition-all duration-300 ease-in-out transform origin-top z-10
    ${openMaterials ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
  `}
                            >
                                <div className="ml-2 flex flex-col gap-2 p-2">
                                    <p className="cursor-pointer">Европа</p>
                                    <p className="cursor-pointer">Восток</p>
                                    <p className="cursor-pointer">Китай</p>
                                    <p className="cursor-pointer">СНГ</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`w-full mt-8 p-5 ${isMobile ? "items-center justify-center flex" : "items-start"} `}>
                        <p className="text-2xl text-white"> Главная/ <span className="text-[#febc30]"> Каталог </span> </p>
                    </div>

                    <div className="w-full p-5 mt-2 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <div className="border w-[50px] h-[50px]"></div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Catalog