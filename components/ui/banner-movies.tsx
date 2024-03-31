import Image from "next/image";
import BannerImage from "@/public/banner-movies.svg";

export const BannerMovies = () => {
  return (
    <Image
      src={BannerImage}
      className="rounded-3xl shadow-xl"
      alt="Banner with movies"
      priority
      width={700}
    />
  );
};
