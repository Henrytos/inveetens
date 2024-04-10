import { ComponentProps } from "react";

interface ContentInputProps extends ComponentProps<"div"> {}
export function ContentInput({ children }: ContentInputProps) {
  return <div className="space-y-2 relative">{children}</div>;
}
