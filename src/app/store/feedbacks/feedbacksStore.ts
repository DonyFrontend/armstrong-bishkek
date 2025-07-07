import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type { IFeedbacksSlice } from "@/pages/main/model/types/types";
import { feedbacksSlice } from "@/pages/main/model/slice/slice";
import type { ICatalogSlice } from "@/features/catalog/ui/model/types/catalog.types";
import { catalogSlice } from "@/features/catalog/ui/model/slice/catalog.slice";
import type { IBlogSlice } from "@/features/blog/model/types/blog.types";
import { blogSlice } from "@/features/blog/model/slice/blog.slice";

export const useFeedbacksStore = create(
  devtools<IFeedbacksSlice>((...p) => ({
    ...feedbacksSlice(...p),
  }))
);

export const useCatalogsStore = create(
  devtools<ICatalogSlice>((...p) => ({
    ...catalogSlice(...p),
  }))
);

export const useBlogsStore = create(
  devtools<IBlogSlice>((...p) => ({
    ...blogSlice(...p),
  }))
);