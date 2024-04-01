import type { MostSuccessfulStudios } from "@/types/Movies";
import api from "./api";

export const getMostSuccessfulStudios = async (): Promise<
  MostSuccessfulStudios[]
> => {
  try {
    const { data } = await api.get("movies/studios-with-most-victories");
    return data;
  } catch (error) {
    console.error("Error on getMostSuccessfulStudios", error);
    return [];
  }
};
