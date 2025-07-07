import type { Dispatch, SetStateAction } from "react";

export interface IBlog {
  id?: number;
  title: string;
  content: string;
  images: string[];
}

export interface IBlogSlice {
  blogs: IBlog[];
  getBlogs: (loading: Dispatch<SetStateAction<boolean>>) => void;
}