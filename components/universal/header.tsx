"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { KnoottLogoLarge, KnoottLogoMain } from "../vectors/knoottlogo";
import { NavMobile } from "./navMobile";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { WaitlistForm } from "./inputWaitlist";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  const checkScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setVisible(true);
    } else if (currentScrollY + lastScrollY > lastScrollY + 200) {
      setVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      checkScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "w-full h-fit items-center justify-between flex gap-x-10 px-5 md:px-7 lg:px-14 xl:px-36 py-4 bg-background border-b fixed z-[999] duration-1000 ease-in-out",
        (visible && "-translate-y-0") || "-translate-y-full"
      )}
    >
      <div className="h-fit w-fit">
        <Link href={"/"}>
          <KnoottLogoMain className="h-6 w-auto" />
        </Link>
      </div>
      <div className="w-full h-fit items-center justify-end gap-x-2 flex">
        <Button
          variant={"outline"}
          size={"sm"}
          asChild
          className="text-xs py-2 h-fit hidden md:flex"
        >
          <Link href={"/#inicio"}>Inicio</Link>
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          className="text-xs py-2 h-fit hidden md:flex"
          onClick={() => router.push("/#producto")}
        >
          Producto
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          asChild
          className="text-xs py-2 h-fit hidden md:flex"
        >
          <Link href={"/#acerca"}>Acerca</Link>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"default"}
              size={"sm"}
              className="text-xs py-2 h-fit hidden md:flex"
            >
              Lista de espera
            </Button>
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="end"
            sideOffset={10}
            className="max-w-2xl w-96"
          >
            <div className="w-full h-fit items-start justify-start flex text-foreground font-bold text-lg pb-3 px-2">
              Lista de espera:
            </div>
            <WaitlistForm className="mb-3" />
          </PopoverContent>
        </Popover>
        <NavMobile />
      </div>
    </header>
  );
};
