export type Type = "Grass" | "Poison" | "Fire" | "Flying" | "Water" | "Bug" | "Normal" | "Electric" | "Ground" | "Fighting" | "Psychic" | "Rock" | "Ice" | "Ghost" | "Dragon"

export type Pokemon = {
  id: number;
  num: string;
  name: string;
  img: string;
  type: Type[];
  height: string;
  weight: string;
  candy: string;
  candy_count: number;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[] | null;
  weaknesses: Type[];
  next_evolution: {
    num: string;
    name: string;
  }[];
}