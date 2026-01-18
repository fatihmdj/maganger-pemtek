"use client";
import NavigationLinks from "./NavigationLinks";
import MedtekLogo from "../../assets/logo/Medtek.avif";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-6 max-w-410 mx-auto">
      <div>
        <img
          src={MedtekLogo}
          alt="Logo-Medtek-BEM-Fatisda-UNS"
          className="w-auto h-8"
        />
      </div>
      <div className="hidden sm:block">
        <NavigationLinks />
      </div>
      <div className="relative sm:hidden">
        <button
          className="py-2 px-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon="mdi:menu" className="text-2xl text-neutral-900" />
        </button>
        <div
          className={`${isMenuOpen ? "fixed" : "hidden"} top-16 left-0 w-full z-20 bg-white px-6 pt-4 pb-8 border-b-2 border-b-neutral-200`}
        >
          <NavigationLinks isMobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
