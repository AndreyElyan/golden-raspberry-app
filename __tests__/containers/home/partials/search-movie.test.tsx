import SearchMovie from "@/app/containers/home/partials/search-movie";
import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useMovieStore } from "@/app/store/zustand";

vi.mock("@/app/store/zustand", async (importOriginal) => {
  const mod = await importOriginal<typeof import("@/app/store/zustand")>();
  return {
    ...mod,

    useMovieStore: () => {
      return {
        movies: [],
        addManyMovies: () => {
          return;
        },
        addManyWinnersMovies: vi.fn(),
        setLoading: () => {
          return;
        },
      };
    },
  };
});
test("SearchMovie", () => {
  render(<SearchMovie isJustWinners={false} />);

  expect(screen.findAllByAltText("movie")).toBeTruthy();
});

test("Loading", () => {
  render(<SearchMovie isJustWinners={false} />);
});

test("Search", async () => {
  vi.mock("@/app/api", async (importOriginal) => {
    const mod = await importOriginal<typeof import("@/app/api")>();
    return {
      ...mod,
      getMoviesBySearch: async () => [
        {
          id: 1,
          title: "Movie 1",
          producers: "Producer 1",
          studios: "Studio 1",
          winner: "",
          year: "2020",
        },
      ],
      getMovies: async () => [
        {
          id: 1,
          title: "Movie 1",
          producers: "Producer 1",
          studios: "Studio 1",
          winner: "",
          year: "2011",
        },
      ],
    };
  });

  render(<SearchMovie isJustWinners={false} />);

  const input = screen.getAllByAltText("input");

  fireEvent.change(input[0], { target: { value: "Movie 1" } });

  vi.useFakeTimers();

  vi.advanceTimersByTime(750);

  const year = screen.getAllByText("2011");

  fireEvent.click(year[0]);
});

test("Search Winners", async () => {
  vi.mock("@/app/api", async (importOriginal) => {
    const mod = await importOriginal<typeof import("@/app/api")>();
    return {
      ...mod,
      getMoviesBySearch: async () => [
        {
          id: 1,
          title: "Movie 1",
          producers: "Producer 1",
          studios: "Studio 1",
          winner: "",
          year: "2020",
        },
      ],
      getMovies: async () => [
        {
          id: 1,
          title: "Movie 1",
          producers: "Producer 1",
          studios: "Studio 1",
          winner: "",
          year: "2011",
        },
      ],
    };
  });

  render(<SearchMovie isJustWinners={true} />);

  const year = screen.getAllByText("2011");

  fireEvent.click(year[0]);
});
