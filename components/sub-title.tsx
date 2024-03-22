import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SubTitleProps extends ComponentProps<"h2"> {}
export function SubTitle({ children, className }: SubTitleProps) {
  return (
    <h2
      className={twMerge(
        "text-lg before:w-1 before:h-6 before:bg-primary/75  before:block flex gap-2 items-center text-foreground font-normal uppercase",
        className
      )}
    >
      {" "}
      {children}
    </h2>
  );
}
