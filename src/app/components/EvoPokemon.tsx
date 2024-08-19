import Link from "next/link";
import Image from "next/image";

import { tv } from "tailwind-variants";

import { Pokemon, Type } from "~/types"
import { bgTypes } from "./Card";

type Props = {
  data: Pokemon;
}

export function EvoPokemon({ data, ...rest }: Props) {
  const evolutionTypeVariants = tv({
    base: 'w-3 h-3 rounded-full bg-white-15 border-2 border-white/25',
    variants: {
      type: bgTypes
    }
  });

  return (
    <Link
      title={data.name}
      href={`/pokemon/${data.id}`}
      className="relative flex flex-col w-24 h-24 group bg-gradient-to-b from-lightBlack to-white/5 rounded-lg duration-200 border-2 border-white/5 border-t-0 animate-pop-in-up hover:border-white/15 hover:scale-[1.02]"
      {...rest}
    >
      <Image
        src={data.img}
        alt={data.name}
        width={96}
        height={96}
        className="w-full aspect-square object-cover rounded-lg"
      />
      <div className="flex gap-1 absolute top-2 right-2">
        {data.type.map((t: Type) =>
          <span
            key={t}
            title={t}
            className={evolutionTypeVariants({ type: t })}
          />
        )}
      </div>
    </Link>
  )
}