"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { KnoottLogoMain } from "../vectors/knoottlogo";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  w-full h-auto aspect-video">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white w-full h-auto aspect-video rounded-3xl p-5 md:p-10 lg:p-14 shadow-xl border shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-medium text-muted-foreground antialiased text-sm lg:text-base max-w-md leading-loose md:leading-7 lg:leading-9">
              {card.content}
            </div>
            <div className="flex items-end justify-between w-full">
              <span>
                <p className="text-neutral-500 font-medium dark:text-white">
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  {card.designation}
                </p>
              </span>
                <KnoottLogoMain className="h-5"/>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
