import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { ChevronRight, MenuIcon, Send } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WaitlistForm } from "./inputWaitlist";

export const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="flex md:hidden">
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="max-h-[80%] overflow-y-scroll">
        <SheetHeader>
          <SheetDescription>
            <div className="w-full h-fit items-start justify-start flex flex-col gap-y-1 pt-5 px-2">
              <div className="w-full h-fit items-start justify-start flex text-foreground font-bold text-xl pb-3">
                Navegación
              </div>
              <SheetClose asChild>
                <Button
                  variant={"ghost"}
                  size={"default"}
                  asChild
                  className="w-full items-center justify-between flex py-3 text-base"
                >
                  <Link href={"#"}>
                    Inicio
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant={"ghost"}
                  size={"default"}
                  asChild
                  className="w-full items-center justify-between flex py-3 text-base"
                >
                  <Link href={"#"}>
                    Acerca
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant={"ghost"}
                  size={"default"}
                  asChild
                  className="w-full items-center justify-between flex py-3 text-base"
                >
                  <Link href={"#"}>
                    Producto
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </SheetClose>
            </div>
            <div className="px-2">
              <Separator className="my-5" />
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground font-bold text-lg">
                  Lista de espera
                </AccordionTrigger>
                <AccordionContent className="px-0">
                  <div className="w-full h-fit items-center justify-center flex pt-3">
                    <WaitlistForm />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
