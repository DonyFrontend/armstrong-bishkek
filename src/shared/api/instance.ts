import axios from "axios";

export const instance = axios.create({
  baseURL: "https://polite-mice-make.loca.lt/"
})