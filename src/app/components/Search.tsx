"use client"

import { useCallback, useMemo, useRef, useState } from "react";
import { Loader2Icon, SearchIcon } from "lucide-react"

type Props = {
  setSearchResults: (data: number[]) => void
}

export function SearchWithAI({ setSearchResults }: Props) {
  const [searching, setSearching] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);

  const handleSearch = useCallback(async () => {
    try {
      if (!formRef.current) return;
      setSearching(true)

      const formData = new FormData(formRef.current)
      const query = formData.get("query") as string
      
      if (!query.trim()) return;
      
      const response = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({ query })
      })

      const { data } = await response.json()
      
      setSearchResults(data.results)
    } catch (err) {
      console.error("error on AI search", err)
      alert("Houve um erro na busca do Pokemon")
      setSearchResults([])
    } finally {
      setSearching(false)
    }
  }, [setSearchResults])

  return (
    <div className="w-full flex items-center pl-5">
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
        className="flex w-full mt-auto items-center border border-white/10 rounded-md animate-slide-fade-in-up"
      >
        <input
          name="query"
          className="bg-transparent outline-none w-full h-12 rounded-md border-b border-b-white/10 text-[0.9375rem] px-3 text-white placeholder:text-white/50 disabled:cursor-not-allowed"
          placeholder="Descreva como o Pokemón se parece (cor, corpo, poderes)..."
          autoComplete="off"
          disabled={searching}
        />
        <button
          disabled={searching}
          className="h-12 grid place-items-center px-3 rounded-r-md duration-200 hover:bg-white/10 disabled:cursor-not-allowed"
        >
          {searching ? 
            <Loader2Icon size={18} className="animate-spin" /> :
            <SearchIcon size={18} />
        }
        </button>
      </form>
    </div>
  )
}