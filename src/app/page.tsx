"use client"

import Image from "next/image";

import data from "./pokedex.json"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Pokenext</h1>
      <section className="grid w-full max-w-desktop h-full px-5 grid-cols-4 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {data.pokemon.map((p) =>
          <div
            key={p.id}
            className="flex flex-col w-full bg-gradient-to-b from-lightBlack to-white/5 backdrop-blur-md rounded-md duration-200 border border-lightBlack animate-pop-in-up hover:border-white/10 hover:scale-[1.02]"
          >
            <Image
              src={p.img}
              alt={p.name}
              width={100}
              height={100}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <div className="flex flex-col p-4 pt-3">
              <small>#{p.num}</small>
              <h2 className="text-xl line-clamp-2">{p.name}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.type.map(t =>
                  <span key={t} className="px-4 py-1 rounded-md text-sm bg-red-500 duration-200 hover:-translate-y-1">
                    {t}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
