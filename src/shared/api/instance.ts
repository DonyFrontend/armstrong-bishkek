import axios from "axios";

export const instance = axios.create({
  baseURL: "https://gentle-wasps-leave.loca.lt"
})