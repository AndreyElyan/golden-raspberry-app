import api from "./api";

export const getWinnersMovieByYear = async (year: number) => {
  try {
    const response = await api.get(`/movies/winners-by-year/${year}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
