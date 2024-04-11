import { SectionUniversal } from "@/components/layout/sections";
import { HeroText, HeroTitle } from "@/components/text/texts";
import { Button } from "@/components/ui/button";
import { IntelloLogo, IntelloLogoBig } from "@/components/vectors/intello";
import { ArrowRight, Blend } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Section5 = () => {
  return (
    <SectionUniversal className="w-full mx-auto h-fit items-start px-5 md:px-0 lg:px-0 xl:px-36 justify-start grid grid-cols-1 gap-10 md:gap-14 xl:gap-24 xl:grid-cols-2">
      <span className="w-full h-fit items-center justify-between flex gap-x-3 pb-5 border-b col-span-1 xl:col-span-2 md:px-7 lg:px-14 xl:px-0">
        <div className="h-fit w-fit items-center justify-start gap-x-3 flex">
          <IntelloLogo className="size-5" />
          <p className="text-sm text-muted-foreground/80 antialiased font-medium">
            Producto
          </p>
        </div>
      </span>
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-10 lg:gap-y-14 md:px-7 lg:px-14 xl:px-0">
        <div className="w-full h-fit items-start justify-between gap-y-5 md:gap-y-7 flex flex-col">
          <HeroTitle className="text-4xl md:text-6xl lg:text-4xl xl:text-4xl max-w-2xl text-foreground/50 text-pretty">
            Un producto desarrollado por{" "}
            <span className="text-foreground">Intello AI</span>
          </HeroTitle>
          <HeroText className="text-pretty max-w-2xl font-medium">
            Somos una empresa desarrolladora de productos digitales, usando la
            ultima tecnología dentro de sector. Servicios básicos desde
            aplicaciones y sitios web a software empresarial y productos de alta
            calidad. Ayudamos a empresas impulsarse y destacarse dentro del
            mundo digital en constante evolución.
          </HeroText>
          <Button
            variant={"link"}
            size={"default"}
            asChild
            className="text-foreground antialiased font-medium flex gap-x-1 px-0"
          >
            <Link href={"https://intelloai.com"} target="_blank">
              Saber más
              <ArrowRight className="size-3" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full h-fit items-center justify-center flex relative">
        <div className="w-[2000px] h-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-visible hidden md:flex xl:hidden">
            <Image src={"/bg.png"} fill className="object-contain" alt="Bg"/>
        </div>
        <div className="w-[70%] md:w-[50%] h-auto aspect-square bg-muted rounded-3xl flex items-center justify-center border z-50">
          <IntelloLogoBig className="size-[60%]" />
        </div>
      </div>
    </SectionUniversal>
  );
};
