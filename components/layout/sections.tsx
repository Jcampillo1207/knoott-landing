import { cn } from "@/lib/utils";

export const SectionUniversal = ({
  children,
  className,
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string
}) => {
  return (
    <section className={cn("w-full h-fit px-5 md:px-7 lg:px-14 xl:px-36 py-20 md:py-20 lg:py-24 xl:py-36 scroll-smooth", className)} id={id}>
      {children}
    </section>
  );
};
