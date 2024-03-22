import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/_contexts/theme-provider";
import { sans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Inveteens",
  description:
    "Somos um projeto que visa ensinar, inspirar e levar esperança para a juventude brasileira, através da educação financeira, empreendedorismo e projeto de vida",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
        <head />
        <body
          className={cn(
            "text-foreground  font-sans antialiased  bg-background relative",
            sans.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
