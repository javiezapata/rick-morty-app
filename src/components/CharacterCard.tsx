import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function CharacterCard({ character }: { character: any }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all">
      <CardContent className="p-4 flex flex-col items-center">
        <img src={character.image} alt={character.name} className="rounded-lg w-32 h-32" />
        <h2 className="text-lg font-semibold mt-2">{character.name}</h2>
        <p className="text-sm text-gray-400">{character.species} - {character.status}</p>
      </CardContent>
      <CardFooter className="p-3 text-center">
        <Link href={`/character/${character.id}`} className="text-blue-400 hover:underline">
          Ver detalles
        </Link>
      </CardFooter>
    </Card>
  );
}
