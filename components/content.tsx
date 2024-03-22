import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ContentProps extends ComponentProps<"div"> {}
export function Content({ children, className, ...props }: ContentProps) {
  return (
    <div className={twMerge("py-10", className)} {...props}>
      {children}
    </div>
  );
}
