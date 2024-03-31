"use client";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationMenu() {
  const currentPath = usePathname();

  const WINNERS_PATH = "/winners";
  const MOVIES_PATH = "/";

  return (
    <header
      className="
      flex
      flex-col
      px-8
      py-6
      bg-gray-800
      text-white
      leading-10
    "
    >
      <h1 className="text-3xl font-semibold">Golden Raspberry Awards</h1>
      <nav className="flex pt-8">
        <Button
          size="lg"
          onClick={() => console.log("searchParams")}
          className="mr-4 rounded-xl w-60 "
        >
          Movies
        </Button>
        <Button
          size="lg"
          onClick={() => console.log("searchParams")}
          className="mr-4 rounded-xl w-60 h-12"
        >
          Winners
        </Button>
      </nav>
    </header>
  );
}
