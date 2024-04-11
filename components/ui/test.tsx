"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo({ items }: { items: any }) {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={items} />
    </div>
  );
}
