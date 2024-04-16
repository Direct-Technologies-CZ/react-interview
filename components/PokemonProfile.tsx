"use client";

import { FC, useState } from "react";

const PokemonProfile: FC<{ url: string }> = ({ url }) => {
  const [name, setName] = useState<PokemonProfile["name"]>("");
  const [base_experience, setExperience] = useState<PokemonProfile["base_experience"]>("");

  const getPokemon = async () => {
    // Please, write fetch for pokemon by url
    // After that, set name and base_experience. Make sure to handle errors and correct work with typescripts.
  };

  return (
    <>
      {/* Please, write border for each pokemon in tailwind className */}
      <div className="p-4">
        <h1>Pokemon: {name}</h1>
        <p>Base experience: {base_experience}</p>
        {/* Please, setup href for open to new tab */}
        <a href={url} className="text-underline hover:no-underline">
          Link to pokemon.
        </a>
      </div>
    </>
  );
};

export default PokemonProfile;
