import { ComponentProps } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface MessageErrorFieldProps extends ComponentProps<"span"> {
  isError: FieldError | undefined;
}
export function MessageErrorField({
  isError,
  children,
  className,
  ...props
}: MessageErrorFieldProps) {
  return (
    isError && (
      <span
        className={twMerge(
          "text-red-700 absolute -bottom-6 text-sm font-light",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  );
}
