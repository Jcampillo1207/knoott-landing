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
          item: "Sencillez",
        },
        {
          item: "Facilidad",
        },
      ],
      title: "Ingresa con un click",
      text: "Ingresa a la mesa de regalos digital de la forma mas sencilla, dando click al link, o bien ingresando el código de la boda en nuestra página web",
      image: "/click.png",
    },
    {
      badges: [
        {
          item: "Libertad",
        },
        {
          item: "Variedad",
        },
      ],
      title: "Selección de regalo",
      text: "Navega por los artículos favoritos de los novios y al seleccionar, podrás aportar lo deseado en ese regalo.",
      image: "/sele.png",
    },
    {
      badges: [
        {
          item: "Opciones",
        },
        {
          item: "Seguridad",
        },
        {
          item: "Selección",
        },
      ],
      title: "Diferentes métodos de pago",
      text: "Diversas opciones de pago para facilitar el regalo del invitado. Regala con tarjeta de debito, crédito, ApplePay, GooglePay y transferencia bancaria SPEI.",
      image: "/pay.png",
    },
    {
      badges: [
        {
          item: "Variedad",
        },
        {
          item: "Facilidad",
        },
      ],
      title: "Regala de la manera más sencilla",
      text: "Optimizamos el proceso para que el regalar en 3 clicks se convierta en lo más sencillo y eficaz dentro de una mesa de regalos.",
      image: "/tres.png",
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
          Regala de la manera mas{" "}
          <span className="text-foreground">sencilla e innovadora</span>
        </HeroTitle>
      </div>
      <StorieCards Cards={Cards} />
    </SectionUniversal>
  );
};
