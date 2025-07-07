import axios from "axios";

export const api = 'https://polite-mice-make.loca.lt'

export const instance = axios.create({
  baseURL: "https://polite-mice-make.loca.lt/"
})