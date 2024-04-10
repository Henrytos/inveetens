"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Resend } from "resend";
import { formAction } from "./form_resend";
import { useToast } from "../ui/use-toast";
import { Label } from "../ui/label";
import { ContentInput } from "./content-input";
import { Send } from "lucide-react";
import { MessageErrorField } from "./message-error-filed";
import { useEffect } from "react";
import { normalizePhoneNumber } from "./masks-nput";

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
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<Form>({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });
  const { toast } = useToast();

  const handleSubmitForm = (data: Form) => {
    formAction(data)
      .then((data) => {
        toast({
          title: "Email enviado com sucesso",
          description: "",
          duration: 1000,
        });
        reset();
      })
      .catch((data) => {
        console.log(data.error);
      });
  };

  const phoneValue = watch("telefone");

  useEffect(() => {
    setValue("telefone", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  return (
    <>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <ContentInput>
          <Label htmlFor="nome">Nome</Label>
          <Input {...register("nome")} name="nome" placeholder="....." />
          <MessageErrorField isError={errors.nome}>
            o nome deve conter no minico 3 caracteres
          </MessageErrorField>
        </ContentInput>
        <ContentInput>
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} placeholder=".....@gmail.com" />
          <MessageErrorField isError={errors.email}>
            email invalido
          </MessageErrorField>
        </ContentInput>
        <ContentInput>
          <Label htmlFor="telefone">Numero</Label>
          <Input {...register("telefone")} placeholder="+55....." />
          <MessageErrorField isError={errors.telefone}>
            numero invalido
          </MessageErrorField>
        </ContentInput>
        <ContentInput>
          <Label htmlFor="mensagem">Mensagem:</Label>
          <Textarea {...register("mensagem")} placeholder="....." />
          <MessageErrorField isError={errors.mensagem}>
            a mensagem deve conter no minimo 10 caracteres
          </MessageErrorField>
        </ContentInput>
        <Button
          type="submit"
          className="space-x-3 mt-4"
          disabled={isSubmitting}
        >
          <Send />
          <span>Enviar</span>
        </Button>
      </form>
    </>
  );
}
