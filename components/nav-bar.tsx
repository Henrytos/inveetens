import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import { ThemeToggle } from "@/app/_contexts/theme-togle";
export function NavBar() {
  return (
    <header className=" border-b border-foreground sticky top-0 bg-background z-40">
      <nav className="max-w-[1500px] m-auto flex justify-between items-center py-4  z-40  px-2 sm:px-4 md:px-8">
        <a href="#">
          <Image src="/imgs/icon.png" height={60} width={60} alt="logo tipo" />
        </a>
        <nav className="md:flex gap-5 items-center font-light text-sm hidden">
          <a className="cursor-pointer ">Quem somos</a>
          <a className="cursor-pointer ">Palestras</a>
          <a className="cursor-pointer ">Na Mídia</a>
          <a className="cursor-pointer ">Oportunidades</a>
          <a className="cursor-pointer ">Parceiros</a>
          <a className="cursor-pointer ">Contato</a>
          <ThemeToggle />
        </nav>

        <nav className="flex items-center gap-4 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-32">Section</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href="#home">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#palestras">Palestras</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#midia">Na Mídia</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#oportunidades">Oportunidades</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#parceiros">Parceiros</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="contato">Contato</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </nav>
      </nav>
    </header>
  );
}
