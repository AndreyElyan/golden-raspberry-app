"use client";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MovieCard from "@/components/ui/movie-card";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import { years } from "@/utils/years";
import React from "react";
import TheySharedGoldenRaspberry from "./partials/theySharedGoldenRaspberry";

const Winners = () => {
  const [selectedYear, setSelectedYear] = React.useState("");
  return (
    <div>
      <TheySharedGoldenRaspberry />
      <Title
        className="text-xl"
        title="Os Estúdios Que Mais Ganham o Framboesa de Ouro"
      />
      <Card className="flex flex-row w-full justify-between">
        <Title title="Columbia Pictures" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Estúdio com"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="6 indicações"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Paramount Pictures" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Estúdio com"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="6 indicações"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Warner Bros" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Estúdio com"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="6 indicações"
          />
        </div>
      </Card>

      <Title
        className="text-xl mt-4"
        title="Fatos Curiosos dos Produtores"
      />
      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Matthew Vaughn" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Foi o produtor com o maior intervalo de"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="2002 até 2015"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Joel Silver" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Foi o produtor com o menor intervalo de"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="1990 até 1991"
          />
        </div>
      </Card>

      <Input
        className="mt-6"
        type="search"
        placeholder="Search by movie name"
      />
      <Title
        title="Find The Worst Movies"
        className="text-2xl pt-6 text-white font-semibold"
      />
      <YearList
        years={years}
        onYearClick={setSelectedYear}
      />

      <h1 className="text-lg pt-6 text-white">Search by: 2019</h1>

      <MovieCard
        title="Cats"
        studio="Universal Pictures"
        producers="Debra Hayward, Tim Bevan, Eric Fellner, Tom Hooper"
        winner
        year="2019"
      />
    </div>
  );
};

export default Winners;
