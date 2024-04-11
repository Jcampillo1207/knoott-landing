import { SectionUniversal } from "@/components/layout/sections";
import { HeroText, HeroTitle } from "@/components/text/texts";
import { LayoutDashboard } from "lucide-react";

export const Section4 = () => {
  return (
    <SectionUniversal className="w-full h-fit items-start justify-start flex flex-col gap-y-10 md:gap-y-14 bg-muted/50 pb-20 md:pb-0 lg:pb-0 xl:pb-0 border-y">
      <div className="w-full h-fit items-center justify-start flex gap-x-3 pb-5 border-b">
        <LayoutDashboard className="size-5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground/80 antialiased font-medium">
          Gestión
        </p>
      </div>
      <div className="w-full h-fit items-start justify-between gap-x-10 gap-y-5 md:gap-y-7 flex flex-col xl:flex-row">
        <HeroTitle className="text-4xl text-pretty md:text-6xl lg:text-4xl xl:text-4xl max-w-2xl text-foreground/50">
          Gestiona tu <span className="text-foreground">mesa de regalos </span>
        </HeroTitle>
        <HeroText className="text-pretty max-w-2xl font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          veritatis velit inventore, voluptates, repellat recusandae quis
          voluptatum labore ipsa porro nostrum corrupti magnam obcaecati nobis
          harum impedit quidem in tenetur.
        </HeroText>
      </div>
      <div className="w-full h-fit md:h-[650px] overflow-hidden relative mt-5 md:pt-10 lg:mt-14 xl:mt-16">
        <div className="w-full h-fit items-start justify-start border flex static md:absolute top-0 left-0 p-1 bg-muted-foreground/5 rounded-2xl overflow-hidden">
          <img
            src={"/dashboard.png"}
            className="object-cover w-full h-auto rounded-xl"
            alt={""}
          />
        </div>
      </div>
    </SectionUniversal>
  );
};
