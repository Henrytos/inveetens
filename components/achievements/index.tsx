import { Content } from "../content";
import { Title } from "../title";
import { Marking } from "../marking";
import { AchievementsItem } from "./achievements-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export interface Conquista {
  title: string;
  text: string;
  link: string;
  srcImg: string;
}

export function Achievements() {
  const conquistas: Conquista[] = [
    {
      link: "https://www.prudential.com.br/jovens-visionarios",
      text: "O Prêmio Jovens Visionários Prudential é um programa de reconhecimento internacional que premia jovens por suas soluções inovadoras para desafios financeiros e sociais em suas comunidades.",
      title: "Somos finalistas do Jovens Visionários (Prudential)",
      srcImg: "/imgs/midia/prudential.webp",
    },
    {
      link: "https://www.infomoney.com.br/onde-investir/geracao-z-de-zero-risco-jovens-investem-cada-vez-mais-cedo-e-adoram-uma-renda-fixa/",
      text: "Deivyd Barros tinha apenas 14 anos quando ouviu falar de ações, bolsa de valores e investimentos pela primeira vez, após seu irmão mais velho comentar sobre formas de ter mais dinheiro. “Fiquei curioso. Comecei a ver vídeos e anotar tudo, de renda fixa a ações. Virei aquele chato que só falava de uma coisa”, conta o jovem, que hoje tem 18 anos e palestra sobre investimentos e educação financeira para alunos do Ensino Médio.",
      title: "Geração Z de “zero risco”",
      srcImg: "/imgs/midia/Deivyd.webp",
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
  ];

  return (
    <Content className="space-y-8" id="na-midia">
      <Title>
        Conquistas da <Marking>Investeens</Marking>
      </Title>
      <Carousel>
        <CarouselContent>
          {conquistas.map((conquista) => (
            <AchievementsItem conquista={conquista} key={conquista.link} />
          ))}
        </CarouselContent>
      </Carousel>
    </Content>
  );
}
