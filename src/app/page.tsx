"use client"

import { useEffect, useMemo, useState } from "react";
import data from "./pokedex_updated.json"

import { Card } from "./components/Card"
import { Order, Pokemon, Type } from "./types";
import { SearchWithAI } from "./components/Search";
import { Filter } from "./components/Filter";
import { Categories } from "./components/Categories";
import { ListFilterIcon, SparklesIcon } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState<Order>("Ordem Alfabética");
  const [selectedCategories, setSelectedCategories] = useState<Type[]>([])
  const [searchResults, setSearchResults] = useState<number[]>([])
  const [searchMode, setSearchMode] = useState<"ai" | "filter">("filter")
  
  const pokemons = useMemo(() => {
    let filteredPokemons = !!searchResults.length ? 
      data.pokemon.filter(p => searchResults.includes(p.id)) :
      data.pokemon.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) || p.num.includes(search.toLowerCase())
      )
    
    if (!!selectedCategories.length) {
      filteredPokemons = filteredPokemons.filter(p => 
        p.type.some(t => selectedCategories.includes(t as Type))
      )
    }

    return filteredPokemons;
  }, [search, searchResults, selectedCategories])


  const orderedPokemons = useMemo(() => {
    switch (order) {
      case "Mais raro":
        return [...pokemons].sort((a, b) => a.spawn_chance > b.spawn_chance ? 1 : (a.spawn_chance === b.spawn_chance ? 0 : -1))
      case "Mais comum":
        return [...pokemons].sort((a, b) => b.spawn_chance > a.spawn_chance ? 1 : (a.spawn_chance === b.spawn_chance ? 0 : -1))
      default:
        return pokemons;
    }
  }, [order, pokemons])

  useEffect(() => {
    setOrder("Ordem Alfabética")
    setSearch("")
    setSearchResults([])
    setSelectedCategories([])
  }, [searchMode])

  return (
    <main className="flex min-h-screen flex-col items-center gap-5">
      <div className="w-full max-w-desktop flex pr-5">
        {searchMode === "ai" ?
          <>
            <SearchWithAI
              setSearchResults={setSearchResults}
            />
            <button
              onClick={() => setSearchMode("filter")}
              className="ml-2 px-2 rounded-md self-start py-3 flex items-center gap-1 text-sm font-medium bg-gradient-to-b from-white/10 to-transparent border border-white/10 "
            >
              <ListFilterIcon size={18} />
              Filtro
            </button>
          </> : 
          <>
            <div className="flex gap-2 px-5 max-md:flex-col w-full justify-center max-w-desktop">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none w-full h-12 rounded-md border border-white/10 text-[0.9375rem] px-3 text-white placeholder:text-white/50"
                placeholder="Filtrar Pokemon (nome ou número)"
              />
              <Categories
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
              <Filter
                order={order}
                setOrder={setOrder}
              />
            </div>
            <button
              onClick={() => setSearchMode("ai")}
              className="px-2 rounded-md self-start py-3 flex items-center gap-1 text-sm font-medium bg-gradient-to-b from-white/10 to-transparent border border-white/10 "
            >
              <SparklesIcon size={18} />
              AI
            </button>
          </>}
      </div>
      <section className="grid mt-4 w-full max-w-desktop h-full px-5 grid-cols-4 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {orderedPokemons.map((p) =>
          <Card key={p.id} data={p as Pokemon} />
        )}
      </section>
    </main>
  );
}
