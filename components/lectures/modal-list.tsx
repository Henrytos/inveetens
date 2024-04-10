import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { X } from "lucide-react";
import { Content } from "../content";
import { Title } from "../title";
import { Marking } from "../marking";

interface Palestra {
  id: number;
  title: string;
  src: string;
}

interface PalestraList {
  2024: Palestra[];
  2023: Palestra[];
}

export function ListOfLectures() {
  const palestraList: PalestraList = {
    2024: [
      {
        id: 1,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 2,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 3,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 4,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 5,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 6,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 7,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 8,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 9,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
    ],
    2023: [
      {
        id: 1,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 2,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 3,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 4,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 5,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 6,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 7,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 8,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
      {
        id: 9,
        src: "/imgs/palestra-senai.webp",
        title: "Plaestra no senai",
      },
    ],
  };
  const quantity = palestraList[2024].length;
  const total = quantity + palestraList[2023].length;
  const size = (quantity / total) * 100;

  return (
    <>
      <Content>
        <Title>
          ONDE JÁ <Marking>PALESTRAMOS</Marking>
        </Title>

        <div className="py-4 space-y-4">
          <div className="flex justify-center gap-1 items-center">
            <span className="text-xl font-normal">2024</span>
            <X className="text-primary" />{" "}
            <span className="text-xl font-normal">2023</span>
          </div>
          <div className="h-2 w-full bg-primary-foreground relative">
            <span
              className={`h-2 left-0 top-0 block w-[${size}%] bg-primary z-10`}
            />
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Palestreas de 2024
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {palestraList[2024].map((palestra) => (
                <Image
                  className="w-full h-80 object-cover"
                  src={palestra.src}
                  alt={`imagem de ${palestra.title}`}
                  width={400}
                  height={400}
                  key={palestra.id}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              Palestreas de 2023
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {palestraList[2023].map((palestra) => (
                <Image
                  className="w-full h-80 object-cover"
                  src={palestra.src}
                  alt={`imagem de ${palestra.title}`}
                  width={400}
                  height={400}
                  key={palestra.id}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Content>
    </>
  );
}
