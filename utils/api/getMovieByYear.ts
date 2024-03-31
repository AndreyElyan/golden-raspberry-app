import api from "./api";

export const getMovieByYear = async (year: number) => {
  try {
    const response = await api.get(`/movies/winners-by-year/${year}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
