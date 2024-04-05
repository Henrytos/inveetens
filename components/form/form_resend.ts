"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY_RESEND);
const toEmail = process.env.NEXT_PUBLIC_EMAIL_FORM;

export async function formAction(formData: FormData) {
  const fromEmail = formData.get("email")?.toString();
  const name = formData.get("nome");
  const phone = formData.get("telefone");
  const message = formData.get("mensagem");

  console.log({ fromEmail });
  console.log({ fromEmail, name, phone, message, toEmail });

  if (
    fromEmail != null &&
    name != null &&
    phone != null &&
    message != null &&
    fromEmail != null
  ) {
    const { data, error } = await resend.emails.send({
      cc: [],
      to: ["franzhenry46@gmail.com"],
      bcc: [],
      from: fromEmail,
      html: `<p>${message}</p>`,
      tags: [],
      subject: "estou interessado em ser parceiro",
    });
    console.log("Sent email");
  } else {
    console.log("Missing data");
  }
}
