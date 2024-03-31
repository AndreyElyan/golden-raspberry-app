import React from "react";
import styled from "styled-components";
import { Input as InputComponent } from "@/components/ui/input";
import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import { years } from "@/utils/years";
import { Container, StyledInput } from "./styles";

export default function SearchMovie() {
  return (
    <div className="flex flex-col w-full">
      <Container>
        <StyledInput
          type="search"
          placeholder="Pesquise por um nome"
        />
      </Container>

      <Title
        title=" Encontre Os Piores Filmes"
        className="text-2xl mt-6 text-white font-semibold"
      />
      <YearList years={years} />

      <Title
        title="Pesquisado por: 2019"
        className="text-xl mt-6 text-white font-semibold"
      />
    </div>
  );
}
