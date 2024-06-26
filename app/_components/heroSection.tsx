import { SectionUniversal } from "@/components/layout/sections";
import { Rings } from "@/components/renders/rings";
import { HeroText, HeroTitle } from "@/components/text/texts";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { WaitlistForm } from "@/components/universal/inputWaitlist";
import { CalendarClock } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export const HeroSection = () => {
  return (
    <SectionUniversal
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-10 py-28 md:py-32 lg:py-36 xl:py-48"
      id="inicio"
    >
      <div className="w-full flex flex-col gap-y-5 md:gap-y-7 items-start justify-center col-span-1 xl:col-span-7">
        <HeroTitle className="text-5xl font-semibold tracking-tight text-pretty break-normal text-foreground/50 md:break-words">
          Mejora la <span className="text-foreground w-fit">experiencia</span>{" "}
          en tu mesa de regalos
        </HeroTitle>
        <HeroText className="font-medium">
          Knoott es una plataforma digital para mesas de regalos de boda.
          Personaliza tu lista, facilita a tus invitados el regalar y ofrece
          diversos métodos de pago. Configura fácilmente para que amigos y
          familiares contribuyan sin complicaciones.
        </HeroText>
        <div className="w-full h-fit items-start justify-start flex flex-col lg:flex-row gap-3 lg:gap-2 mt-5 md:mt-7">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"default"}
                size={"lg"}
                className="flex gap-x-2 items-center w-full lg:w-fit max-w-md"
              >
                Únete a nuestra lista de espera
                <CalendarClock className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="start"
              sideOffset={10}
              className="max-w-2xl w-96"
            >
              <div className="w-full h-fit items-start justify-start flex text-foreground font-bold text-lg pb-3 px-2">
                Lista de espera:
              </div>
              <WaitlistForm className="mb-3" />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-full aspect-square lg:aspect-auto flex items-center justify-center relative overflow-visible col-span-1 xl:col-span-5">
        <Suspense
          fallback={<div className="w-fuññ aspect-square lg:aspect-auto"></div>}
        >
          <Rings />
        </Suspense>
      </div>
    </SectionUniversal>
  );
};
