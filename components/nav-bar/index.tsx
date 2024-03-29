"use client";
import Image from "next/image";

import { LinksDesktop } from "./links-desktop";
import { useScroll, motion } from "framer-motion";
import { LinksMobile } from "./liks-mobile";
export function NavBar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <header className="  sticky top-0 bg-background z-40">
        <nav className="max-w-[1500px] m-auto flex justify-between items-center py-4  z-40  px-2 sm:px-4 md:px-8">
          <a href="#">
            <Image
              src="/imgs/icon.png"
              height={40}
              width={40}
              className="w-10 h-10 object-cover sm:w-16 sm:h-16"
              alt="logo tipo"
            />
          </a>
          <LinksDesktop />
          <LinksMobile />
        </nav>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="bg-primary h-2"
        />
      </header>
    </>
  );
}
