import Card from "@/components/ui/card";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import Image from "next/image";
import { JoelSilverImage, MatthewVaughnImage } from "./constants";

export default function Curiosities() {
  return (
    <div>
      <Title
        className="text-xl mt-4"
        title="Curious facts about the producers of the worst movies of the year"
      />
      <Card className="flex flex-row w-full items-center justify-between mt-4">
        <Image
          src={MatthewVaughnImage}
          alt="Matthew Vaughn"
          width={50}
          height={50}
          className="rounded-md"
        />
        <Title title="Matthew Vaughn" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="He was the producer with the longest"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="2002 to 2015"
          />
        </div>
      </Card>
      <Card className="flex flex-row justify-between w-full items-center mt-4">
        <Image
          src={JoelSilverImage}
          alt="Joel Silver"
          width={50}
          height={50}
          className="rounded-md"
        />
        <Title title="Joel Silver" />
        <div className="flex flex-row">
          <Text
            className="text-white ml-4"
            text="He was the producer with the shortest"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="1990 to 1991"
          />
        </div>
      </Card>
    </div>
  );
}
