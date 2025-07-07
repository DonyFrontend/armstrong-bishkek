import { type StateCreator } from "zustand";
import type { IBlogSlice } from "../types/blog.types";
import { instance } from "@/shared/api/instance";

export const blogSlice: StateCreator<IBlogSlice> = (set) => ({
    blogs: [],
    async getBlogs(loading) {
        loading(true);
        try {
            const data = await instance.get("/blog-posts");
            set(() => ({ blogs: data.data }));
        } catch (error) {
            throw new Error(error as string);
        } finally {
            loading(false);
        }
    },
});
