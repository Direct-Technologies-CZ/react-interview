import { FC } from "react";
import PokemonProfile from "@/components/PokemonProfile";

const HomePage: FC = async () => {
  const api = process.env.NEXT_PUBLIC_API_URL ?? "";
  let data: { count: number; results: Pick<PokemonProfile, "url">[] | null } = { count: 0, results: null };

  if (api === "") {
    throw new Error("API URL is not provided");
  }

  try {
    const response = await fetch(`${api}/pokemon?limit=10`);

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    data = await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data from API");
  }

  if (data === null || !data.results) {
    return (
      <section className="flex flex-1 flex-col items-center h-screen justify-center">
        <div className="size-[500px] bg-red-700 text-center flex flex-col justify-center font-bold rounded-xl">
          We are really sorry. We not found pokemons. Could you try to correct the mistakes?
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-1 flex-col items-center">
      <h1 className="my-10">React Pokemons</h1>
      <div className="flex flex-row justify-center flex-wrap gap-10 p-10 rounded-xl bg-slate-400">
        {data.results?.map((pokemon) => <PokemonProfile url={pokemon?.url} />)}
      </div>
    </section>
  );
};

export default HomePage;
