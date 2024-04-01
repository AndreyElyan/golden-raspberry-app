import React, { useCallback } from "react";
import { FlatList } from "@/components/flat-list";
import Card from "@/components/ui/card";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import { useMovieStore } from "@/store/zustand";
import { MostSuccessfulStudios } from "@/types/Movies";
import { getMostSuccessfulStudios } from "@/app/api/getMostSuccessfulStudios";

export default function MostSuccessfulStudios() {
  const {
    addManyStudiosWithMostVictories,
    studiosWithMostVictories,
    setLoading,
  } = useMovieStore();

  const fetchStudiosWithMostVictories = useCallback(async () => {
    setLoading(true);
    const data: MostSuccessfulStudios[] = await getMostSuccessfulStudios();

    addManyStudiosWithMostVictories(data);

    setLoading(false);
  }, [addManyStudiosWithMostVictories, setLoading]);

  React.useEffect(() => {
    if (studiosWithMostVictories.length <= 0) fetchStudiosWithMostVictories();
  }, [
    fetchStudiosWithMostVictories,
    studiosWithMostVictories.length,
    studiosWithMostVictories,
  ]);

  console.log(studiosWithMostVictories);
  return (
    <div>
      <Title
        className="text-xl"
        title="The studios that won the most Golden Raspberries
"
      />

      <FlatList
        items={studiosWithMostVictories.slice(0, 5)}
        RenderItem={({ data }) => {
          return (
            <Card className="flex flex-row w-full justify-between mt-4">
              <Title title={data.studio} />
              <div className="flex flex-row">
                <Text
                  className="text-white"
                  text="Studio with"
                />
                <p className="text-gray-300 mr-2 ml-2">|</p>
                <Text
                  className="text-green-500 ml-2"
                  text={`${data.numberOfVictories} victories`}
                />
              </div>
            </Card>
          );
        }}
      />
    </div>
  );
}
