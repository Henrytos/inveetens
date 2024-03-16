import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Marking } from "@/components/marking";
import { NavBar } from "@/components/nav-bar";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { GraduationCap, Instagram, MicVocal, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="">
        <section
          className="mt-4 flex items-center  relative h-[80vh]"
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

          <div className="w-full h-48 md:h-40  grid grid-cols-2 md:grid-cols-4 bg-background/70 absolute bottom-0 sm:bottom-5 md:bottom-10 z-20 ">
            <div className="flex items-center justify-center flex-col border-r border-secondary  ">
              <span className="font-medium text-2xl flex gap-2 items-center">
                <span className="text-xl sm:text-2xl">+90 mil</span>
                <Instagram className="translate-y-px sm:w-6 sm:h-6 w-5 h-5" />
              </span>
              <Text>seguidores nas redes sociais</Text>
            </div>
            <div className="flex items-center justify-center flex-col border-r border-secondary ">
              <span className="font-medium text-2xl flex gap-2 items-center">
                <span className="text-xl sm:text-2xl">+900</span>
                <User className="translate-y-px sm:w-6 sm:h-6 w-5 h-5" />
              </span>
              <Text>jovens impactados</Text>
            </div>
            <div className="flex items-center justify-center flex-col border-r border-secondary ">
              <span className="font-medium text-2xl flex gap-2 items-center">
                <span className="text-xl sm:text-2xl">+18</span>
                <MicVocal className="translate-y-px sm:w-6 sm:h-6 w-5 h-5" />
              </span>
              <Text>palestras realizadas</Text>
            </div>
            <div className="flex items-center justify-center flex-col  ">
              <span className="font-medium text-2xl flex gap-2 items-center">
                <span className="text-xl sm:text-2xl">+14</span>
                <GraduationCap className="translate-y-px sm:w-6 sm:h-6 w-5 h-5" />
              </span>
              <Text>escolas impactadas</Text>
            </div>
          </div>
        </section>
        <div className="min-h-screen"></div>
      </Container>
      <Footer />
    </>
  );
}
