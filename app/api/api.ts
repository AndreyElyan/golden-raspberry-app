import { useMovieStore } from "@/store/zustand";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  useMovieStore.getState().setLoading(true);
  return config;
});

api.interceptors.response.use(
  (response) => {
    useMovieStore.getState().setLoading(false);
    return response;
  },
  (error) => {
    useMovieStore.getState().setLoading(false);
    return Promise.reject(error);
  },
);

export default api;
