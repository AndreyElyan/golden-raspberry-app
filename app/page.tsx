import { BannerMovies } from "@/components/ui/banner-movies";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <BannerMovies />
      <h1 className="text-2xl pt-6 text-white font-semibold">
        Encontre Os Piores Filmes
      </h1>
    </div>
  );
}
