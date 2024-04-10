import { Content } from "../content";
import { Marking } from "../marking";
import { Text } from "../text";
import { Title } from "../title";

export function AboultLectures() {
  return (
    <>
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
                O compartilhamento sobre esse assunto, foi explicado e aplicado
                de uma forma bem agradável (não maçante).
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

        <Content className="grid grid-cols-1 sm:grid-cols-4 gap-2 h-auto pt-0">
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
      </Content>
    </>
  );
}
