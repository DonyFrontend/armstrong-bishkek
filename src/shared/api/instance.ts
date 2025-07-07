import axios from "axios";

export const instance = axios.create({
  baseURL: "https://wide-clocks-enjoy.loca.lt/"
})