import Card from "@/components/ui/card";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";

export default function Curiosities() {
  return (
    <div>
      <Title
        className="text-xl mt-4"
        title="Curious facts about the producers of the worst movies of the year"
      />
      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Matthew Vaughn" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Foi o produtor com o maior intervalo de"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="2002 até 2015"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Joel Silver" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Foi o produtor com o menor intervalo de"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="1990 até 1991"
          />
        </div>
      </Card>
    </div>
  );
}
