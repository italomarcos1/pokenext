import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";
import { inter, kumbhSans } from "./fonts";

export const metadata: Metadata = {
  title: "Pokenext",
  description: "A Pokedex app built with NextJS",
};

type Props = Readonly<{ children: ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${kumbhSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
