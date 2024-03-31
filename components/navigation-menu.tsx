"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import goldenRaspberry from "@/public/golden-raspberry.svg";
export default function NavigationMenu() {
  const currentPath = usePathname();

  const WINNERS_PATH = "/winners";
  const MOVIES_PATH = "/";

  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  const buttonColor = (path: string) =>
    currentPath === path ? "bg-green-700" : "bg-secondary";

  return (
    <header
      className="
      flex
      flex-col
      px-8
      py-6
      bg-primary
      text-white
      leading-10
      justify-center
      text-center
    "
    >
      <div className="flex justify-center items-center">
        <Image
          src={goldenRaspberry}
          alt="Golden Raspberry Awards"
          width={90}
          priority
        />
        <h1 className="text-2xl font-semibold">Golden Raspberry Awards</h1>
      </div>
      <nav className="flex pt-8">
        <Button
          size="lg"
          onClick={() => handleClick(MOVIES_PATH)}
          className={`mr-4 rounded-xl w-60 ${buttonColor(MOVIES_PATH)}`}
        >
          Movies
        </Button>
        <Button
          size="lg"
          onClick={() => handleClick(WINNERS_PATH)}
          className={`mr-4 rounded-xl w-60 ${buttonColor(WINNERS_PATH)}`}
        >
          Winners
        </Button>
      </nav>
    </header>
  );
}
