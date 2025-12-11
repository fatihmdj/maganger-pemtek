"use client";
import Image from "next/image";
import React from "react";

const HomeHeaderLogo = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src="/logo/pemtek.png"
        alt="Logo divisi pengembangan teknologi BEM Fatisda UNS"
        width={60}
        height={1}
      />
      <div className="flex flex-col text-neutral-500 text-sm -mt-1">
        <span>Kementerian Pengembangan Teknologi</span>
        <span className="text-lg font-bold text-neutral-600">
          BEM FATISDA UNS
        </span>
      </div>
    </div>
  );
};

export default HomeHeaderLogo;
