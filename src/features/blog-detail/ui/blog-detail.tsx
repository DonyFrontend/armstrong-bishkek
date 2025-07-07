import { useBlogsStore } from "@/app/store/feedbacks/feedbacksStore";
import { useMediaQuery } from "@/shared/hooks/useMedia";
import MainHeader from "@/widgets/main-header/ui/MainHeader";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
    const isMobile = useMediaQuery("(max-width: 729px)");
    const [, setLoading] = useState(false);
    const { blogs, getBlogs } = useBlogsStore();
    const { id } = useParams();
    const blog = blogs.find((item) => String(item.id) === id);
    const mobile = useMediaQuery("(max-width:1023px)");

    useEffect(() => {
        getBlogs(setLoading);
    }, [getBlogs]);

    if (!blog) return null;

    return (
        <div className="bg-black w-full min-h-screen flex justify-center pt-8 text-white pb-10">
            <div className={`${isMobile ? "w-full p-4" : "w-main"}`}>
                <MainHeader mobile={mobile} />

                <div className="mt-8 mb-6 flex justify-between items-center">
                    <p className={`${isMobile ? "text-xm" : "text-2xl"} `}>
                        Главная / Блог / <span className="text-[#febc30]">{blog.title}</span>
                    </p>
                    <Link to="/blog" className={`${isMobile ? "text-xm" : "text-xl"}`}>
                        Назад
                    </Link>
                </div>

                <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6 mb-10`}>
                    <div className="w-full md:w-1/2">
                        <img
                            src={`https://polite-mice-make.loca.lt${blog.images[0]}`}
                            alt="main-1"
                            className="rounded-xl w-full h-auto object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <p className={`mb-4 ${isMobile ? "text-xl" : "text-3xl font-semibold"} `}>{blog.title}</p>
                        <p className={`mb-3 ${isMobile ? "text-lg" : "text-xl"} `}>{blog.content}</p>
                    </div>
                </div>

                <div className={`flex ${isMobile ? "flex-col" : "flex-row-reverse"} gap-6`}>
                    <div className="w-full md:w-1/2">
                        <img
                            src={`https://polite-mice-make.loca.lt${blog.images[1]}`}
                            alt="main-2"
                            className="rounded-xl w-full h-auto object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <p className={`mb-3 ${isMobile ? "text-lg" : "text-xl"} `}>{blog.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
