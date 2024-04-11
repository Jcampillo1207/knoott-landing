import { cn } from "@/lib/utils";

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

export const HeroTitle = ({ className, children }: TextProps) => {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl lg:text-6xl xl:text-7xl antialiased tracking-wide font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroText = ({ className, children }: TextProps) => {
  return (
    <h1
      className={cn(
        "text-base md:text-lg text-pretty antialiased tracking-wider text-muted-foreground",
        className
      )}
    >
      {children}
    </h1>
  );
};
