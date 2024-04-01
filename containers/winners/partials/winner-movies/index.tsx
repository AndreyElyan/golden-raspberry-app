import { FlatList } from "@/components/flat-list";
import MovieCard from "@/components/ui/movie-card";
import { useMovieStore } from "@/store/zustand";

export default function WinnerMovies() {
  const { winnersMovies } = useMovieStore();

  return (
    <div>
      {winnersMovies && (
        <FlatList
          items={winnersMovies}
          RenderItem={({ data }) => (
            <MovieCard
              key={data.id}
              title={data.title}
              year={data.year}
              winner={data.winner === "yes"}
              producers={data.producers}
              studio={data.studios}
              urlImage={data.urlImage}
            />
          )}
        />
      )}
    </div>
  );
}
