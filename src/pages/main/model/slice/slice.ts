import { type StateCreator } from "zustand";
import type { IFeedbacksSlice } from "../types/types";
import { instance } from "@/shared/api/instance";

export const feedbacksSlice: StateCreator<IFeedbacksSlice> = (set) => ({
  feedbacks: [],
  async getFeedbacks(loading) {
    loading(true);
    try {
      const data = await instance.get("/reviews");
      set(() => ({ feedbacks: data.data }));
    } catch (error) {
      throw new Error(error as string);
    } finally {
      loading(false);
    }
  },
});
