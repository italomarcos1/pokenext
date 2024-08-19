import { useCallback, useMemo } from "react";
import { Type } from "~/types";
import { bgTypes } from "./Card";

type Props = {
  selectedCategories: Type[];
  setSelectedCategories: (value: Type[]) => void;
}

export function Categories({ selectedCategories, setSelectedCategories }: Props) {
  const categories = useMemo<Type[]>(() => [
    "Normal",
    "Fire",
    "Fighting",
    "Water",
    "Flying",
    "Grass",
    "Poison",
    "Electric",
    "Ground",
    "Psychic",
    "Rock",
    "Ice",
    "Bug",
    "Dragon",
    "Ghost"
  ], [])

  const handleSetCategories = useCallback((value: Type) => 
    setSelectedCategories(
      selectedCategories.includes(value) ?
        selectedCategories.filter(c => c !== value) :
        [...selectedCategories, value]
    )
  , [selectedCategories, setSelectedCategories])

  return (
    <div className="z-60 relative bg-lightBlack backdrop-blur-sm w-72 max-md:w-full flex flex-col h-12 rounded-md border border-white/10 py-2 p-3 justify-center text-white group">
      <div className="flex overflow-y-hidden overflow-x-auto gap-2 pb-1">
        {!!selectedCategories.length ? selectedCategories.map(c =>
          <div
            key={c}
            className={`flex items-center gap-1 px-3 py-1 font-medium text-sm rounded-full ${bgTypes[c as Type]}`}
          >
            <div className={`w-3 h-3 rounded-full bg-white/10 backdrop-blur-sm border border-lightBlack/50`} />
            {c}
          </div>
        ) : "Todas as categorias"}
      </div>
      <div className="z-60 backdrop-blur-md h-0 absolute flex flex-wrap bg-lightBlack group-hover:p-2 group-hoverpb-3 border-white/5 gap-2 gap-y-3 w-full transform left-1/2 -translate-x-1/2 top-12 duration-200 group-hover:h-auto overflow-hidden">
        {categories.map(c => 
          <button
            key={c}
            onClick={() => handleSetCategories(c)}
            className={`flex items-center gap-1 px-3 py-1 font-medium text-sm rounded-full ${selectedCategories.includes(c as Type) ? bgTypes[c as Type] : "bg-white/5"} duration-200`}
          >
            <div className={`w-3 h-3 rounded-full bg-type-${c.toLowerCase()} backdrop-blur-sm border border-lightBlack/50`} />
            {c}
          </button>
        )}
      </div>
    </div>
  )
}