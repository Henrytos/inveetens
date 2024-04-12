import Image from "next/image";
import { Text } from "../text";
import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { Content } from "../content";
import { Title } from "../title";
import { Marking } from "../marking";
import { ButtonLink } from "../btn-link";

interface Parceiro {
  srcImg: string;
  text: string;
  link: string;
}

export function Partners() {
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
    <Content className="space-y-8" id="parceiros">
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
            <ButtonLink href={parceiro.link}>Ver mais</ButtonLink>
          </div>
        ))}
      </div>
    </Content>
  );
}
