import { FlatList } from "@/components/flat-list";
import MovieCard from "@/components/ui/movie-card";
import { useMovieStore } from "@/store/zustand";

export default function Movies() {
  const { movies } = useMovieStore();

  return (
    <>
      {movies && (
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
              urlImage={data.urlImage}
            />
          )}
          ListEmptyComponent={() => (
            <p className="text-white mt-8">{"Nenhum filme encontrado :("}</p>
          )}
        />
      )}
    </>
  );
}
