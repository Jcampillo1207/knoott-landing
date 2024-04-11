"use server";

import { Resend } from "resend";

export default async function send(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "Knoott <waitlist@knoott.com>",
    to: [email],
    subject: "Hello world",
    text: "This is the email body in plain text.",
  });
}
