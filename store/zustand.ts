import { MoviesResponse } from "@/types/Movies";
import { create } from "zustand";

type State = {
  movies: MoviesResponse[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  addManyMovies: (movie: MoviesResponse[]) => void;
};

export const useMovieStore = create<State>((set) => ({
  movies: [],
  addManyMovies: (movie) => set((state) => ({ movies: movie })),
  loading: false,
  setLoading: (loading) => set((state) => ({ loading })),
}));
