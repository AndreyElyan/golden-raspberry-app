import MovieCard from "@/components/ui/movie-card";
import Title from "@/components/ui/title";
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
    </div>
  );
};

export default WinnersPage;
