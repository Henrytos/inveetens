"use client";
import Image from "next/image";
import { Content } from "../content";
import { Title } from "../title";
import { Marking } from "../marking";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

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

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Content className="space-y-8">
        <Title>
          ONDE JÁ <Marking>PALESTRAMOS</Marking>
        </Title>

        <section>
          <Carousel
            className="w-[90%] m-auto"
            plugins={[
              Autoplay({
                delay: 10000,
              }),
            ]}
            setApi={setApi}
          >
            <CarouselContent>
              {palestraList[2024].map((palestra) => (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3 "
                  key={palestra.src}
                >
                  <Dialog>
                    <DialogTrigger>
                      {" "}
                      <Image
                        width={2000}
                        height={2000}
                        alt={palestra.title}
                        src={palestra.src}
                        className="object-cover w-full h-full"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{palestra.title}</DialogTitle>
                        <DialogDescription>{palestra.title}</DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
        </section>
      </Content>
    </>
  );
}
