"use client";

import { Infer } from "next/dist/compiled/superstruct";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Resend } from "resend";
import { formAction } from "./form_resend";

const schemaForm = z.object({
  nome: z.string().min(3).max(255),
  email: z.string().email(),
  telefone: z.string().min(10).max(15),
  mensagem: z.string().min(10).max(255),
});

export type Form = z.infer<typeof schemaForm>;

export function FormToEmail() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });

  const handleSubmitForm = (data: Form) => {
    formAction(data)
      .then((data) => {
        console.log(data.sucess);
      })
      .catch((data) => {
        console.log(data.error);
      });
    console.log(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Input {...register("nome")} placeholder="....." required />
        <Input {...register("email")} placeholder=".....@gmail.com" required />
        <Input {...register("telefone")} placeholder="+55....." required />
        <Textarea {...register("mensagem")} placeholder="....." required />
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
}
