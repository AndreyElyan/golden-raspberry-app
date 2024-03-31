"use client";
import { BannerMovies } from "@/components/ui/banner-movies";
import { useCallback, useEffect } from "react";
import { getMovies } from "@/app/api";
import SearchMovie from "./partials/search-movie";
import Movies from "./partials/movies";
import { useMovieStore } from "@/store/zustand";

export default function HomePage() {
  const { addManyMovies, movies } = useMovieStore();

  const handleGetMovies = useCallback(async () => {
    const response = await getMovies({ year: "2019" });
    addManyMovies(response);
  }, [addManyMovies]);

  useEffect(() => {
    if (movies.length === 0) {
      handleGetMovies();
    }
  }, [movies, handleGetMovies]);

  return (
    <div>
      <BannerMovies />
      <SearchMovie />
      <Movies />
    </div>
  );
}
