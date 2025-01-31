"use client";
import { useQuery } from "@tanstack/react-query";

const fetchCharacter = async (id: string) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error("No se pudo cargar el personaje");
  return res.json();
};

export default function CharacterDetails({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["character", params.id],
    queryFn: () => fetchCharacter(params.id),
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el personaje.</p>;

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <img src={data.image} alt={data.name} className="rounded-lg my-5" />
      <p>Especie: {data.species}</p>
      <p>Género: {data.gender}</p>
      <p>Estado: {data.status}</p>
    </div>
  );
}
