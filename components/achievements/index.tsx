import { Content } from "../content";
import { Title } from "../title";
import { Marking } from "../marking";
import { AchievementsItem } from "./achievements-item";

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

  return (
    <Content className="space-y-8" id="na-midia">
      <Title>
        Conquistas da <Marking>Investeens</Marking>
      </Title>
      <section className="flex flex-wrap">
        {conquistas.map((conquista) => (
          <AchievementsItem conquista={conquista} key={conquista.link} />
        ))}
      </section>
    </Content>
  );
}
