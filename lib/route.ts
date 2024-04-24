"use server";

import { Resend } from "resend";
import { KnootWelcome } from "@/components/utilities/mailTemplate";

export async function send(email: string) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "Knoott <soporte@knoott.com>",
    to: [email],
    subject: "Gracias por entrar a nuestra lista de espera",
    react: KnootWelcome(),
  });
  if (data) {
    resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: "4121cecb-8808-471c-9a46-a056625b0fe9",
    });
    return true;
  } else {
    console.log("error");
  }
}

export async function sendForm() {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "Knoott <soporte@knoott.com>",
    to: [
      "jcampillo@intelloai.com",
      "angelamarreed@gmail.com",
      "hmexsen@intelloai.com",
    ],
    subject: "Nueva respuesta de formulario",
    text: "Se agregó un nuevo evento al formulario de Knoott",
  });
  if (data) {
    return true;
  } else {
    console.log("error");
  }
}
