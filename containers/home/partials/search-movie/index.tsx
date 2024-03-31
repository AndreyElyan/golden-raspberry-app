import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import { years } from "@/utils/years";
import { StyledInput, WrapperInput } from "./styles";
import { getMovies, getMoviesBySearch } from "@/app/api";
import { useDebounce } from "use-debounce";
import { useMovieStore } from "@/store/zustand";

export default function SearchMovie() {
  const { addManyMovies, movies, setLoading } = useMovieStore();
  const [search, setSearch] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");
  const [query] = useDebounce(search, 750);

  const searchRef = useRef("");

  React.useEffect(() => {
    if (query) {
      searchRef.current = query;
      setLoading(true);
      getMoviesBySearch(query).then((data) => {
        addManyMovies(data);
      });

      return () => {
        setLoading(false);
      };
    }
  }, [query, addManyMovies, setLoading]);

  const handleYearClick = async (year: string) => {
    setSelectedYear(year);
    const movies = await getMovies({ year });
    addManyMovies(movies);
  };

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

      <YearList
        onYearClick={handleYearClick}
        selectedYear={selectedYear}
        years={years}
      />

      {selectedYear && movies.length > 0 && (
        <Title
          title={`Pesquisado por: ${selectedYear}`}
          className="text-xl mt-6 text-white font-semibold"
        />
      )}
    </div>
  );
}
