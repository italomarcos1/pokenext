"use client"

import Image from "next/image"
import { redirect, useParams } from "next/navigation"
import { useMemo } from "react"
import { tv } from "tailwind-variants"
import { bgTypes } from "~/components/Card"
import { EvoPokemon } from "~/components/EvoPokemon"

import data from "~/pokedex_updated.json"
import { Pokemon, Type } from "~/types"

export default function PokemonDetails() {
  const { id } = useParams()
  
  const typeVariants = tv({
    base: 'px-4 py-1 rounded-md text-sm bg-white-15',
    variants: {
      type: bgTypes
    }
  });

  const attributeNames = useMemo(() => ({
    "height": "Altura",
    "weight": "Peso",
    "candy": "Doce",
    "candy_count": "Total de Doces",
    "egg": "Ovo (Distância)",
    "spawn_chance": "Chance de aparição",
    "avg_spawns": "Média de aparições",
    "spawn_time": "Tempo de aparição",
    "multipliers": "Multiplicadores",
    "weaknesses": "Fraquezas"
  }), [])
  
  const {
    img,
    name,
    num,
    description,
    type,
    attributes,
    previousEvolutions,
    nextEvolutions
  } = useMemo(() => {
    if (!id) redirect("/")
    
    const currentPokemon = data.pokemon.find(p => p.id === +id);
    if (!currentPokemon) {
      redirect("/")
      //TODO: modal - ao clicar retorna
    }
    
    const {
      id: pokemonId,
      img,
      name,
      description,
      num,
      type,
      prev_evolution,
      next_evolution,
      ...attributes
    } = currentPokemon

    let previousEvolutions: Pokemon[] = []
    let nextEvolutions: Pokemon[] = []

    if (prev_evolution) {
      previousEvolutions = prev_evolution.map((pokemon) => {
        const currentPokemon = data.pokemon.find(d => d.num === pokemon.num);

        if (!currentPokemon) return null;

        const { id, name, img, type } = currentPokemon;
        
        return { id, name, img, type }
      }, []).filter(p => !!p) as Pokemon[]
    }

    if (next_evolution) {
      nextEvolutions = next_evolution.map((pokemon) => {
        const currentPokemon = data.pokemon.find(d => d.num === pokemon.num);

        if (!currentPokemon) return null;

        const { id, name, img, type } = currentPokemon;

        return { id, name, img, type }
      }, []).filter(p => !!p) as Pokemon[]
    }

    const fieldsToRemove = ["prevEvolutions", "nextEvolutions", "fullDescription"]

    return {
      img,
      name,
      description,
      num,
      type,
      attributes: Object.entries(attributes).map(a => Array.isArray(a[1]) && a[0] === "multipliers" ? [a[0], a[1].join(", ")] : a).filter(r => !fieldsToRemove.includes(r[0])),
      previousEvolutions,
      nextEvolutions
    }
  }, [id])

  return (
    <main className="min-h-screen w-full max-w-desktop mx-auto px-5 mt-[5%] gap-12 flex pb-20 max-lg:flex-col">
      <Image
        src={img}
        alt={name}
        width={320}
        height={320}
        className="w-full max-w-[30rem] self-start max-lg:self-center aspect-square object-cover rounded-3xl border border-white/10 lg:min-w-[30rem] animate-pop-in-up"
      />
      <div className="flex flex-col max-md:gap-1 gap-2 animate-stagger-slide-in">
        <small className="max-md:text-md text-xl text-white/50 font-light">#{num}</small>
        <h1 className="text-5xl leading-snug title-gradient max-md:text-4xl">{name}</h1>
        <p className="font-light text-white/75 max-md:text-base max-md:leading-6 text-[1.125rem] leading-7">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {type.map((t) =>
            <span
              key={t}
              className={typeVariants({ type: t as Type })}
            >
              {t}
            </span>
          )}
        </div>
        <h3 className="text-xl mt-8">Formas anteriores</h3>
        {!!previousEvolutions.length ? 
          <div className="flex gap-4">
            {previousEvolutions.map(p =>
              <EvoPokemon key={p.id} data={p} />
            )} 
          </div> :
          <p className="text-sm text-white/75 font-light">Esse Pokemón não tem formas anteriores</p>
        }
        <h3 className="text-xl mt-2">Próximas evoluções</h3>
        {!!nextEvolutions.length ?
          <div className="flex gap-4">
            {nextEvolutions.map(p =>
              <EvoPokemon key={p.id} data={p} />
            )}
          </div> :
          <p className="text-sm text-white/75 font-light">Esse Pokemón não tem evoluções</p>
        }
        <h3 className="text-xl mt-2">Atributos</h3>
        <div>
          {attributes.map(([key, value]) => 
            <div key={key} className="py-5 px-3 border border-white/10 first:rounded-t-md last:rounded-b-md odd:bg-white/10">
              <span className="inline-block w-1/2 font-bold">{attributeNames[key as keyof typeof attributeNames]}</span>
              {key === "weaknesses" ? 
                value.map((t: string) =>
                  <span
                    key={t}
                    className={typeVariants({ type: t as Type })}
                    style={{ marginRight: '0.5rem' }}
                  >
                    {t}
                  </span>
                )
              : value}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}