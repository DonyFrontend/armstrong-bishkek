import type { Dispatch, SetStateAction } from "react";

export interface ICatalog {
  id?: number;
  title: string;
  attributes: {
    "Освещение": string;
    "материалы из": string;
    "состав материала": string;
  };
  guarantee: string;
  region: string;
  price_retail: number;
  price_wholesale: number;
  price_bulk: number;
  description: string;
  images: string[]
}

export interface ICatalogSlice {
  catalogs: ICatalog[];
  getCatalogs: (loading: Dispatch<SetStateAction<boolean>>) => void;
}