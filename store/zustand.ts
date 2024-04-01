import {
  MostSuccessfulStudios,
  MoviesResponse,
  WinnersEntity,
} from "@/types/Movies";
import { create } from "zustand";

type State = {
  movies: MoviesResponse[] | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  addManyMovies: (movie: MoviesResponse[]) => void;
  winnersInTheSameYear: WinnersEntity[];
  addManyWinnersInTheSameYear: (winners: WinnersEntity[]) => void;
  studiosWithMostVictories: MostSuccessfulStudios[];
  addManyStudiosWithMostVictories: (studios: MostSuccessfulStudios[]) => void;
};

export const useMovieStore = create<State>((set) => ({
  movies: null,
  addManyMovies: (movie) => set((state) => ({ movies: movie })),
  loading: false,
  setLoading: (loading) => set((state) => ({ loading })),
  winnersInTheSameYear: [],
  addManyWinnersInTheSameYear: (winners) =>
    set((state) => ({ winnersInTheSameYear: winners })),
  studiosWithMostVictories: [],
  addManyStudiosWithMostVictories: (studios) =>
    set((state) => ({ studiosWithMostVictories: studios })),
}));
