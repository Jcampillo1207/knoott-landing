"use server";

import { Resend } from "resend";
import { KnootWelcome } from "@/components/utilities/mailTemplate";

export async function send(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "Knoott <soporte@knoott.com>",
    to: [email],
    subject: "Gracias por entrar a nuestra lista de espera",
    react: KnootWelcome(),
  });
}
