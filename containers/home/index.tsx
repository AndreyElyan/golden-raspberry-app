"use client";
import { BannerMovies } from "@/components/ui/banner-movies";
import { useCallback, useEffect, useState } from "react";
import { getMovies } from "@/app/api";
import SearchMovie from "./partials/search-movie";
import Movies from "./partials/movies";
import { useMovieStore } from "@/store/zustand";
import Loader from "@/components/ui/loader";

export default function HomePage() {
  const { addManyMovies, loading } = useMovieStore();

  const handleGetMovies = useCallback(async () => {
    const response = await getMovies({ year: "2019" });
    addManyMovies(response);
  }, [addManyMovies]);

  useEffect(() => {
    handleGetMovies().finally(() => {});
  }, [handleGetMovies]);

  const renderMovies = () => {
    if (loading) {
      return (
        <div className="pt-8">
          <Loader />
        </div>
      );
    }
    return (
      <>
        <SearchMovie />
        <Movies />
      </>
    );
  };

  return (
    <div>
      <BannerMovies />
      {renderMovies()}
    </div>
  );
}
