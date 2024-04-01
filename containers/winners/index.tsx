"use client";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MovieCard from "@/components/ui/movie-card";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import { years } from "@/utils/years";
import React from "react";
import TheySharedGoldenRaspberry from "./partials/theySharedGoldenRaspberry";
import MostSuccessfulStudios from "./partials/mostSuccessfulStudios";
import Curiosities from "./partials/curiosities";
import SearchMovie from "../home/partials/search-movie";
import WinnerMovies from "./partials/winner-movies";

const Winners = () => {
  return (
    <div>
      <TheySharedGoldenRaspberry />
      <MostSuccessfulStudios />
      <Curiosities />

      <SearchMovie isJustWinners />
      <WinnerMovies />
    </div>
  );
};

export default Winners;
