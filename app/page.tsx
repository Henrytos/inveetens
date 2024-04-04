import { Summary } from "@/components/summary";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Marking } from "@/components/marking";
import { NavBar } from "@/components/nav-bar";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { Content } from "@/components/content";
import { SubTitle } from "@/components/sub-title";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";

interface Palestra {
  id: number;
  title: string;
  src: string;
}

export default function Home() {
  const palestraList = {
    2024: [
      {
        id: 1,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 2,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 3,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 4,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 5,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 6,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 7,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 8,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 9,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
    ],
    2023: [
      {
        id: 1,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 2,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 3,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 4,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 5,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 6,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 7,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 8,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 9,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
    ],
  };
  const quantity = palestraList[2024].length;
  const total = quantity + palestraList[2023].length;
  const size = (quantity / total) * 100;

  return (
    <>
      <NavBar />
      <Container>
        <section
          className=" flex items-center min-h-[80vh] relative"
          id="bg-home"
        >
          <span className="absolute  left-0 right-0 bg-black/60 z-10 w-full h-[80vh]" />
          <div className="z-20 px-2 sm:px-4 w-full md:w-1/2 space-y-3">
            <Title className="before:h-16 before:w-2 text-zinc-50">
              <Marking>Educação Financeira</Marking> &
              <Marking>Projeto de Vida para jovens</Marking>
            </Title>
            <Text className="text-zinc-50 ">
              Somos um projeto que visa ensinar, inspirar e levar esperança para
              a juventude brasileira, através da educação financeira,
              empreendedorismo e projeto de vida
            </Text>
          </div>
          <Summary />
        </section>
        <Content
          className="grid grid-cols-1 lg:grid-cols-2 gap-3 "
          id="palestras"
        >
          <div className="space-y-6">
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
                pilares fundamentais: apresentação de referências
                (personalidades inspiradoras) e projeto de vida.
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
        <Content>
          <Title>
            CONHEÇA O <Marking>PALESTRANTE</Marking>
          </Title>
          <div className="grid sm:grid-cols-3 h-auto  pt-8 gap-8">
            <span id="bg-deivid" className="h-96 col-span-3 sm:col-span-1" />
            <div className="col-span-3 sm:col-span-2 space-y-4 my-auto">
              <SubTitle>Deivyd Barros Jovem de 18 anos.</SubTitle>
              <Text>
                Estudante de escola pública, palestrante, investidor,
                co-escritor do livro
                <Marking isText={true}>
                  “Quem te disse que não é possível?”
                </Marking>
                , CPA10 pela Ambima, finalista do Prudential Emerging
                Visionaries, embaixador do Tino econômico e fundador da
                Investeens.
              </Text>
              <Text>
                Uma das minhas missões de vidas é levar informação de valor,
                inspiração e esperança para juventude brasileiro. Acredito
                fortemente que precisamos fazer os jovens acreditarem em seu
                próprio potencial! Em uma frase o que faço é investir na
                juventude brasileira!
              </Text>
            </div>
          </div>
        </Content>
        <Content>
          <Title>
            ONDE JÁ <Marking>PALESTRAMOS</Marking>
          </Title>
          <div className="py-4 space-y-4">
            <div className="flex justify-center gap-1 items-center">
              <span className="text-xl font-normal">2024</span>
              <X className="text-primary" />{" "}
              <span className="text-xl font-normal">2023</span>
            </div>
            <div className="h-2 w-full bg-primary-foreground relative">
              <span
                className={`h-2 left-0 top-0 block w-[${size}%] bg-primary z-10`}
              />
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl">
                Palestreas de 2024
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {palestraList[2024].map((palestra) => (
                  <Image
                    className="w-full h-80 object-cover"
                    src={palestra.src}
                    alt={`imagem de ${palestra.title}`}
                    width={400}
                    height={400}
                    key={palestra.id}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl">
                Palestreas de 2023
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {palestraList[2023].map((palestra) => (
                  <Image
                    className="w-full h-80 object-cover"
                    src={palestra.src}
                    alt={`imagem de ${palestra.title}`}
                    width={400}
                    height={400}
                    key={palestra.id}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Content>
        <Content className="space-y-8">
          <Title>
            <Marking>O QUE DIZEM</Marking> DA PALESTRA
          </Title>
          <section className="space-y-4 max-w-6xl m-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-primary/30  rounded-xl px-3 py-5 pb-4 border-primary-foreground border-2 shadow-xl  flex items-center">
                <Text>
                  Foi a primeira palestra sobre investimentos que eu vi e me deu
                  muita curiosidade e vontade de aprender mais sobre
                  investimentos.
                </Text>
              </div>
              <div className="bg-primary/30  rounded-xl px-3 py-5 pb-4 border-primary-foreground border-2 shadow-xl  flex items-center">
                <Text>
                  O compartilhamento sobre esse assunto, foi explicado e
                  aplicado de uma forma bem agradável (não maçante).
                </Text>
              </div>
              <div className="bg-primary/30  rounded-xl px-3 py-5 pb-4 border-primary-foreground border-2 shadow-xl  flex items-center">
                <Text>
                  Achei a palestra bem inspiradora e motivadora, gostei bastante
                  de aprender mais sobre investimentos.
                </Text>
              </div>
            </div>
            <div className="space-y-1">
              <iframe
                className="w-full m-auto h-96 sm:h-[600px]"
                src="https://www.youtube.com/embed/-bGncYrTb5c?si=9nVmwX3dU1bVqket"
                title="YouTube video player"
                frameBorder={"0"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <figcaption className="block text-center">
                Video do You tube
              </figcaption>
            </div>
          </section>
        </Content>
        <Content className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div className="bg-primary/30  rounded-xl px-3 py-5 pb-4 border-primary-foreground border-2 shadow-xl  flex items-center">
            <Text>
              90% dos jovens recomendariam para algum amigo ou familiar
            </Text>
          </div>
          <div className="bg-primary/30  rounded-xl px-3 py-5 pb-4 border-primary-foreground border-2 shadow-xl  flex items-center">
            <Text>96% dos jovens tem interesse em aprender a investir</Text>
          </div>
          <div className="bg-primary/30  rounded-xl px-3 py-5 pb-4 border-primary-foreground border-2 shadow-xl  flex items-center">
            <Text>
              99% disseram que entenderam mais da metade dos conteúdos abordados
            </Text>
          </div>
          <div className="bg-primary/30  rounded-xl px-3 py-5 pb-4 border-primary-foreground border-2 shadow-xl  flex items-center">
            <Text>
              82% dos jovens disseram ter adorado a didática das explicações
            </Text>
          </div>
        </Content>
        <Content className="space-y-8">
          <Title>
            Conquistas da <Marking>Investeens</Marking>
          </Title>
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="group h-96 relative">
              <Image
                src="/imgs/midia/prudential.webp"
                alt="premio"
                width={400}
                height={400}
                className="object-cover w-full h-full  transition-transform duration-300"
              />
              <div className="  flex flex-col justify-center absolute top-0 left-0 w-full h-full bg-transparent  group-hover:bg-black/70 group-hover:text-white transition-all px-5 gap-4">
                <SubTitle className="text-transparent group-hover:text-white  before:h-0 group-hover:before:h-12  transition-all">
                  Somos finalistas do Jovens Visionários (Prudential)
                </SubTitle>
                <Text className="text-transparent group-hover:text-white transition-all ">
                  O Prêmio Jovens Visionários Prudential é um programa de
                  reconhecimento internacional que premia jovens por suas
                  soluções inovadoras para desafios financeiros e sociais em
                  suas comunidades.
                </Text>
              </div>
            </div>
          </section>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
