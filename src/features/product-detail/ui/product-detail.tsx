import MainHeader from "@/widgets/main-header/ui/MainHeader";
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/shared/hooks/useMediaQuery"
import { useCatalogsStore } from "@/app/store/feedbacks/feedbacksStore"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import { api } from "@/shared/api/instance";

const ProductDetail = () => {

    const isMobile = useMediaQuery("(max-width: 729px)");
    const [loading, setLoading] = useState(false);
    const { catalogs, getCatalogs } = useCatalogsStore();
    const { id } = useParams()
    const product = catalogs.find(item => String(item.id) === id);
    const mobile = useMediaQuery("(max-width:1023px)");
    const navigate = useNavigate();

    const handleBuyClick = () => {
        if (product?.title) {
            navigate(`/contact?product=${encodeURIComponent(product.title)}`);
        } else {
            navigate("/contact");
        }
    };


    useEffect(() => {
        getCatalogs(setLoading);
    }, [getCatalogs]);

    useEffect(() => {
        if (loading) {
            console.log('loading');
        }
    }, [loading])

    return (
        <div className="bg-black w-full flex justify-center pt-8 text-white pb-10">
            <div className={`${isMobile ? "w-full px-4" : "w-main"}`}>

                <MainHeader mobile={mobile} />

                <div className="w-[80%] mx-auto mb-8 mt-10">
                    <p className="text-white text-2xl mb-4">Главная </p>
                    <p className="text-white text-xl"> {product?.title} </p>

                    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-8 mt-10`}>
                        {/* Фото товара */}
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={isMobile ? 1 : 1}
                            navigation
                            pagination={{ clickable: true }}
                            className={`mySwiper ${isMobile ? "w-full" : "w-[48%] h-[350px]"} `}
                        >
                            {product?.images?.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={`${api}${img}`}
                                        alt={`product ${index + 1}`}
                                        className="rounded-lg object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Инфо о товаре */}
                        <div className={`flex flex-col gap-4 text-white ${isMobile ? "" : "w-[52%]"}`}>
                            <div className={`py-2 flex ${isMobile ? "flex-col" : "justify-between"} `}>
                                <p className={`${isMobile ? "text-xm" : "text-xl"}`}>Наименование продукта:</p>
                                <p className={`${isMobile ? "text-sm" : "text-lg"}`}>{product?.title ? product.title : <> Не указано </>}</p>
                            </div>

                            <div className={`border-t flex justify-between border-white py-2 ${isMobile ? "" : ""} `}>
                                <p className={`${isMobile ? "text-xm" : "text-xl"}`}>Гарантия:</p>
                                <p className={`${isMobile ? "text-sm" : "text-lg"}`}>{product?.guarantee ? product.guarantee : <> Не указано </>}</p>
                            </div>

                            <div className="border-t flex justify-between border-white py-2">
                                <p className={`${isMobile ? "text-xm" : "text-xl"}`}>Регион:</p>
                                <p className={`${isMobile ? "text-sm" : "text-lg"}`}>{product?.region ? product.region : <> Не указано </>}</p>
                            </div>

                            <div className="border-t flex justify-between border-yellow-400 py-2">
                                <p className={`${isMobile ? "text-xm" : "text-xl"} text-yellow-400`}>Цена розничная:</p>
                                <p className={`font-semibold text-yellow-400 ${isMobile ? "text-sm " : "text-lg "} `}>{product?.price_retail} сом</p>
                            </div>

                            <div className="border-t flex justify-between border-yellow-400 py-2">
                                <p className={`${isMobile ? "text-xm" : "text-xl"} text-yellow-400`}>Цена крупнооптовая:</p>
                                <p className={`font-semibold text-yellow-400 ${isMobile ? "text-sm " : "text-lg "} `}>{product?.price_wholesale} сом</p>
                            </div>

                            <div className="border-t flex justify-between border-yellow-400 py-2">
                                <p className={`${isMobile ? "text-xm" : "text-xl"} text-yellow-400`}>Цена оптовая:</p>
                                <p className={`font-semibold text-yellow-400 ${isMobile ? "text-sm " : "text-lg "} `}>{product?.price_bulk} сом</p>
                            </div>

                            <div className="mt-6">
                                <button
                                    onClick={handleBuyClick}
                                    className="w-full bg-[#FEBC30] cursor-pointer hover:bg-yellow-400 text-black text-2xl font-semibold py-3 rounded-xl"
                                >
                                    Купить
                                </button>

                            </div>

                            {/* Цвета и валюта */}
                            <div className="flex items-center gap-4">
                                <div className="flex w-full justify-center gap-6 p-2 rounded-2xl bg-[#febc30] cursor-pointer">
                                    <div className="w-10 h-10 rounded bg-[#FEBC30] border" />
                                    <div className="w-10 h-10 rounded bg-black border" />
                                    <div className="w-10 h-10 rounded bg-white border" />
                                </div>

                                <select className="bg-white text-black p-4 rounded-2xl cursor-pointer">
                                    <option>Сом</option>
                                    <option>Руб</option>
                                    <option>USD</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-white text-lg mb-2">Описание</p>
                        <p className="text-gray-300 text-sm"> {product?.description ? product.description : <> Здесь будет подробное описание товара... </>} </p>
                    </div>

                    <div className="mt-12 flex flex-col">
                        <p className="text-2xl text-white mb-4"> Похожие товары </p>
                        <div className={`grid gap-8 mb-4 ${isMobile ? "grid-cols-1" : "grid-cols-3"} `}>
                            {catalogs?.map((item) => (
                                <Link className="cursor-pointer" to={`/product/${item.id}`}>
                                    <div
                                        key={item.id}
                                        className={`relative group rounded-2xl overflow-hidden cursor-pointer ${isMobile ? "w-[200px] h-[200px]" : "w-[424px] h-[424px]"} `}
                                    >
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

                                                <button className="bg-[#FEBC30] cursor-pointer transition text-black text-sm px-7 py-3">
                                                    Купить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>

                    <div className="mt-16 pb-4 flex flex-col">
                        <p className="text-white text-2xl mb-6">Наши видео на YouTube</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "https://www.youtube.com/embed/VpBmBDb0IHI",
                                "https://www.youtube.com/embed/VpBmBDb0IHI",
                                "https://www.youtube.com/embed/VpBmBDb0IHI",
                            ].map((url, i) => (
                                <div key={i} className="w-full aspect-video rounded-xl overflow-hidden">
                                    <iframe
                                        src={url}
                                        title={`YouTube video ${i + 1}`}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
