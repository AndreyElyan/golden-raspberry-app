import Movies from "@/app/containers/home/partials/movies";
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useMovieStore } from "@/app/store/zustand";

test("Movies", () => {
  useMovieStore.setState({
    loading: false,
    movies: [
      {
        id: 1,
        title: "Movie 1",
        producers: "Producer 1",
        studios: "Studio 1",
        winner: "",
        year: "2020",
      },
      {
        id: 2,
        title: "Movie 2",
        producers: "Producer 2",
        studios: "Studio 2",
        winner: "yes",
        year: "2020",
        urlImage:
          "https://play-lh.googleusercontent.com/xWn7Ncogkklsm3_7_U50k0b5SaDIQfzfV2XVf0HbgyHloVL6xLd0kRr5__BKYQJndEf82KxoDhEX7IeBCx-A=w240-h480-rw",
      },
    ],
  });
  render(<Movies />);

  expect(screen.findAllByAltText("movie")).toBeTruthy();
});

test("Loading", () => {
  useMovieStore.setState({
    loading: true,
    movies: [],
  });
  render(<Movies />);
});
