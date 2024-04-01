import React, { useCallback } from "react";

import MovieCard from "@/components/ui/movie-card";
import { getWinnersInTheSameYear } from "@/app/api/getWinnersInTheSameYear";
import { FlatList } from "@/components/flat-list";
import Title from "@/components/ui/title";
import { useMovieStore } from "@/store/zustand";
import { WinnersEntity, WinnersInSameYearResponse } from "@/types/Movies";

export default function TheySharedGoldenRaspberry() {
  const { addManyWinnersInTheSameYear, winnersInTheSameYear, setLoading } =
    useMovieStore();

  const fetchWinnersInTheSameYear = useCallback(async () => {
    setLoading(true);
    const data: WinnersInSameYearResponse[] = await getWinnersInTheSameYear();
    const winners: WinnersEntity[] = data.flatMap((item) => item.winners);
    addManyWinnersInTheSameYear(winners);

    setLoading(false);
  }, [addManyWinnersInTheSameYear, setLoading]);

  React.useEffect(() => {
    if (winnersInTheSameYear.length <= 0) fetchWinnersInTheSameYear();
  }, [
    addManyWinnersInTheSameYear,
    fetchWinnersInTheSameYear,
    winnersInTheSameYear,
  ]);

  return (
    <div>
      <Title
        className="text-xl"
        title="They shared the Golden Raspberry for Worst Movie of the Year"
      />

      <FlatList
        items={winnersInTheSameYear}
        RenderItem={({ data }) => {
          return (
            <MovieCard
              key={data.title}
              title={data.title}
              year={data.year}
              winner={data.winner === "yes"}
              producers={data.producers}
              studio={data.studios}
              urlImage={data.urlImage}
            />
          );
        }}
      />
    </div>
  );
}
