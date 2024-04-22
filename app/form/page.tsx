"use client";

import { CARDS } from "@/components/cards";
import { SectionUniversal } from "@/components/layout/sections";
import { HeroText, HeroTitle } from "@/components/text/texts";
import { Button } from "@/components/ui/button";
import { CardStack } from "@/components/ui/card-stack";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const FormPage = () => {
  const [gender, setGender] = useState<string>("");
  const [device, setDevice] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [comp, setComp] = useState<string>("");
  const [willing, setWilling] = useState<string>("");

  console.log(gender);
  console.log(device);
  console.log(platform);
  console.log(comp);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { gender, device, platform, comp, willing };

    try {
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const result = await response.json();
        console.log(result); // Manejar la respuesta como sea necesario
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <main className="w-full h-fit items-center justify-center flex flex-col">
      <SectionUniversal className="py-28 md:py-32 lg:py-36 xl:py-48 grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-y-24 lg:gap-y-36">
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-5">
          <HeroTitle className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold tracking-tight text-pretty text-foreground/50 max-w-2xl">
            Ayúdanos a <span className="text-foreground w-fit">mejorar</span>{" "}
            nuestra plataforma...
          </HeroTitle>
          <HeroText className="font-medium">
            Para poder ofrecerte un producto de calidad necesitamos saber tu
            opinión sobre como podríamos construir algo que pueda beneficiarte
          </HeroText>
          <Button
            className="mt-5 flex items-center"
            variant={"default"}
            size={"lg"}
          >
            Contestar formulario
            <ChevronRight className="size-4 ml-2" />
          </Button>
        </div>
        <div className="w-full h-fit items-center justify-center">
          <CardStack items={CARDS} />
        </div>
      </SectionUniversal>
      <SectionUniversal className="w-full h-fit items-center justify-center flex flex-col gap-y-7 lg:gap-y-14 pt-0 md:pt-0 lg:pt-0 xl:pt-0">
        <HeroTitle className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold tracking-tight text-pretty text-foreground/50 max-w-2xl">
          Ayúdanos a <span className="text-foreground w-fit">mejorar</span>{" "}
          nuestra plataforma...
        </HeroTitle>
        <form
          onSubmit={handleSubmit}
          className="w-full h-fit max-w-4xl mx-auto border bg-muted p-7 lg:p-7 rounded-2xl flex flex-col gap-y-5 lg:gap-y-7"
        >
          <div className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
            <Label className="antialiased text-sm tracking-wide">
              ¿Qué edad tienes?<span className="text-destructive">*</span>
            </Label>
            <Input
              type="number"
              className="w-full valid:border-green-600 border"
              required
              name="edad"
              placeholder="Ingresa tu edad"
            />
          </div>
          <div className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
            <Label className="antialiased text-sm tracking-wide">
              ¿Cuál es tu género?<span className="text-destructive">*</span>
            </Label>
            <Select onValueChange={setGender}>
              <SelectTrigger
                className={cn(
                  "w-full text-muted-foreground",
                  gender !== "" && "text-foreground border-green-600 border"
                )}
              >
                <SelectValue placeholder="Selecciona..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="Hombre"
                >
                  Hombre
                </SelectItem>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="Mujer"
                >
                  Mujer
                </SelectItem>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="Otro"
                >
                  Prefiero no decirlo...
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
            <Label className="antialiased text-sm tracking-wide">
              ¿Qué tipo de dispositivo usas?
              <span className="text-destructive">*</span>
            </Label>
            <Select onValueChange={setDevice}>
              <SelectTrigger
                className={cn(
                  "w-full text-muted-foreground",
                  device !== "" && "text-foreground border-green-600 border"
                )}
              >
                <SelectValue placeholder="Selecciona..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="laptop"
                >
                  Laptop
                </SelectItem>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="celular"
                >
                  Celular
                </SelectItem>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="tablet"
                >
                  Tablet
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator className="my-5" />
          <div className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
            <Label className="antialiased text-sm tracking-wide">
              ¿Has usado un registro de regalos de bodas antes?
              <span className="text-destructive">*</span>
            </Label>
            <Select onValueChange={setPlatform}>
              <SelectTrigger
                className={cn(
                  "w-full text-muted-foreground",
                  platform !== "" && "text-foreground border-green-600 border"
                )}
              >
                <SelectValue placeholder="Selecciona..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="si"
                >
                  Si
                </SelectItem>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="no"
                >
                  No
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {platform === "si" && (
            <>
              <div className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
                <Label className="antialiased text-sm tracking-wide">
                  ¿Qué es lo que te gusta en los sitios web de registro de
                  regalos de bodas?<span className="text-destructive">*</span>
                </Label>
                <Textarea
                  name="like"
                  placeholder="Cuéntanos..."
                  className="w-full valid:border-green-600 border"
                  rows={5}
                  required
                />
              </div>
              <div className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
                <Label className="antialiased text-sm tracking-wide">
                  ¿Qué es lo que no te gusta?
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  name="dislike"
                  placeholder="Cuéntanos..."
                  className="w-full valid:border-green-600 border"
                  rows={5}
                  required
                />
              </div>
            </>
          )}
          <Separator className="my-5" />
          <div className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
            <Label className="antialiased text-sm tracking-wide">
              ¿Conoces algún sitio web para tu registro de regalos de bodas?
              <span className="text-destructive">*</span>
            </Label>
            <Select onValueChange={setComp}>
              <SelectTrigger
                className={cn(
                  "w-full text-muted-foreground",
                  comp !== "" && "text-foreground border-green-600 border"
                )}
              >
                <SelectValue placeholder="Selecciona..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="si"
                >
                  Si
                </SelectItem>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="no"
                >
                  No
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {comp === "si" && (
            <>
              <div className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
                <Label className="antialiased text-sm tracking-wide">
                  ¿Cuál o cualés?<span className="text-destructive">*</span>
                </Label>
                <Input
                  name="competence"
                  placeholder="Nombre de sitios web..."
                  className="w-full valid:border-green-600 border"
                  required
                />
              </div>
              <div className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
                <Label className="antialiased text-sm tracking-wide">
                  ¿Qué es lo que más te gusta de ellos?
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  name="competenceLike"
                  placeholder="Cuéntanos..."
                  className="w-full valid:border-green-600 border"
                  rows={5}
                  required
                />
              </div>
              <div className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
                <Label className="antialiased text-sm tracking-wide">
                  ¿Qué es lo que no te gusta de ellos?
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  name="competenceDislike"
                  placeholder="Cuéntanos..."
                  className="w-full valid:border-green-600 border"
                  rows={5}
                  required
                />
              </div>
              <div className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
                <Label className="antialiased text-sm tracking-wide">
                  ¿Qué características te harían elegir nuestra plataforma
                  <span className="font-bold"> Knoott</span> sobre las demás
                  opciones?
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  name="characteristics"
                  placeholder="Cuéntanos..."
                  className="w-full valid:border-green-600 border"
                  rows={5}
                  required
                />
              </div>
            </>
          )}
          <Separator className="my-0 lg:my-5" />
          <div className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
            <Label className="antialiased text-sm tracking-wide">
              ¿Estarias dispuesto a pagar un 3% del monto de tu regalo como
              cargo por servicio de la plataforma?
              <span className="text-destructive">*</span>
            </Label>
            <Select onValueChange={setWilling}>
              <SelectTrigger
                className={cn(
                  "w-full text-muted-foreground",
                  willing !== "" && "text-foreground border-green-600 border"
                )}
              >
                <SelectValue placeholder="Selecciona..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="si"
                >
                  Si
                </SelectItem>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="no"
                >
                  No
                </SelectItem>
                <SelectItem
                  className="text-muted-foreground focus:text-foreground"
                  value="depende"
                >
                  Depende
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full h-fit items-center justify-end flex mt-5 lg:mt-10">
            <Button
              variant={"default"}
              size={"lg"}
              type="submit"
              className="w-full md:w-fit"
            >
              Enviar formulario
            </Button>
          </div>
        </form>
      </SectionUniversal>
    </main>
  );
};

export default FormPage;
