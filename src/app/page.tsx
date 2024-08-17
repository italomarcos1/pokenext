"use client"

import Image from "next/image";

import data from "./pokedex.json"
import { Card } from "./components/Card"
import { Pokemon } from "./types";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Pokenext</h1>
      <section className="grid w-full max-w-desktop h-full px-5 grid-cols-4 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {data.pokemon.map((p) =>
          <Card key={p.id} data={p as Pokemon} />
        )}
      </section>
    </main>
  );
}
