import type { Dispatch, SetStateAction } from "react";

export interface IFeedback {
  id: number;
  name: string;
  review: string;
  created_at: string;
}

export interface IFeedbacksSlice {
  feedbacks: [];
  getFeedbacks: (loading: Dispatch<SetStateAction<boolean>>) => void;
}
