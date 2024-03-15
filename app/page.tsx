import Image from "next/image";
import { ThemeToggle } from "./contexts/theme-togle";

export default function Home() {
  return (
    <main className="bg-background">
      <h1>
        henry
      </h1>
      <ThemeToggle/>
    </main>
  );
}
