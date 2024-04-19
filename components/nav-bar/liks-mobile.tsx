import { ThemeToggle } from "@/app/_contexts/theme-togle";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function LinksMobile() {
  return (
    <>
      <nav className="flex items-center gap-4 md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="w-28 flex items-center gap-1"
              variant={"outline"}
            >
              <ChevronDown className="translate-y-px w-6 h-6" />{" "}
              <span>Section</span>
            </Button>
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
              <a href="#contato">Contato</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
      </nav>
    </>
  );
}
