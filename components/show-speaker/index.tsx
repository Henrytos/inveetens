import { ButtonLink } from "../btn-link";
import { Content } from "../content";
import { Marking } from "../marking";
import { SubTitle } from "../sub-title";
import { Text } from "../text";
import { Title } from "../title";

export function ShowSpeaker() {
  return (
    <Content>
      <Title>
        CONHEÇA O <Marking>PALESTRANTE..</Marking>
      </Title>
      <div className="grid sm:grid-cols-3 h-auto  pt-8 gap-8">
        <span id="bg-deivid" className="h-96 col-span-3 sm:col-span-1" />
        <div className="col-span-3 sm:col-span-2 space-y-4 my-auto">
          <SubTitle>Deivyd Barros </SubTitle>
          <span className="text-xs font-light">Jovem de 18 anos</span>
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
          <ButtonLink
            href="https://www.amazon.com.br/Quem-disse-que-n%C3%A3o-poss%C3%ADvel/dp/6500935322/ref=sr_1_1?crid=1KI7FNGYZZGJD&dib=eyJ2IjoiMSJ9.1l6UvPbdLafq_5eKiq-UO4F-ljaXSWQirk0FcX5wZ_S3jqRvKvJIRgqLPCVmrAFxGOx6BtTDhUc1DhCTqtFbxzp4BBVwiPlTwUHO8WbmT3HzqFh1loruFyEXh1r-OTpZgOpefyg4XXSNoNJfu40SuwC7brZKdkiFkmjUijDIx62vtnr79HRbA3jzlUrDGXTM87Y-RFBLCa59d-Mb1SPslOyz9cJv9UkKOYwlNH-1as7wRlClkEsrPl1FvizfOO0JQoQIpQxoojO3lzQuzI0TwDVpZmYGXacKxSdpVWzQLFs.41ds-JJ9fj1kljfCdRnb1eU-m4Fe_DarIF71HZ7_sps&dib_tag=se&keywords=quem+te+disse+que+n%C3%A3o+%C3%A9+poss%C3%ADvel&qid=1713547059&sprefix=quem+te+dis%2Caps%2C548&sr=8-1"
            target="_blank"
          ></ButtonLink>
        </div>
      </div>
    </Content>
  );
}
