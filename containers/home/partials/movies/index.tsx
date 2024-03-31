import { FlatList } from "@/components/flat-list";
import MovieCard from "@/components/ui/movie-card";
import { useMovieStore } from "@/store/zustand";

export default function Movies() {
  const { movies } = useMovieStore();

  return (
    <>
      <FlatList
        items={movies}
        RenderItem={({ data }) => (
          <MovieCard
            key={data.id}
            title={data.title}
            year={data.year}
            winner={data.winner === "yes"}
            producers={data.producers}
            studio={data.studios}
          />
        )}
        ListEmptyComponent={() => <p>Nenhum filme encontrado</p>}
      />
    </>
  );
}
