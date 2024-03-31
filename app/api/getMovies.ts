import { MoviesResponse } from "@/types/Movies";
import api from "./api";

interface MovieRequest {
  year?: string;
  title?: string;
  studio?: string;
  producer?: string;
  winner?: boolean;
  page?: number;
}
export const getMovies = async ({
  page,
  producer,
  studio,
  title,
  winner,
  year,
}: MovieRequest): Promise<MoviesResponse[]> => {
  try {
    const response = await api.post(`/movies`, {
      year,
      title,
      studio,
      producer,
      winner,
      page,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
