import { Content } from "../content";
import { Marking } from "../marking";
import { SubTitle } from "../sub-title";
import { Text } from "../text";
import { Title } from "../title";

export function ShowSpeaker() {
  return (
    <Content>
      <Title>
        CONHEÇA O <Marking>PALESTRANTE</Marking>
      </Title>
      <div className="grid sm:grid-cols-3 h-auto  pt-8 gap-8">
        <span id="bg-deivid" className="h-96 col-span-3 sm:col-span-1" />
        <div className="col-span-3 sm:col-span-2 space-y-4 my-auto">
          <SubTitle>Deivyd Barros Jovem de 18 anos.</SubTitle>
          <Text>
            Estudante de escola pública, palestrante, investidor, co-escritor do
            livro
            <Marking isText={true}>“Quem te disse que não é possível?”</Marking>
            , CPA10 pela Ambima, finalista do Prudential Emerging Visionaries,
            embaixador do Tino econômico e fundador da Investeens.
          </Text>
          <Text>
            Uma das minhas missões de vidas é levar informação de valor,
            inspiração e esperança para juventude brasileiro. Acredito
            fortemente que precisamos fazer os jovens acreditarem em seu próprio
            potencial! Em uma frase o que faço é investir na juventude
            brasileira!
          </Text>
        </div>
      </div>
    </Content>
  );
}
