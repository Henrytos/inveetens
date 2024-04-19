import { Marking } from "../marking";
import { Summary } from "./summary";
import { Text } from "../text";
import { Title } from "../title";

export function Start() {
  return (
    <section className=" flex items-center min-h-[80vh] relative" id="bg-home">
      <span className="absolute  left-0 right-0 bg-black/60 z-10 w-full h-[80vh]" />
      <div className="z-20 px-2 sm:px-4 w-full md:w-1/2 space-y-3">
        <Title className="before:h-16 before:w-2 text-zinc-50">
          <Marking>Realize seu sonhos através da educação financeira!</Marking>
        </Title>
        <Text className="text-zinc-50 ">
          Somos um projeto que visa ensinar, inspirar e levar esperança para a
          juventude brasileira, através da educação financeira, empreendedorismo
          e projeto de vida.
        </Text>
      </div>
      <Summary />
    </section>
  );
}
