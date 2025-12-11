import Image from "next/image";
import React from "react";

const HomeJumbotronBigPicture = () => {
  return (
    <div className="w-[560px] h-[360px] rounded-lg overflow-hidden bg-red-400 flex items-center justify-center">
      <Image
        src="/img/fotbar.jpeg"
        alt="foto bersama anggota media dan teknologi bem fatisda"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
};

export default HomeJumbotronBigPicture;
