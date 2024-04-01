"use client";
import React from "react";
import TheySharedGoldenRaspberry from "./partials/theySharedGoldenRaspberry";
import MostSuccessfulStudios from "./partials/mostSuccessfulStudios";
import Curiosities from "./partials/curiosities";
import SearchMovie from "../home/partials/search-movie";
import WinnerMovies from "./partials/winner-movies";
import Loader from "@/components/ui/loader";
import { useMovieStore } from "@/app/store/zustand";

const Winners = () => {
  const { loading } = useMovieStore();

  return (
    <div>
      {loading ? <Loader /> : null}

      <TheySharedGoldenRaspberry />
      <MostSuccessfulStudios />
      <Curiosities />

      <SearchMovie isJustWinners />
      <WinnerMovies />
    </div>
  );
};

export default Winners;
