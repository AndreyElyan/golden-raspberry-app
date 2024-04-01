import Image from "next/image";
import BannerImage from "@/public/banner-movies.svg";

export const BannerMovies = () => {
  return (
    <div className="rounded-xl overflow-hidden">
      <Image
        src={BannerImage}
        className="w-full"
        alt="Banner with movies"
        priority
      />
    </div>
  );
};
