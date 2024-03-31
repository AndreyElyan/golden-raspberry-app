import api from "./api";

export const getMoviesBySearch = async (text: string) => {
  try {
    const response = await api.get(`/movies/search/${text}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
