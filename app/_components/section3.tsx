"use client";

import { SectionUniversal } from "@/components/layout/sections";
import { HeroTitle } from "@/components/text/texts";
import { Users } from "lucide-react";
import { CardProps } from "@/lib/types";
import { StorieCards } from "@/components/interface/storieCards";

export const Section3 = () => {
  const Cards: CardProps[] = [
    {
      badges: [
        {
          item: "Ingresos",
        },
        {
          item: "Ingresos",
        },
      ],
      title: "Diferentes métodos de pago",
      text: "Hola como estás?",
      image: "/prueba.jpg",
    },
    {
      badges: [
        {
          item: "Ingresos",
        },
        {
          item: "Ingresos",
        },
        {
          item: "Ingresos",
        },
      ],
      title: "Diferentes métodos de pago",
      text: "Hola como estás?",
      image: "/prueba2.jpg",
    },
    {
      badges: [
        {
          item: "Ingresos",
        },
      ],
      title: "Diferentes métodos de pago",
      text: "Hola como estás?",
      image: "/prueba3.jpg",
    },
    {
      badges: [
        {
          item: "Ingresos",
        },
        {
          item: "Ingresos",
        },
      ],
      title: "Diferentes métodos de pago",
      text: "Hola como estás?",
      image: "/prueba.jpg",
    },
  ];

  return (
    <SectionUniversal className="w-full h-fit items-start justify-start flex flex-col gap-y-10 md:gap-y-14">
      <div className="w-full h-fit items-center justify-start flex gap-x-3 pb-5 border-b">
        <Users className="size-5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground/80 antialiased font-medium">
          Invitados
        </p>
      </div>
      <div className="w-full h-fit items-start justify-start">
        <HeroTitle className="text-4xl text-pretty md:text-6xl lg:text-4xl xl:text-4xl max-w-2xl text-foreground/50">
          Contribuye al <span className="text-foreground">futuro </span> de tus
          seres queridos, convierte tu regalo en una <span className="text-foreground">experiencia </span> inolvidable.
        </HeroTitle>
      </div>
      <StorieCards Cards={Cards} />
    </SectionUniversal>
  );
};
