import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useMovieStore } from "@/app/store/zustand";

test("should add movies correctly", () => {
  const movies = [{ id: 1, title: "Movie 1" }];
  useMovieStore.setState({ movies: [] });
  useMovieStore.getState().movies;

  useMovieStore.getState().setLoading(true);
  useMovieStore.getState().addManyMovies([]);
  useMovieStore.getState().addManyWinnersInTheSameYear([]);
  useMovieStore.getState().addManyWinnersInTheSameYear([]);
  useMovieStore.getState().addManyWinnersMovies([]);
  useMovieStore.getState().addManyStudiosWithMostVictories([]);
});
