import { Link } from "lucide-react";
import { Button } from "./ui/button";
import { headers } from "next/headers";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonLinkProps extends ComponentProps<"a"> {}

export function ButtonLink({ className, ...props }: ButtonLinkProps) {
  return (
    <Button className={twMerge("flex items-center gap-2", className)} asChild>
      <a target="_blank" {...props}>
        <Link />
        <span>{props.children ? props.children : "Ver mais"}</span>
      </a>
    </Button>
  );
}
