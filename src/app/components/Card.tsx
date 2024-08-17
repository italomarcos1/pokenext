"use client"

import React from "react";
import Image from "next/image";

import { Pokemon } from "../types"

type Props = {
  data: Pokemon;
}

export function Card({ data, ...rest }: Props) {
  return (
    <div
      className="flex flex-col w-full bg-gradient-to-b from-lightBlack to-white/5 backdrop-blur-md rounded-md duration-200 border border-lightBlack animate-pop-in-up hover:border-white/10 hover:scale-[1.02]"
      {...rest}
    >
      <Image
        src={data.img}
        alt={data.name}
        width={100}
        height={100}
        className="w-full aspect-square object-cover rounded-lg"
      />
      <div className="flex flex-col p-4 pt-3">
        <small>#{data.num}</small>
        <h2 className="text-xl line-clamp-2">{data.name}</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.type.map(t =>
            <span key={t} className="px-4 py-1 rounded-md text-sm bg-red-500 duration-200 hover:-translate-y-1">
              {t}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}