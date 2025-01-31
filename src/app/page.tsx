"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CharacterCard from "@/components/CharacterCard";
import CharacterChart from "@/components/CharacterChart";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fetchCharacters = async (name: string, status: string, species: string) => {
  let url = `https://rickandmortyapi.com/api/character?name=${name}`;
  if (status) url += `&status=${status}`;
  if (species) url += `&species=${species}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener personajes");
  return res.json();
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");

  const { data, error, isLoading } = useQuery({
    queryKey: ["characters", search, status, species],
    queryFn: () => fetchCharacters(search, status, species),
  });

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Personajes de Rick and Morty</h1>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-5">
        <Input
          placeholder="Buscar por nombre..."
          className="w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select onValueChange={(value) => setStatus(value === "all" ? "" : value)}>
          <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="alive">Vivo</SelectItem>
            <SelectItem value="dead">Muerto</SelectItem>
            <SelectItem value="unknown">Desconocido</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setSpecies(value === "all" ? "" : value)}>
          <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Especie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="human">Humano</SelectItem>
            <SelectItem value="alien">Alien</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Mostrar personajes */}
      {isLoading && <p className="text-center">Cargando...</p>}
      {error && <p className="text-center text-red-500">Error al cargar los personajes.</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.results?.length > 0 ? (
          data.results.map((char: any) => <CharacterCard key={char.id} character={char} />)
        ) : (
          <p className="text-center col-span-4">No se encontraron personajes.</p>
        )}
      </div>

      {/* Gráfico */}
      {data?.results?.length > 0 && <CharacterChart data={data.results} />}
    </main>
  );
}
