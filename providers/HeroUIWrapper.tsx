"use client";
import { HeroUIProvider } from "@heroui/react";
import React from "react";

const HeroUIWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <HeroUIProvider>{children}</HeroUIProvider>
    </div>
  );
};

export default HeroUIWrapper;
