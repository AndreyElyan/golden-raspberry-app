import { MoviesResponse } from "@/types/Movies";
import { create } from "zustand";

type State = {
  movies: MoviesResponse[];
  addManyMovies: (movie: MoviesResponse[]) => void;
};

export const useMovieStore = create<State>((set) => ({
  movies: [],
  addManyMovies: (movie) => set((state) => ({ movies: movie })),
}));
