import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <div className="w-full pt-32 pb-42 bg-boxed-pattern">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-1 w-fit pt-2 pb-3 pr-6 pl-4 rounded-full bg-blue-100 text-blue-700">
          <Icon icon="icon-park-outline:dot" className="w-auto h-5" />
          <h1 className="font-medium text-lg">The Catalyst Of Innovation</h1>
        </div>
        <div className="text-center flex flex-col gap-10 mt-12">
          <h1 className="text-7xl font-black text-neutral-900">
            Wajah Baru di Balik Layar
          </h1>
          <p className="text-xl font-medium text-neutral-500 max-w-212">
            Memperkenalkan Maganger Kemenko Media & Teknologi BEM FATISDA 2025.
            Sinergi antara kreativitas visual dan inovasi teknologi untuk
            menyuarakan aspirasi fakultas.
          </p>
        </div>
        <div className="flex gap-4 mt-16">
          <button className="cursor-pointer text-lg bg-blue-700 text-blue-50 font-medium pr-6 pl-7 py-3 rounded-full flex items-center gap-2 drop-shadow-md">
            Explore Team
            <Icon icon="mingcute:arrow-right-fill" />
          </button>
          <button className="cursor-pointer text-lg text-blue-700 font-medium hover:bg-blue-100 px-6 py-3 rounded-full">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
