import axios from "axios";

export const instance = axios.create({
  baseURL: "https://43c2-185-138-184-193.ngrok-free.app"
})