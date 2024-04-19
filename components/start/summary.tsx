import { GraduationCap, Instagram, MicVocal, User } from "lucide-react";
import { Text } from "../text";

export function Summary() {
  return (
    <div className="w-full h-48 md:h-40  grid grid-cols-2 md:grid-cols-4 bg-background/70 absolute bottom-0 sm:bottom-5 md:bottom-10 z-20 ">
      <div className="flex items-center justify-center flex-col border-r border-secondary  ">
        <span className="font-medium text-2xl flex gap-2 items-center">
          <span className="text-xl sm:text-2xl">+90 mil</span>
          <Instagram className="translate-y-px sm:w-6 sm:h-6 w-5 h-5" />
        </span>
        <Text> seguidores nas redes sociais</Text>
      </div>
      <div className="flex items-center justify-center flex-col border-r border-secondary ">
        <span className="font-medium text-2xl flex gap-2 items-center">
          <span className="text-xl sm:text-2xl">+1.076</span>
          <User className="translate-y-px sm:w-6 sm:h-6 w-5 h-5" />
        </span>
        <Text>jovens impactados</Text>
      </div>
      <div className="flex items-center justify-center flex-col border-r border-secondary ">
        <span className="font-medium text-2xl flex gap-2 items-center">
          <span className="text-xl sm:text-2xl">+26</span>
          <MicVocal className="translate-y-px sm:w-6 sm:h-6 w-5 h-5" />
        </span>
        <Text>palestras realizadas</Text>
      </div>
      <div className="flex items-center justify-center flex-col  ">
        <span className="font-medium text-2xl flex gap-2 items-center">
          <span className="text-xl sm:text-2xl">+16</span>
          <GraduationCap className="translate-y-px sm:w-6 sm:h-6 w-5 h-5" />
        </span>
        <Text>escolas impactadas</Text>
      </div>
    </div>
  );
}
