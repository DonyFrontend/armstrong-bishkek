import MainHeader from "@/widgets/main-header/ui/MainHeader"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import arrowDown from '@/shared/assets/icons/arrow_down.png'
import { useMediaQuery } from "@/shared/hooks/useMediaQuery"
import { useCatalogsStore } from "@/app/store/feedbacks/feedbacksStore"
import { Link } from "react-router-dom"
import { api } from "@/shared/api/instance"

const Catalog = () => {

    const [openLight, setOpenLight] = useState(false);
    const [openCeiling, setOpenCeiling] = useState(false);
    const [openCompound, setOpenCompound] = useState(false);
    const [openMaterials, setOpenMaterials] = useState(false);
    const isMobile = useMediaQuery('(max-width: 729px)');
    const [loading, setLoading] = useState(false);
    const { catalogs, getCatalogs } = useCatalogsStore();
    const mobile = useMediaQuery("(max-width:1023px)");

    useEffect(() => {
        getCatalogs(setLoading);
    }, [getCatalogs]);

    useEffect(() => {
        if (loading) {
            console.log('loading');
        }
    }, [loading])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(catalogs.length / itemsPerPage);

    const paginatedCatalogs = catalogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <div className="bg-black w-full h-full flex justify-center pt-8 pb-10">

                <div className={`${isMobile ? "w-full" : "w-main"}`}>

                    <MainHeader mobile={mobile} />

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
                                    <Link to={'/subcategory=Лампы'}><p className="cursor-pointer">Лампы</p></Link>
                                    <Link to={'/subcategory=Светильники'}><p className="cursor-pointer">Светильники</p></Link>
                                    <Link to={'/subcategory=Аксессуары'}><p className="cursor-pointer">Аксессуары</p></Link>
                                    <Link to={'/subcategory=Оборудование'}><p className="cursor-pointer">Оборудование</p></Link>
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
                                    <Link to={'/subcategory=Реечные подвесные потолки'}><p className="cursor-pointer">Реечные подвесные потолки</p></Link>
                                    <Link to={'/subcategory=Решетчатые потолки "ГРИЛЬЯТО'}><p className="cursor-pointer">Решетчатые потолки "ГРИЛЬЯТО"</p></Link>
                                    <Link to={'/subcategory=Подвесные потолки Армстронг'}><p className="cursor-pointer">Подвесные потолки Армстронг</p></Link>
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
                                    <Link to={'/subcategory=Дерево'}><p className="cursor-pointer">Дерево</p></Link>
                                    <Link to={'/subcategory=Пластик'}><p className="cursor-pointer">Пластик</p></Link>
                                    <Link to={'/subcategory=Гипсокартон'}><p className="cursor-pointer">Гипсокартон</p></Link>
                                    <Link to={'/subcategory=Фарфор'}><p className="cursor-pointer">Фарфор</p></Link>
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
                                    <Link to={'/subcategory=Европа'}><p className="cursor-pointer">Европа</p></Link>
                                    <Link to={'/subcategory=Восток'}><p className="cursor-pointer">Восток</p></Link>
                                    <Link to={'/subcategory=Китай'}><p className="cursor-pointer">Китай</p></Link>
                                    <Link to={'/subcategory=СНГ'}><p className="cursor-pointer">СНГ</p></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`w-full mt-8 p-5 ${isMobile ? "items-center justify-center flex" : "items-start"} `}>
                        <p className="text-2xl text-white"> Главная/ <span className="text-[#febc30]"> Каталог </span> </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
                        {paginatedCatalogs.map((item) => (
                            <Link key={item.id} className="cursor-pointer" to={`/product/${item.id}`}>
                                <div className="relative group w-full h-[424px] rounded-2xl overflow-hidden cursor-pointer">
                                    <img
                                        src={`${api}${item.images[0]}`}
                                        alt={`catalog-${item.id}`}
                                        className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                                    />

                                    <div className="absolute inset-0 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition duration-300 text-white bg-black/40 backdrop-blur-sm p-6 rounded-2xl">
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-semibold mb-6">{item.title}</h3>
                                            <p className="text-sm mb-3">{item.description}</p>
                                            <p className="text-lg font-semibold">Цена розничная:</p>
                                            <p className="text-lg font-semibold mb-4">{item.price_retail} руб</p>

                                            <button className="bg-[#FEBC30] w-[200px] cursor-pointer hover:bg-yellow-400 transition text-black text-sm px-7 py-3">
                                                Купить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Пагинация */}
                    <div className="flex justify-center items-center gap-4 mb-12">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="text-white border border-white px-4 py-2 rounded disabled:opacity-30"
                        >
                            Назад
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-4 py-2 rounded border ${currentPage === index + 1
                                    ? "bg-yellow-400 text-black font-semibold"
                                    : "text-white border-white"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                            }
                            disabled={currentPage === totalPages}
                            className="text-white border border-white px-4 py-2 rounded disabled:opacity-30"
                        >
                            Вперёд
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Catalog