import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MovieCard from "@/components/ui/movie-card";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import React from "react";

const WinnersPage = () => {
  return (
    <div>
      <Title
        className="text-xl"
        title="Compartilharam o Framboesa de Ouro de Pior Filme do Ano"
      />
      <MovieCard
        title="Fantastic Four"
        studio="20th Century Fox"
        producers="Simon Kinberg, Matthew Vaughn, Hutch Parker, Robert Kulzar"
        winner
        year="2015"
      />
      <MovieCard
        title="Fifty Shades of Grey"
        studio="Focus Features"
        producers="Michael De Luca, E. L. James, Dana Brunetti"
        winner
        year="2015"
      />

      <Title
        className="text-xl"
        title="Os Estúdios Que Mais Ganham o Framboesa de Ouro"
      />

      <Card className="flex flex-row w-full justify-between">
        <Title title="Columbia Pictures" />
        <div className="flex flex-row">
          <Text text="Estúdio com" />
          <span className="text-gray-600 mr-2 ml-2">|</span>
          <Text
            className="text-green-700"
            text="7 indicações"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Paramount Pictures" />
        <div className="flex flex-row">
          <Text text="Estúdio com" />
          <span className="text-gray-600 mr-2 ml-2">|</span>
          <Text
            className="text-green-700"
            text="7 indicações"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Warner Bros" />
        <div className="flex flex-row">
          <Text text="Estúdio com" />
          <span className="text-gray-600 mr-2 ml-2">|</span>
          <Text
            className="text-green-700"
            text="7 indicações"
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
          <Text text="Foi o produtor com o maior intervalo de" />
          <span className="text-gray-600 mr-2 ml-2">|</span>
          <Text
            className="text-green-700"
            text="2002 até 2015"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Joel Silver" />
        <div className="flex flex-row">
          <Text text="Foi o produtor com o menor intervalo de" />
          <span className="text-gray-600 mr-2 ml-2">|</span>
          <Text
            className="text-green-700"
            text="1990 até 1991"
          />
        </div>
      </Card>

      <Input
        className="mt-6"
        type="search"
        placeholder="Pesquise por um nome"
      />
      <Title
        title=" Encontre Os Piores Filmes"
        className="text-2xl pt-6 text-white font-semibold"
      />
      <YearList />

      <h1 className="text-lg pt-6 text-white">Pesquisado por: 2019</h1>

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

export default WinnersPage;
