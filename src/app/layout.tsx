import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";
import { inter, kumbhSans } from "./fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokenext",
  description: "A Pokedex app built with NextJS",
};

type Props = Readonly<{ children: ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${kumbhSans.variable}`}>
        <header className="flex flex-col w-full max-w-desktop mx-auto py-4 px-5 gap-4">
          <Link href="/">
            <h1 className="max-lg:text-2xl text-4xl">PokeNextics</h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
