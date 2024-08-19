"use client"

import React, { memo } from "react";
import Image from "next/image";
import { tv } from 'tailwind-variants';

import { Pokemon } from "../types"
import { CandyIcon, EggIcon, HistoryIcon, MoveVerticalIcon, SparklesIcon, WeightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  data: Pokemon;
}

export const bgTypes = {
  "Normal": "bg-type-normal",
  "Fire": "bg-type-fire",
  "Fighting": "bg-type-fighting",
  "Water": "bg-type-water",
  "Flying": "bg-type-flying",
  "Grass": "bg-type-grass",
  "Poison": "bg-type-poison",
  "Electric": "bg-type-electric",
  "Ground": "bg-type-ground",
  "Psychic": "bg-type-psychic",
  "Rock": "bg-type-rock",
  "Ice": "bg-type-ice",
  "Bug": "bg-type-bug",
  "Dragon": "bg-type-dragon",
  "Ghost": "bg-type-ghost",
  "Dark": "bg-type-dark",
  "Steel": "bg-type-steel",
  "Fairy": "bg-type-fairy"
}

function BaseCard({ data, ...rest }: Props) {
  const typeVariants = tv({
    base: 'px-4 py-1 rounded-md text-sm bg-white-15 duration-200 hover:-translate-y-1',
    variants: {
      type: bgTypes
    }
  });

  return (
    <Link
      href={`/pokemon/${data.id}`}
      className="flex flex-col w-full group bg-gradient-to-b from-lightBlack to-white/5 rounded-lg duration-200 border-2 border-lightBlack animate-pop-in-up hover:border-white/10 hover:scale-[1.02]"
      {...rest}
    >
      <Image
        src={data.img}
        alt={data.name}
        width={320}
        height={320}
        className="w-full aspect-square object-cover rounded-lg"
      />
      <div className="flex flex-col p-4 pt-3">
        <small className="text-white/75">#{data.num}</small>
        <h2 className="title-gradient text-2xl line-clamp-2">{data.name}</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.type.map(type =>
            <span
              key={type}
              className={typeVariants({ type })}
            >
              {type}
            </span>
          )}
        </div>
        <div className="h-0 duration-200 text-sm text-white/75 font-medium group-hover:h-auto w-full mt-4 grid grid-cols-3 overflow-hidden gap-1 gap-y-2">
          <div title="Altura" className="flex items-center gap-1">
            <MoveVerticalIcon size={16} />
            {data.height}
          </div>
          <div title="Peso" className="flex items-center gap-1">
            <WeightIcon size={16} />
            {data.weight}
          </div>
          <div title="Total de Doces" className="flex items-center gap-1">
            <CandyIcon size={16} />
            {data.candy_count}
          </div>
          <div title="Ovo (Distância)" className="flex items-center gap-1">
            <EggIcon size={16} />
            {data.egg === "Not in Eggs" ? "---" : data.egg}
          </div>
          <div title="Chance de aparição" className="flex items-center gap-1">
            <SparklesIcon size={16} />
            {data.spawn_chance}
          </div>
          <div title="Tempo de aparição" className="flex items-center gap-1">
            <HistoryIcon size={16} />
            {data.spawn_time}
          </div>
        </div>
      </div>
    </Link>
  )
}

export const Card = memo(BaseCard)