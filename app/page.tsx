import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { Toaster } from "@/components/ui/toaster";
import { ListOfLectures } from "@/components/lectures/modal-list";
import { AboultLectures } from "@/components/lectures/about-lectures";
import { Achievements } from "@/components/achievements";
import { Partners } from "@/components/partners";
import { ShowSpeaker } from "@/components/show-speaker";
import { InvesFuture } from "@/components/lectures/inves-future";
import { BeOne } from "@/components/partners/be-one";
import { Start } from "@/components/start";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Start />
        <InvesFuture />
        <ShowSpeaker />
        <ListOfLectures />
        <AboultLectures />
        <Achievements />
        <Partners />
        <BeOne />
        <Toaster />
      </Container>
      <Footer />
    </>
  );
}
