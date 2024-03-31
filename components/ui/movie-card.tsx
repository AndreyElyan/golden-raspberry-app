import trophy from "@/public/trophy.svg";
import winnerTrophy from "@/public/winnerTrophy.svg";
import Image from "next/image";

interface MovieCardProps {
  title: string;
  studio: string;
  producers: string;
  winner: boolean;
  year?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  studio,
  producers,
  winner,
  year,
}) => {
  return (
    <div
      className="
      bg-movieCard
      border
      border-x-green-500
      border-y-blue-600
      border-
      rounded-md
      shadow-md
      p-4
      mt-5
      flex
      flex-col
      justify-between
      h-full
    "
    >
      <div>
        <h3 className="text-lg text-white font-semibold">{title}</h3>
        <p className="text-sm text-gray-200 mt-1">{`Estúdio: ${studio}`}</p>
        <p className="text-sm text-gray-200 mt-1">{`Produtores: ${producers}`}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div
          className={`text-sm font-semibold flex-row flex ${
            winner ? "text-green-500" : "text-teal-600"
          }`}
        >
          <Image
            src={winner ? winnerTrophy : trophy}
            alt="Trophy"
            width={20}
            height={20}
          />
          <span className="ml-2">
            {winner
              ? `Vencedor do Pior Filme do Ano de ${year}`
              : `Indicado para Pior Filme do Ano de ${year}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
