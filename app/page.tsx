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
import { Link, X } from "lucide-react";
import { link } from "fs";
import { FormToEmail } from "@/components/form/form_to_email";

interface Palestra {
  id: number;
  title: string;
  src: string;
}

interface Conquista {
  title: string;
  text: string;
  link: string;
  srcImg: string;
}

interface Parceiro {
  srcImg: string;
  text: string;
  link: string;
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

  const conquistas: Conquista[] = [
    {
      link: "https://www.prudential.com.br/jovens-visionarios",
      text: "O Prêmio Jovens Visionários Prudential é um programa de reconhecimento internacional que premia jovens por suas soluções inovadoras para desafios financeiros e sociais em suas comunidades.",
      title: "Somos finalistas do Jovens Visionários (Prudential)",
      srcImg: "/imgs/midia/prudential.webp",
    },
    {
      title: "Matéria na Seduc",
      text: "Influenciador de finanças e medalhista na Olimpíada de Investimentos inspira jovens a lidar com dinheiro. Deivyd Barros de Sousa, de 18 anos de idade, concluiu o Ensino Médio neste ano e seu aprendizado sobre educação financeira tem transformado a sua vida e de outros jovens.",
      link: "https://www.educacao.sp.gov.br/influenciador-de-financas-e-medalhista-na-olimpiada-de-investimentos-estudante-de-osasco-inspira-outros-jovens-lidar-com-o-dinheiro/",
      srcImg: "/imgs/midia/seduc.webp",
    },
    {
      title: "Prêmio na feira do Sebrae",
      text: "Campeões da Arena de Games da Feira do Empreendedor do Sebrae-SP em 2022, os amigos Deivyd Sousa, Emily Carla da Silva, Eyshila Souza e Renan Luz Borges se organizaram novamente para tentar repetir o feito em 2023.",
      link: "https://sp.agenciasebrae.com.br/cultura-empreendedora/arena-de-games-trabalha-habilidades-na-feira-do-empreendedor/",
      srcImg: "/imgs/midia/sebrae.webp",
    },

    {
      title: "Semana da Imprensa",
      text: "A Semana da Imprensa 2023 foi realizada entre os dias 13 e 14 de setembro. Uma iniciativa dos jornais Joca e TINO Econômico.",
      link: "https://www.youtube.com/watch?v=1JCSaptDDdw&t=60s",
      srcImg: "/imgs/midia/semana-imprensa.webp",
    },

    {
      title: "Conversa com o prefeito de Osasco",
      text: "A equipe fundadora da Investeens conversa com o prefeito de Osasco para alinhamento de projetos e futuras parcerias.",
      link: "https://grupoifj.com.br/",
      srcImg: "/imgs/midia/conversa-prefeito.webp",
    },
    {
      title: "Tino Econômico",
      text: "Deivyd Barros, o jovem que ensina finanças na internet. Desde os 13 anos leva educação financeira para os seus colegas, professores seguidores.",
      link: "https://www.tinoeconomico.com.br/deivyd-barros-o-jovem-que-ensina-financas-na-internet/",
      srcImg: "/imgs/midia/seduc.webp",
    },
    {
      title: "Conversa com o prefeito de Osasco",
      text: "Nas periferias, jovens visionários vão além das práticas convencionais das salas de aula, explorando novos caminhos através dos estudos sobre finanças e empreendedorismo. Com determinação, esses jovens superam os obstáculos,por meio do conhecimento.",
      link: "https://jornalaborda.com.br/inspiracao-juvenil-educacao-financeira-em-osasco/",
      srcImg: "/imgs/midia/jornal-aborda.webp",
    },
  ];

  const parceiros: Parceiro[] = [
    {
      link: "https://www.tangrameducacao.com/",
      srcImg: "/imgs/logo_tino_economico.png",
      text: "A parceria entre Tino Econômico (Primeiro jornal de economia para jovens do Brasil) e Investeens consiste em levarmos educação financeira para estudantes do 8ºAno até o 3º do Ensino Médio por meio de bate papos dentro das instituições escolares públicas e privadas pelo Brasil. ",
    },
    {
      link: "https://www.tangrameducacao.com/",
      srcImg: "/imgs/logo_tangram.png",
      text: "A parceria entre a Tangram (Duolingo da educação financeira) e a Investeens consiste na divulgação e produção de materiais para as mídias digitais, com finalidade de divulgação e construção da maior olimpíada de educação financeira que o Brasil já teve. ",
    },
    {
      link: "https://www.tangrameducacao.com/",
      srcImg: "/imgs/logo_futuro_para_todos.png",
      text: "A parceria entre o Instituto Futuro para Todos e a Investeens, consiste no auxilio através de mentorias para o Comitê Jovem do instituto - Sendo assim a Investeens atualmente a Embaixadora oficial do comitê jovem de forma nacional. ",
    },
  ];

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
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {conquistas.map((conquista) => (
              <div
                className="group h-72 sm:h-auto  relative"
                key={conquista.link}
              >
                <Image
                  src={conquista.srcImg}
                  alt={`image da ${conquista.title}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full  transition-transform duration-300"
                />
                <figcaption className="absolute -bottom-6 w-full text-center">
                  {conquista.title}
                </figcaption>
                <div className="  flex flex-col justify-center absolute top-0 left-0 w-full h-full bg-transparent  group-hover:bg-black/70 group-hover:text-white transition-all px-5 gap-4">
                  <SubTitle className="text-transparent group-hover:text-white  before:h-0 group-hover:before:h-12  transition-all">
                    {conquista.title}
                  </SubTitle>
                  <Text className="text-transparent group-hover:text-white transition-all ">
                    {conquista.text}
                  </Text>
                  <Button
                    className="invisible group-hover:visible transition-all flex items-center gap-2"
                    asChild
                  >
                    <a href={conquista.link} target="_blank">
                      <Link />
                      <span>Ver mais</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </section>
        </Content>
        <Content className="space-y-8">
          <Title>
            <Marking>PARCEIROS</Marking>
          </Title>
          <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4">
            {parceiros.map((parceiro) => (
              <div
                className="flex flex-col justify-between gap-4 p-4 border-primary-foreground border-2 rounded-xl"
                key={parceiro.link}
              >
                <div>
                  <Image
                    className="object-cover h-40"
                    width={400}
                    height={200}
                    alt="logo de um parceiro de invessteen"
                    src={parceiro.srcImg}
                  />
                  <Text className="text-justify">{parceiro.text}</Text>
                </div>
                <Button className="  flex items-center gap-2" asChild>
                  <a href={parceiro.link} target="_blank">
                    <Link />
                    <span>Ver mais</span>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </Content>
        <Content className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-20">
          <div className="flex flex-col justify-center  gap-4 h-full relative">
            <Title className="absolute top-0 left-0">
              SEJA NOSSO <Marking>PARCEIRO</Marking>
            </Title>
            <Text className="text-center text-xl">
              Tem uma ideia inovadora ou{" "}
              <Marking isText={true}>quer uma palestra da Investeens</Marking>{" "}
              na sua escola ou empresa?
            </Text>
            <Text className="text-center text-xl">
              Nos envie uma mensagem e responderemos assim que possível!
              <Marking isText={true}> inves.teens@outlook.com</Marking>
            </Text>
          </div>

          <FormToEmail />
        </Content>
      </Container>
      <Footer />
    </>
  );
}
