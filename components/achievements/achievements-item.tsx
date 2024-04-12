import Image from "next/image";
import { Conquista } from ".";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Text } from "../text";
import { ButtonLink } from "../btn-link";

interface AchievementsItemProps {
  conquista: Conquista;
}
export function AchievementsItem({ conquista }: AchievementsItemProps) {
  return (
    <>
      <Dialog key={conquista.link}>
        <DialogTrigger asChild>
          <div
            className="group h-72 relative flex flex-col gap-2 m-auto"
            key={conquista.link}
          >
            <Image
              src={conquista.srcImg}
              alt={`image da ${conquista.title}`}
              width={400}
              height={400}
              className="object-cover h-64 w-64 transition-transform duration-300 rounded-full "
            />
            <figcaption className="absolute  bottom-0 w-full text-center font-bold bg-primary-foreground/50 text-primary">
              {conquista.title}
            </figcaption>
          </div>
        </DialogTrigger>
        <DialogContent className="border-0">
          <DialogHeader>
            <DialogTitle className="mb-4">{conquista.title}</DialogTitle>
            <DialogDescription className="space-y-4">
              <Image
                src={conquista.srcImg}
                alt={`image da ${conquista.title}`}
                width={400}
                height={400}
                className="object-cover  w-full transition-transform duration-300  "
              />
              <Text>{conquista.text}</Text>
              <ButtonLink href={conquista.link}>ver mais</ButtonLink>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
