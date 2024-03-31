import Card from "@/components/ui/card";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";

export default function MostSuccessfulStudios() {
  return (
    <div>
      <Title
        className="text-xl"
        title="Os Estúdios Que Mais Ganham o Framboesa de Ouro"
      />
      <Card className="flex flex-row w-full justify-between">
        <Title title="Columbia Pictures" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Estúdio com"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="6 indicações"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Paramount Pictures" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Estúdio com"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="6 indicações"
          />
        </div>
      </Card>

      <Card className="flex flex-row w-full justify-between mt-4">
        <Title title="Warner Bros" />
        <div className="flex flex-row">
          <Text
            className="text-white"
            text="Estúdio com"
          />
          <p className="text-gray-300 mr-2 ml-2">|</p>
          <Text
            className="text-green-500 ml-2"
            text="6 indicações"
          />
        </div>
      </Card>
    </div>
  );
}
