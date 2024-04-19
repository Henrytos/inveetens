import { Content } from "../content";
import { Marking } from "../marking";
import { Text } from "../text";
import { Title } from "../title";
import { Separator } from "../ui/separator";

export function AboultLectures() {
  return (
    <>
      <Content className="space-y-8">
        <div className="flex justify-center">
          <Title className="before:h-0">
            <Marking>O QUE DIZEM</Marking> DA PALESTRA
          </Title>
        </div>
        <Separator />
        <section className="grid grid-cols-6 gap-8">
          <div className="col-span-6 lg:col-span-2 max-[300px]:grid-cols-1 grid grid-cols-2 sm:grid-cols-3  lg:flex lg:flex-col lg:my-auto  gap-4">
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
                99% disseram que entenderam mais da metade dos conteúdos
                abordados
              </Text>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-4 space-y-1">
            <iframe
              className="w-full m-auto h-96 lg:h-[700px]"
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
    </>
  );
}
