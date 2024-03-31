import { create } from "zustand";

type Movies = {
  title: string;
  studio: string;
  producers: string;
  winner: boolean;
  year: string;
};

type State = {
  movies: Movies[];
  addMovie: (movie: Movies) => void;
};

export const useMovieStore = create<State>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));
