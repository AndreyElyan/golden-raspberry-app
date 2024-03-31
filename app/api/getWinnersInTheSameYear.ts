import api from "./api";

export const getWinnersInTheSameYear = async () => {
  try {
    const { data } = await api.get("movies/years-with-multiple-winners");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
