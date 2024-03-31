import React, { useRef } from "react";
import styled from "styled-components";

import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import { years } from "@/utils/years";
import { StyledInput, WrapperInput } from "./styles";
import { getMoviesBySearch } from "@/app/api";
import { useDebounce } from "use-debounce";
import { useMovieStore } from "@/store/zustand";

export default function SearchMovie() {
  const { loading, addManyMovies, movies } = useMovieStore();
  const [search, setSearch] = React.useState("");
  const [query] = useDebounce(search, 750);

  const searchRef = useRef("");

  React.useEffect(() => {
    if (query) {
      searchRef.current = query;
      getMoviesBySearch(query).then((data) => {
        addManyMovies(data);
      });
    }
  }, [query, addManyMovies]);

  return (
    <div className="flex flex-col w-full">
      <WrapperInput>
        <Title
          title=" Encontre Os Piores Filmes"
          className="text-lg text-white font-semibold"
        />
        <StyledInput
          type="search"
          placeholder="Pesquise por um nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </WrapperInput>

      <YearList years={years} />

      {movies && movies.length > 0 && (
        <Title
          title={`Pesquisado por: ${search}`}
          className="text-xl mt-6 text-white font-semibold"
        />
      )}
    </div>
  );
}
