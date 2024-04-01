"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "./ui/button";
import medal from "@/public/medal.svg";
import movies from "@/public/movies.svg";
import actress from "@/public/actress.svg";
import actor from "@/public/actor.svg";

export default function NavigationMenu() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleClick = (path: string) => {
    router.push(path);
  };

  const buttonColor = (path: string) =>
    currentPath === path
      ? "bg-green-700 hover:bg-green-800"
      : "bg-secondary hover:bg-gray-700";

  return (
    <header className="grid grid-cols-1 gap-4 px-8 py-6 mb-8 bg-primary text-white leading-10 justify-items-center text-center sm:grid-cols-4 sm:px-4 sm:py-2">
      <Button
        size="lg"
        onClick={() => handleClick("/")}
        className={`rounded-xl w-full ${buttonColor(
          "/",
        )} flex items-center justify-center transition-colors duration-200`}
      >
        <Image
          src={movies}
          alt="Icon of a film reel representing the home page"
          width={24}
          height={24}
          className="mr-2"
        />
        Home
      </Button>
      <Button
        size="lg"
        onClick={() => handleClick("/winners")}
        className={`rounded-xl w-full ${buttonColor(
          "/winners",
        )} flex items-center justify-center transition-colors duration-200`}
      >
        <Image
          src={medal}
          alt="Icon of a medal representing the winners page"
          width={24}
          height={24}
          className="mr-2"
        />
        Winners
      </Button>
      <Button
        size="lg"
        onClick={() => handleClick("/actors")}
        className={`rounded-xl w-full ${buttonColor(
          "/actors",
        )} flex items-center justify-center transition-colors duration-200`}
      >
        <Image
          src={actor}
          alt="Icon of a male actor representing the actors page"
          width={24}
          height={24}
          className="mr-2"
        />
        Actors
      </Button>
      <Button
        size="lg"
        onClick={() => handleClick("/actresses")}
        className={`rounded-xl w-full ${buttonColor(
          "/actresses",
        )} flex items-center justify-center transition-colors duration-200`}
      >
        <Image
          src={actress}
          alt="Icon of a female actor representing the actresses page"
          width={24}
          height={24}
          className="mr-2"
        />
        Actresses
      </Button>
    </header>
  );
}
