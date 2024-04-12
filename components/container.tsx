import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface ContainerProps extends ComponentProps<"section"> {}

export function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={twMerge(
        "w-full max-w-[1440px]  px-2 sm:px-8  m-auto ",
        className
      )}
    >
      {children}
    </section>
  );
}
