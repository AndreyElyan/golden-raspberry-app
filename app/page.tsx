import { BannerMovies } from "@/components/ui/banner-movies";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MovieCard from "@/components/ui/movie-card";
import YearList from "@/components/ui/year-list";

export default function Home() {
  return (
    <div>
      <BannerMovies />
      <Input
        className="mt-6"
        type="search"
        placeholder="Pesquise por um nome"
      />
      <h1 className="text-2xl pt-6 text-white font-semibold">
        Encontre Os Piores Filmes
      </h1>
      <YearList />

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
