"use client";

import { CARDS } from "@/components/cards";
import { SectionUniversal } from "@/components/layout/sections";
import { HeroText, HeroTitle } from "@/components/text/texts";
import { Button } from "@/components/ui/button";
import { CardStack } from "@/components/ui/card-stack";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Confetti from "react-confetti";
import { ChevronRight, Loader2 } from "lucide-react";
import { useWindowSize } from "react-use";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormEvent, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { env } from "process";
import { postSheetsData } from "@/lib/googlesheets";
import { sendForm } from "@/lib/route";
import { toast } from "sonner";
import Link from "next/link";

const FormPage = () => {
  const [gender, setGender] = useState<string>("");
  const [device, setDevice] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [comp, setComp] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const { width, height } = useWindowSize();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formNames = {
      edad: formData.get("edad") as string,
      like: formData.get("like") as string,
      dislike: formData.get("dislike") as string,
      competence: formData.get("competence") as string,
      competenceLike: formData.get("competenceLike") as string,
      competenceDislike: formData.get("competenceDislike") as string,
      characteristics: formData.get("characteristics") as string,
    };

    const form = {
      edad: formNames.edad,
      gender,
      device,
      platform,
      like: formNames.like || "NA",
      dislike: formNames.dislike || "NA",
      comp,
      competence: formNames.competence || "NA",
      competenceLike: formNames.competenceLike || "NA",
      competenceDislike: formNames.competenceDislike || "NA",
      characteristics: formNames.characteristics || "NA",
    };

    setIsLoading(true);

    try {
      const response = await postSheetsData(form);
      if (response) {
        const send = await sendForm();
        if (send) {
          toast.success(
            "Gracias a tu apoyo Knoott será una plataforma inolvidable 🫶🏻💛"
          );
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 7000);
        }
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
      formRef.current?.reset();
      setGender("");
      setDevice("");
      setPlatform("");
      setComp("");
    }
  };
  return (
    <>
      <main className="w-full h-fit items-center justify-center flex flex-col">
        <SectionUniversal className="py-28 md:py-32 lg:py-36 xl:py-48 grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-y-24 lg:gap-y-36">
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-5">
            <HeroTitle className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold tracking-tight text-pretty text-foreground/50 max-w-2xl">
              Forma parte del{" "}
              <span className="text-foreground w-fit">comienzo</span> de algo
              extraordinario...
            </HeroTitle>
            <HeroText className="font-medium">
              Para poder brindarte un producto de calidad nos gustaría saber tu
              opinión sobre las mesas de regalos de bodas.
            </HeroText>
            <Button
              className="mt-5 flex items-center"
              variant={"default"}
              size={"lg"}
              asChild
            >
              <Link href={"/form#formulario"}>
                Contestar formulario
                <ChevronRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="w-full h-fit items-center justify-center">
            <CardStack items={CARDS} />
          </div>
        </SectionUniversal>
        <SectionUniversal
          id="formulario"
          className="w-full h-fit items-center justify-center flex flex-col gap-y-7 lg:gap-y-14 pt-0 md:pt-0 lg:pt-0 xl:pt-0"
        >
          <HeroTitle className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold tracking-tight text-pretty text-foreground/50 max-w-2xl">
            Ayúdanos a <span className="text-foreground w-fit">mejorar</span>{" "}
            nuestra plataforma...
          </HeroTitle>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full h-fit max-w-4xl mx-auto border bg-muted/30 p-7 lg:p-7 rounded-2xl flex flex-col gap-y-5 lg:gap-y-7"
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
              <Select
                value={gender}
                disabled={(isLoading && true) || false}
                onValueChange={setGender}
              >
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
                ¿Qué tipo de dispositivo utilizas más?
                <span className="text-destructive">*</span>
              </Label>
              <Select
                value={device}
                disabled={(isLoading && true) || false}
                onValueChange={setDevice}
              >
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
              <Select
                value={platform}
                disabled={(isLoading && true) || false}
                onValueChange={setPlatform}
              >
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
                    disabled={(isLoading && true) || false}
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
                    disabled={(isLoading && true) || false}
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
              <Select
                value={comp}
                disabled={(isLoading && true) || false}
                onValueChange={setComp}
              >
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
                    disabled={(isLoading && true) || false}
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
                    disabled={(isLoading && true) || false}
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
                    disabled={(isLoading && true) || false}
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
                    disabled={(isLoading && true) || false}
                    name="characteristics"
                    placeholder="Cuéntanos..."
                    className="w-full valid:border-green-600 border"
                    rows={5}
                    required
                  />
                </div>
              </>
            )}
            {/* <Separator className="my-0 lg:my-5" />
            <div className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
              <Label className="antialiased text-sm tracking-wide">
                ¿Estarias dispuesto a pagar un 3% del monto de tu regalo como
                cargo por servicio de la plataforma?
                <span className="text-destructive">*</span>
              </Label>
              <Select
                value={willing}
                disabled={(isLoading && true) || false}
                onValueChange={setWilling}
              >
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
            </div> */}
            <div className="w-full h-fit items-center justify-end flex mt-5 lg:mt-10">
              {(isLoading && (
                <Button
                  disabled
                  variant={"default"}
                  size={"lg"}
                  type="submit"
                  className="w-full md:w-fit flex gap-x-2"
                >
                  Enviando formulario
                  <Loader2 className="size-4 animate-spin" />
                </Button>
              )) || (
                <Button
                  variant={"default"}
                  size={"lg"}
                  type="submit"
                  className="w-full md:w-fit"
                >
                  Enviar formulario
                </Button>
              )}
            </div>
          </form>
        </SectionUniversal>
      </main>
      {showConfetti && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999,
          }}
        >
          <Confetti
            width={width}
            height={height}
            colors={["#F7DB70", "#F7BBDD", "#BACCEC", "#5BC95F"]}
          />
        </div>
      )}
    </>
  );
};

export default FormPage;
