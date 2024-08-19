import { ArrowDownAZIcon, ListFilterIcon, SparklesIcon, StarIcon } from "lucide-react";
import { Order } from "~/types";

type Props = {
  order: Order;
  setOrder: (value: Order) => void;
}

export function Filter({ order, setOrder }: Props) {
  return (
    <div className="z-50 relative bg-lightBlack backdrop-blur-sm w-64 max-md:w-full flex flex-col h-12 rounded-md border border-white/10 p-3 text-white group hover:rounded-b-none">
      <p className="w-full text-sm font-medium h-12 rounded-md flex items-center gap-2">
        <ListFilterIcon size={16} />
        {order}
      </p>
      <div className="h-0 flex w-full flex-col absolute transform left-1/2 -translate-x-1/2 top-12 duration-200 group-hover:h-auto overflow-hidden rounded-b-md bg-lightBlack">
        <button
          className="text-sm w-full flex items-center gap-2 py-2 px-3 duration-200 h-full hover:bg-white/5 border-x border-x-white/10"
          onClick={(e) => setOrder("Ordem Alfabética")}
        >
          <ArrowDownAZIcon size={14} /> Ordem Alfabética
        </button>
        <button
          className="text-sm w-full flex items-center gap-2 py-2 px-3 duration-200 h-full hover:bg-white/5 border-x border-x-white/10"
          onClick={() => setOrder("Mais raro")}
        >
          <SparklesIcon size={14} /> Mais raro
        </button>
        <button
          className="text-sm w-full flex items-center gap-2 py-2 px-3 duration-200 h-full hover:bg-white/5 border border-white/10 border-t-0 rounded-b-md"
          onClick={() => setOrder("Mais comum")}
        >
          <StarIcon size={14} /> Mais comum
        </button>
      </div>
    </div>
  )
}