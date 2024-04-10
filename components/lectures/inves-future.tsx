import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Text } from "../text";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { SubTitle } from "../sub-title";
import { Title } from "../title";
import { Marking } from "../marking";
import { Content } from "../content";

export function InvesFuture() {
  return (
    <>
      <Content
        className="grid grid-cols-1 lg:grid-cols-2 gap-3 "
        id="palestras"
      >
        <div className="space-y-8">
          <div className="space-y-3">
            <Title>
              PALESTRA <Marking>INVESTINDO NO FUTURO</Marking>{" "}
            </Title>
            <Text className="indent-2">
              O propósito da palestra é{" "}
              <Marking isText={true}>
                Disseminar conhecimento sobre finanças
              </Marking>
              e investimentos para jovens do 8º ano até o Ensino Médio. Além
              disso, valorizamos a soma da educação financeira com outros
              pilares fundamentais: apresentação de referências (personalidades
              inspiradoras) e projeto de vida.
            </Text>
          </div>

          <div className="space-y-3">
            <SubTitle>CONTEÚDO DA PALESTRA:</SubTitle>
            <ul className="pl-7 space-y-1 list-disc ">
              <li>Como administrar seu dinheiro</li>
              <li>Cartão de débito + Cartão de crédito</li>
              <li>Por que devemos investir?</li>
              <li>Juros simples x Juros Compostos</li>
              <li>Mentalidade financeira</li>
              <li>Como começar a investir?</li>
              <li>Renda fixa x Renda variável</li>
              <li>O poder do networking</li>
              <li>Importância de ter inspirações</li>
              <li>Espaço para tirar dúvidas</li>
            </ul>
            <Button
              asChild
              className="bg-background text-primary border-primary border hover:text-background "
            >
              <a
                href="https://api.whatsapp.com/send?phone=5511957279769&text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20da%20investeens%20e%20gostaria%20de%20uma%20palestra!"
                className="w-full space-x-2 "
                target="_blank"
              >
                <span>
                  {" "}
                  <FaWhatsapp size={24} />{" "}
                </span>
                <span className="font-bold">Quero uma Plaestra</span>
              </a>
            </Button>
          </div>
        </div>
        <div>
          <Dialog>
            <DialogTrigger className="w-full h-full">
              {" "}
              <Image
                src="/imgs/palestra-senai.webp"
                alt="palestras do senai"
                width={600}
                height={600}
                className="object-cover w-2/3 m-auto lg:m-0 lg:w-full lg:h-full h-auto"
                style={{
                  borderRadius: "2rem 0rem",
                }}
              />
            </DialogTrigger>
            <DialogContent className="px-2  lg:min-w-max  h-auto border-none sm:p-0">
              <Image
                src="/imgs/palestra-senai.webp"
                alt="palestras do senai"
                width={1000}
                height={1000}
                className="object-cover w-full h-auto "
              />
              <Text className=" bg-black/75 w-full absolute text-center  py-2 bottom-0 ">
                Palestra relizada no Senai
              </Text>
            </DialogContent>
          </Dialog>
        </div>
      </Content>
    </>
  );
}
