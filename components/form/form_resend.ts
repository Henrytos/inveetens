"use server";

import { Resend } from "resend";
import { Form } from "./form_to_email";

export async function formAction(data: Form) {
  const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY_RESEND);
  const toEmail = process.env.NEXT_PUBLIC_EMAIL_FORM;
  const {
    nome: name,
    email: fromEmail,
    telefone: phone,
    mensagem: message,
  } = data;

  if (
    fromEmail != null &&
    name != null &&
    phone != null &&
    message != null &&
    fromEmail != null
  ) {
    const { data, error } = await resend.emails.send({
      cc: [],
      to: [toEmail?.toString() ?? ""],
      bcc: [],
      from: "onboarding@resend.dev",
      html: `Olá meu nome é ${name} e meu telefone é ${phone} e meu email:  ${fromEmail}<br><br>${message}`,
      tags: [],
      subject: `Formulário de contato de ${name}`,
    });
    return { sucess: "Email enviado com sucesso" };
  } else {
    return { error: "Missing data" };
  }
}
