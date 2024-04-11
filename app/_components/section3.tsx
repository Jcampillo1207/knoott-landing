"use client";

import { SectionUniversal } from "@/components/layout/sections";
import { HeroTitle } from "@/components/text/texts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Heart, Pause, PlayIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useSwipeable } from "react-swipeable";
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
        <Heart className="size-5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground/80 antialiased font-medium">
          Valor Agregado
        </p>
      </div>
      <div className="w-full h-fit items-start justify-start">
        <HeroTitle className="text-4xl text-pretty md:text-6xl lg:text-4xl xl:text-4xl max-w-2xl text-foreground/50">
          Mejora la <span className="text-foreground">experiencia </span> de tus
          invitados, ofrece nuevas formas de regalar
        </HeroTitle>
      </div>
      <StorieCards Cards={Cards} />
    </SectionUniversal>
  );
};
