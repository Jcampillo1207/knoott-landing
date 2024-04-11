import { Menu } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Icon from "../utilities/icons";
import { cn } from "@/lib/utils";

export const AccordionShow = ({
  title,
  content,
  icon,
  value,
  className,
}: {
  title: string;
  content: string;
  icon: string;
  value: string;
  className?: string;
}) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="w-full h-fit items-center justify-start flex gap-x-2">
          <div className="size-10 border rounded-lg p-[2px]">
            <div
              className={cn(
                "w-full h-full items-center justify-center flex bg-contain rounded-md",
                className
              )}
            >
              <Icon className="size-4 text-white mix-blend-luminosity" name={icon} />
            </div>
          </div>
          <p>{title}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
};
