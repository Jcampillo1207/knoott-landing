import { CardProps } from "@/lib/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Pause, PlayIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export const StorieCards = ({ Cards }: any) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const [savedProgress, setSavedProgress] = useState<number | null>(0);
  const timerInterval = 10000;
  const [isVisible, setIsVisible] = useState(false);
  const referenceRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % Cards.length),
    onSwipedRight: () =>
      setActiveCardIndex(
        (prevIndex) => (prevIndex - 1 + Cards.length) % Cards.length
      ),
    trackMouse: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (referenceRef.current) {
      observer.observe(referenceRef.current);
    }

    return () => {
      if (referenceRef.current) {
        observer.unobserve(referenceRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + (50 / timerInterval) * 100;
          return newProgress <= 100 ? newProgress : 100;
        });
      }, 50);

      timerRef.current = interval;

      return () => clearInterval(interval);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeCardIndex]);

  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
    setSavedProgress(0);
    startTimeRef.current = Date.now();

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTimeRef.current;
      const newProgress = (elapsedTime / timerInterval) * 100;
      setProgress(newProgress <= 100 ? newProgress : 100);
    }, 50);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeCardIndex]);

  useEffect(() => {
    if (progress >= 100) {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % Cards.length);
      setProgress(0);
      setSavedProgress(0);
      startTimeRef.current = Date.now();
    }
  }, [progress]);

  const handleRightArrowClick = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % Cards.length);
  };

  const handleLeftArrowClick = () => {
    setActiveCardIndex(
      (prevIndex) => (prevIndex - 1 + Cards.length) % Cards.length
    );
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full h-fit items-start justify-start flex flex-col gap-y-5">
      <span className="w-fit h-fit items-center justify-start gap-x-1 flex">
        <Button
          variant={"outline"}
          size={"icon"}
          className="text-muted-foreground md:size-8 rounded-sm"
          onClick={handleLeftArrowClick}
        >
          <ArrowLeft className="size-4 md:size-3" />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="text-muted-foreground md:size-8 rounded-sm"
          onClick={handleRightArrowClick}
        >
          <ArrowRight className="size-4 md:size-3" />
        </Button>
      </span>
      <div
        className="w-full h-fit items-start justify-start flex gap-x-1"
        id="reference"
      >
        {Cards.map((card: any, index: number) => {
          const isActive = index === activeCardIndex;
          const badges: any[] = card.badges;
          return (
            <div
              key={index}
              {...handlers}
              className={cn(
                "flex-1 items-start justify-start min-w-full hidden md:flex flex-col md:min-w-[100px] h-fit w-full duration-500 ease-in-out hover:-translate-y-3",
                isActive
                  ? "min-w-full md:min-w-[500px] flex hover:-translate-y-0"
                  : ""
              )}
            >
              <div
                className={cn(
                  "w-full aspect-square md:aspect-auto md:h-[600px] p-1 border rounded-2xl cursor-pointer",
                  isActive ? "cursor-default" : ""
                )}
                onClick={() => setActiveCardIndex(index)}
              >
                <div className="w-full h-full relative bg-muted rounded-xl overflow-hidden items-center justify-center flex">
                  <div
                    className={cn(
                      "w-full h-full absolute z-10 bg-transparent backdrop-grayscale duration-500 ease-in-out",
                      isActive ? "hidden" : "flex"
                    )}
                  />
                  <div
                    className={cn(
                      "w-full h-full z-20 items-start justify-end flex gap-y-1 md:gap-y-5 flex-col bg-transparent backdrop-blur-[3px] duration-500 ease-in-out p-3",
                      isActive &&
                        "backdrop-blur-none bg-gradient-to-t from-black/50 via-transparent to-transparent"
                    )}
                  >
                    <div className="w-full h-fit items-center justify-between flex transition-all">
                      <span className="flex flex-wrap gap-2">
                        {badges.map((badge, index) => {
                          return (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-muted/50 text-background flex-1 min-w-fit max-w-fit"
                            >
                              {badge.item}
                            </Badge>
                          );
                        })}
                      </span>
                      <span className="w-fit items-center justify-center flex transition-all">
                        {isActive && (
                          <Button
                            variant={"outline"}
                            size={"icon"}
                            className="text-white bg-transparent border-0 hover:bg-transparent hover:border-0 md:size-8 rounded-sm"
                            onClick={handlePlayPauseClick}
                          >
                            {isPlaying ? (
                              <Pause className="size-5 fill-white text-white" />
                            ) : (
                              <PlayIcon className="size-5 fill-white text-white" />
                            )}
                          </Button>
                        )}
                      </span>
                    </div>
                    {isActive && (
                      <div className="w-full h-fit items-center justify-center">
                        <Progress value={progress} />
                      </div>
                    )}
                  </div>
                  <Image
                    src={card.image}
                    alt="Image"
                    fill
                    className="object-cover transition-all"
                  />
                </div>
              </div>
              <div
                className={cn(
                  "w-full h-fit items-start justify-start opacity-0 flex flex-col gap-y-3 md:gap-y-7 p-0 md:p-7 duration-500 ease-in-out pt-10",
                  isActive ? "opacity-100" : ""
                )}
              >
                <h1 className="text-3xl md:text-3xl xl:text-3xl antialiased tracking-wide font-bold">
                  {card.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground antialiased tracking-wider">
                  {card.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
