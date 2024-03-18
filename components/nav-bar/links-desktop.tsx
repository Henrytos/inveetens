"use client";

import { ThemeToggle } from "@/app/_contexts/theme-togle";
import { NavLink } from "./nav-link";
import { useState } from "react";
import { MagicMotion } from "react-magic-motion";

interface Link {
  id: string;
  href: string;
  name: string;
}

export function LinksDesktop() {
  const [linkTargetHref, setLinkTargetHref] = useState<String>("#quem-somos");

  const links: Link[] = [
    {
      id: "0",
      href: "#quem-somos",
      name: "Quem somos",
    },
    {
      id: "1",
      href: "#palestras",
      name: "Palestrass",
    },
    {
      id: "2",
      href: "#na-midia",
      name: "Na midia",
    },
    {
      id: "3",
      href: "#oportunidades",
      name: "Oportunidades",
    },
    {
      id: "4",
      href: "#parceiros",
      name: "Parceiros ",
    },
    {
      id: "5",
      href: "#contato",
      name: "Constato",
    },
  ];

  const handleClickLink = (newPathTarget: String) => {
    setLinkTargetHref(newPathTarget);
  };
  return (
    <>
      <nav className="md:flex gap-5 items-center font-light text-sm hidden transition-all">
        {links.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            isActive={linkTargetHref == link.href}
            onClick={() => handleClickLink(link.href)}
          >
            {link.name}
          </NavLink>
        ))}
        <ThemeToggle />
      </nav>
    </>
  );
}
