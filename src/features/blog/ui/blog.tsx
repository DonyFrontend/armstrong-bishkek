import { useBlogsStore } from "@/app/store/feedbacks/feedbacksStore";
import { useMediaQuery } from "@/shared/hooks/useMedia";
import MainHeader from "@/widgets/main-header/ui/MainHeader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const isMobile = useMediaQuery("(max-width: 729px)");
    const { blogs, getBlogs } = useBlogsStore();
    const [, setLoading] = useState(false);

    // Пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const paginatedBlogs = blogs.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
    );

    useEffect(() => {
        getBlogs(setLoading);
    }, [getBlogs]);

    return (
        <>
            <div className="bg-black w-full h-full flex justify-center pt-8">
                <div className={`${isMobile ? "w-full" : "w-main"}`}>
                    <MainHeader mobile />

                    <div
                        className={`w-full mt-8 p-5 ${isMobile ? "items-center justify-center flex" : "items-start"
                            } `}
                    >
                        <p className="text-2xl text-white">
                            Главная/ <span className="text-[#febc30]"> Блог </span>
                        </p>
                    </div>

                    {/* Блоги */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        {paginatedBlogs.map((item) => (
                            <Link key={item.id} className="cursor-pointer" to={`/blog/${item.id}`}>
                                <div className={`relative group w-full h-[424px] overflow-hidden cursor-pointer rounded-[12px] ${isMobile ? "flex justify-center" : ""}`}>
                                    <img
                                        src={`https://wide-clocks-enjoy.loca.lt${item.images[0]}`}
                                        alt={`catalog-${item.id}`}
                                        className={`object-cover transition duration-300 group-hover:blur-xs ${isMobile ? "w-[85%]" : "w-full"} h-full `}
                                    />

                                    <div className="absolute inset-0 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white bg-black/40 p-6 rounded-2xl">
                                        <div className="flex text-center justify-center">
                                            <h3 className="text-xl font-semibold mb-6 text-yellow-400">
                                                {item.title}
                                            </h3>
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

                    {/* YouTube */}
                    <div className="mt-16 pb-4 flex flex-col">
                        <p className="text-white text-2xl mb-6">Наши видео на YouTube</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "https://www.youtube.com/embed/VpBmBDb0IHI",
                                "https://www.youtube.com/embed/VpBmBDb0IHI",
                                "https://www.youtube.com/embed/VpBmBDb0IHI",
                            ].map((url, i) => (
                                <div className={`${isMobile ? "flex justify-center" : ""}`}>
                                    <div
                                        key={i}
                                        className={`aspect-video rounded-xl overflow-hidden ${isMobile ? "w-[85%]" : "w-full"} `}
                                    >
                                        <iframe
                                            src={url}
                                            title={`YouTube video ${i + 1}`}
                                            className="w-full h-full"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;