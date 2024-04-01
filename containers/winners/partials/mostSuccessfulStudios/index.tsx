import React, { useCallback } from "react";
import { FlatList } from "@/components/flat-list";
import Card from "@/components/ui/card";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import { useMovieStore } from "@/store/zustand";
import type { MostSuccessfulStudios } from "@/types/Movies";
import { getMostSuccessfulStudios } from "@/app/api/getMostSuccessfulStudios";
import { studiosImages } from "./constants";
import Image from "next/image";

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

  const images = studiosImages;

  return (
    <div>
      <Title
        className="text-xl mt-6"
        title="The studios that won the most Golden Raspberries
"
      />

      <FlatList
        items={studiosWithMostVictories.slice(0, 3)}
        RenderItem={({ data }) => {
          return (
            <Card className="flex flex-row w-full items-center justify-between mt-4">
              <Image
                src={images[data.studio]}
                alt={data.studio}
                width={50}
                height={50}
              />
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
