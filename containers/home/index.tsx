"use client";
import { BannerMovies } from "@/components/ui/banner-movies";
import { Input } from "@/components/ui/input";
import MovieCard from "@/components/ui/movie-card";
import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import { getWinnersMovieByYear } from "@/app/api/getMovieByYear";
import { useEffect } from "react";
import { years } from "@/utils/years";

export default function HomePage() {
  useEffect(() => {
    getWinnersMovieByYear(2019);
  }, []);

  return (
    <div>
      <BannerMovies />
      <Input
        className="mt-6"
        type="search"
        placeholder="Pesquise por um nome"
      />
      <Title
        title=" Encontre Os Piores Filmes"
        className="text-2xl pt-6 text-white font-semibold"
      />
      <YearList years={years} />

      <h1 className="text-lg pt-6 text-white">Pesquisado por: 2019</h1>

      <MovieCard
        title="Cats"
        studio="Universal Pictures"
        producers="Debra Hayward, Tim Bevan, Eric Fellner, Tom Hooper"
        winner
        year="2019"
      />
      <MovieCard
        title="The Fanatic"
        studio="Quiver Distribution"
        producers="Oscar Generale, Daniel Grodnik, Luillo Ruiz"
        winner={false}
        year="2019"
      />
    </div>
  );
}
