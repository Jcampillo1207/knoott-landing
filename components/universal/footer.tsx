import Link from "next/link";
import { KnoottLogoLarge } from "../vectors/knoottlogo";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";
import { NewTwitterIcon, PinterestIcon } from "../vectors/x";
import { Label } from "../ui/label";
import { WaitlistForm } from "./inputWaitlist";
import { Placa } from "../vectors/placa";

export const Footer = () => {
  return (
    <footer className="w-full h-fit items-start p-3 xl:p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 inset-3 bg-muted px-7 md:px-7 lg:px-14 xl: xl:px-36 py-10 md:py-7 lg:py-14 xl:py-20 rounded-2xl border">
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3 col-span-1 md:col-span-2">
          <Link
            className="w-fit h-fit flex items-start justify-start"
            href={"#inicio"}
          >
            <KnoottLogoLarge className="h-5 w-auto" />
          </Link>
          <div className="w-fit h-fit flex items-center justify-start gap-x-2 mt-5">
            <Button
              variant={"outline"}
              size={"icon"}
              className="hover:bg-background hover:text-foreground text-muted-foreground/80"
              asChild
            >
              <Link
                href={"https://www.instagram.com/knoottmx/"}
                target="_blank"
              >
                <Instagram className="size-4" />
              </Link>
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              className="hover:bg-background hover:text-foreground text-muted-foreground/80"
              asChild
            >
              <Link href={"https://intelloai.com"} target="_blank">
                <NewTwitterIcon
                  className="size-4"
                  color="stroke-muted-foreground/80"
                />
              </Link>
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              className="hover:bg-background hover:text-foreground text-muted-foreground/80"
              asChild
            >
              <Link href={"https://intelloai.com"} target="_blank">
                <PinterestIcon
                  className="size-4"
                  color="stroke-muted-foreground/80"
                />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-1">
          <Label className="text-base antialiased font-bold mb-1">
            Navegación:
          </Label>
          <Button
            variant={"link"}
            size={"default"}
            className="text-muted-foreground px-0 pl-2"
            asChild
          >
            <Link href={"#inicio"}>Inicio</Link>
          </Button>
          <Button
            variant={"link"}
            size={"default"}
            className="text-muted-foreground px-0 pl-2"
            asChild
          >
            <Link href={"#producto"}>Conoce el producto</Link>
          </Button>
          <Button
            variant={"link"}
            size={"default"}
            className="text-muted-foreground px-0 pl-2"
            asChild
          >
            <Link href={"#acerca"}>Acerca de Knoott</Link>
          </Button>
        </div>
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-1">
          <Label className="text-base antialiased font-bold mb-1">
            Empresa:
          </Label>
          <Button
            variant={"link"}
            size={"default"}
            className="text-muted-foreground px-0 pl-2"
            asChild
          >
            <Link href={"https://intelloai.com"} target="_blank">
              Conoce Intello AI
            </Link>
          </Button>
          <Label className="text-base antialiased font-bold mb-3 mt-9 md:mt-5">
            Lista de espera:
          </Label>
          <WaitlistForm className="mb-0" />
        </div>
        <div className="w-full h-fit items-center justify-center flex border-t pt-10 md:pt-14 lg:pt-20 col-span-1 md:col-span-2 xl:col-span-4 mt-5">
          <Link
            className="w-fit h-fit group"
            href={"https://intelloai.com"}
            target="_blank"
          >
            <Placa />
          </Link>
        </div>
      </div>
    </footer>
  );
};
