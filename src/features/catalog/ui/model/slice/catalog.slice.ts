import { type StateCreator } from "zustand";
import type { ICatalogSlice } from "../types/catalog.types";
import { instance } from "@/shared/api/instance";

export const catalogSlice: StateCreator<ICatalogSlice> = (set) => ({
    catalogs: [],
    async getCatalogs(loading) {
        loading(true);
        try {
            const data = await instance.get("/products");
            set(() => ({ catalogs: data.data }));
        } catch (error) {
            throw new Error(error as string);
        } finally {
            loading(false);
        }
    },
});
