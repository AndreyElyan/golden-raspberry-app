import Image from "next/image";
import BannerImage from "@/public/banner.svg";

export const BannerMovies = () => {
  return (
    <div className="rounded-xl overflow-hidden">
      <Image
        src={BannerImage}
        className="w-full"
        alt="Banner with movies"
        width={648}
        height={400}
        priority
      />
    </div>
  );
};
