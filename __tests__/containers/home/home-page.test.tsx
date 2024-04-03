import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/containers/home";
import { useMovieStore } from "@/app/store/zustand";

test("Page", () => {
  render(<HomePage />);
  expect(screen.findAllByAltText("banner")).toBeTruthy();
});

test("Loading", () => {
  useMovieStore.setState({ loading: true });
  render(<HomePage />);
  expect(screen.findAllByAltText("loader")).toBeTruthy();
});
