import axios from "axios";

export const api = "https://heavy-rules-behave.loca.lt/";

export const instance = axios.create({
  baseURL: api,
});
