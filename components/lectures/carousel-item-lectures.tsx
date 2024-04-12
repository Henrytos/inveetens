import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Palestra } from "./modal-list";

interface CarouselItemProps {
  palestra: Palestra;
}

import { CarouselItem } from "../ui/carousel";

export function CarouselItemLectures({ palestra }: CarouselItemProps) {
  return (
    <>
      <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
        <Dialog>
          <DialogTrigger className="w-full">
            {" "}
            <Image
              width={2000}
              height={2000}
              alt={palestra.title}
              src={palestra.src}
              className="block object-cover w-full h-64"
            />
          </DialogTrigger>
          <DialogContent className="max-w-screen-lg border-0">
            <DialogHeader>
              <DialogTitle>{palestra.title}</DialogTitle>
              <DialogDescription className="">
                <Image
                  width={3000}
                  height={3000}
                  alt={palestra.title}
                  src={palestra.src}
                  className=" object-cover w-full h-auto"
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CarouselItem>
    </>
  );
}
