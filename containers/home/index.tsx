"use client";
import { BannerMovies } from "@/components/ui/banner-movies";
import SearchMovie from "./partials/search-movie";
import Movies from "./partials/movies";
import { useMovieStore } from "@/store/zustand";
import Loader from "@/components/ui/loader";

export default function HomePage() {
  const { loading } = useMovieStore();

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
        <SearchMovie isJustWinners={false} />
        <Movies />
      </>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <BannerMovies />
      {renderMovies()}
    </div>
  );
}
