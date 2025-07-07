import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type { IFeedbacksSlice } from "@/pages/main/model/types/types";
import { feedbacksSlice } from "@/pages/main/model/slice/slice";

export const useFeedbacksStore = create(
  devtools<IFeedbacksSlice>((...p) => ({
    ...feedbacksSlice(...p),
  }))
);
