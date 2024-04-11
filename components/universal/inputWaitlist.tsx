"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader, MailCheck, Send } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { send } from "@/lib/api/route";

export function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  document.addEventListener("DOMContentLoaded", () => {
    Array.prototype.slice
      .call(document.querySelectorAll("input"))
      .filter((el) => el.hasAttribute("autofocus"))[0]
      .focus();
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setStatus("sending");
    toast("Cargando...", {
      unstyled: false,
      classNames: {
        toast: "",
        title: "",
        icon: "bg-contrast_green",
      },
    });
    await send(email);
    setStatus("idle");
    toast.success("Correo enviado con éxito...", {
      unstyled: false,
      icon: <MailCheck className="size-4 text-white" />,
      classNames: {
        toast: "bg-contrast_green border-0",
        title: "text-white",
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full h-fit items-center justify-normal flex gap-x-2 px-2 mb-5",
        className
      )}
    >
      <Input
        value={email}
        type="email"
        required
        disabled={status === "idle" ? false : true}
        onChange={handleChange}
        placeholder="email@email.com"
      />
      {status === "idle" ? (
        <Button
          type="submit"
          variant={"default"}
          size={"icon"}
          className="aspect-square"
        >
          <Send className="size-4" />
        </Button>
      ) : status === "sendind" ? (
        <Button
          type="submit"
          disabled
          variant={"default"}
          size={"icon"}
          className="aspect-square"
        >
          <Loader className="size-4 animate-spin" />
        </Button>
      ) : (
        <Button
          type="submit"
          disabled
          variant={"default"}
          size={"icon"}
          className="aspect-square"
        >
          <Loader className="size-4 animate-spin" />
        </Button>
      )}
    </form>
  );
}
