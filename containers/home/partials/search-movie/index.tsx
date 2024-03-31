import { Input } from "@/components/ui/input";
import Title from "@/components/ui/title";
import YearList from "@/components/ui/year-list";
import { years } from "@/utils/years";

export default function SearchMovie() {
  return (
    <>
      <Input
        className="mt-6"
        type="search"
        placeholder="Pesquise por um nome"
      />
      <Title
        title=" Encontre Os Piores Filmes"
        className="text-2xl pt-6 text-white font-semibold"
      />
      <YearList years={years} />

      <h1 className="text-lg pt-6 text-white">Pesquisado por: 2019</h1>
    </>
  );
}
