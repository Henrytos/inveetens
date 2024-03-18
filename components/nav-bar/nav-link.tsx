import clsx from "clsx";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface NavLinkProps extends ComponentProps<"a"> {
  isActive?: boolean;
}
export function NavLink({
  children,
  className,
  isActive,
  ...props
}: NavLinkProps) {
  return (
    <a
      className={twMerge(
        clsx(
          "cursor-pointer transition-colors duration-300  py-2 px-1 border-b-2 border-transparent hover:border-primary/50",
          {
            "border-b-2 border-primary hover:border-primary font-medium":
              isActive,
            "text-foreground/70": !isActive,
          }
        ),
        className
      )}
      {...props}
    >
      {children}{" "}
    </a>
  );
}
