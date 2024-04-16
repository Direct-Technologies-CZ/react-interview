"use client";

import { FC, useState, useEffect } from "react";

const PokemonProfile: FC<{ url: string }> = ({ url }) => {
  const [name, setName] = useState<PokemonProfile["name"]>("");
  const [base_experience, setExperience] = useState<PokemonProfile["base_experience"]>("");

  const getPokemon = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data from API for pokemon profile ${url}`);
      }

      const data: Pick<PokemonProfile, "name" | "base_experience"> = await response.json();

      const { base_experience, name } = data;

      setName(name);
      setExperience(base_experience);
    } catch (error) {
      throw new Error("Failed to fetch data from API for pokemon");
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="border border-spacing-1 p-4">
      <h1>Pokemon: {name}</h1>
      <p>Base experience: {base_experience}</p>
      <a href={url} target="_blank" className="text-underline hover:no-underline">
        Link to pokemon.
      </a>
    </div>
  );
};

export default PokemonProfile;
