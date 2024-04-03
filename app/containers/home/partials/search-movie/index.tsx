import React, { useRef } from "react";

import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import { years } from "@/utils/years";
import { StyledInput, WrapperInput } from "./styles";
import { getMovies, getMoviesBySearch } from "@/app/api";
import { useDebounce } from "use-debounce";
import { useMovieStore } from "@/app/store/zustand";

interface SearchMovieProps {
  isJustWinners: boolean;
}

export default function SearchMovie({ isJustWinners }: SearchMovieProps) {
  const { addManyMovies, movies, setLoading, addManyWinnersMovies } =
    useMovieStore();
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
    const bodyToSearchMovies = {
      winner: {
        year,
        winner: true,
      },
      defaultSearch: {
        year,
        winner: false,
      },
    };

    const movies = await getMovies(
      bodyToSearchMovies[isJustWinners ? "winner" : "defaultSearch"],
    );

    if (isJustWinners) {
      return addManyWinnersMovies(movies);
    }

    addManyMovies(movies);
  };

  return (
    <div className="flex flex-col w-full">
      <WrapperInput>
        <Title
          title="Find The Worst Movies"
          className="text-lg text-white font-semibold"
        />
        {!isJustWinners && (
          <StyledInput
            type="search"
            placeholder="Search by movie name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search-movie"
          />
        )}
      </WrapperInput>

      <YearList
        onYearClick={handleYearClick}
        selectedYear={selectedYear}
        years={years}
      />

      {selectedYear && movies && (
        <Title
          title={`Search by: ${selectedYear}`}
          className="text-xl mt-6 text-white font-semibold"
        />
      )}
    </div>
  );
}
