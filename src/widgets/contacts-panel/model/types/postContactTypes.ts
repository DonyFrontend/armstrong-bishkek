import type { Dispatch, SetStateAction } from "react";

export interface IPostContact {
  setLoading: Dispatch<SetStateAction<boolean>>;
  name: string;
  number: string;
  comment?: string;
  setStatus: Dispatch<SetStateAction<string>>;
}
