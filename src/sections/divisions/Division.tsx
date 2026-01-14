import { Icon } from "@iconify/react";

const Division = () => {
  return (
    <div className="pt-32 pb-30">
      <div className="text-center pb-16">
        <h1 className="text-6xl font-black tracking-tight text-neutral-900">
          Our Core Divisions
        </h1>
        <h3 className="text-2xl font-medium text-neutral-500 py-6">
          Dua pilar utama penggerak inovasi BEM FATISDA
        </h3>
      </div>
      <div className="flex justify-center gap-16">
        <div className="border border-neutral-200 pb-8 pt-12 pl-12 w-150 rounded-3xl">
          <img
            src="/icons/MedkomIcon.png"
            alt="icon-medkom-bem-fatisda-uns"
            className="w-auto h-34"
          />
          <div className="flex flex-col gap-2 mt-10">
            <h1 className="text-6xl font-black tracking-tight text-neutral-900">
              Medkom
            </h1>
            <h3 className="text-lg font-medium text-neutral-500">
              "The Voice & The Vision"
            </h3>
          </div>
          <p className="hidden">
            Bertanggung jawab atas branding, desain grafis, videografi, dan
            manajemen media sosial. Mereka adalah pencerita yang memastikan
            setiap pesan BEM terdengar lantang dan estetik.
          </p>
          <div className="text-neutral-400 text-lg flex items-center gap-2 mt-8">
            <Icon icon="fluent:megaphone-12-filled" />
            <span className="font-medium">Social Media & Branding</span>
          </div>
        </div>
        <div className="border border-neutral-200 pb-8 pt-12 pl-12 w-150 rounded-3xl">
          <img
            src="/icons/PemtekIcon.png"
            alt="icon-pemtek-bem-fatisda-uns"
            className="w-auto h-34"
          />
          <div className="flex flex-col gap-2 mt-10">
            <h1 className="text-6xl font-black tracking-tight text-neutral-900">
              Pemtek
            </h1>
            <h3 className="text-lg font-medium text-neutral-500">
              "The Architects of Digital Ecosystem"
            </h3>
          </div>
          <p className="hidden">
            Bertanggung jawab atas branding, desain grafis, videografi, dan
            manajemen media sosial. Mereka adalah pencerita yang memastikan
            setiap pesan BEM terdengar lantang dan estetik.
          </p>
          <div className="text-neutral-400 text-lg flex items-center gap-2 mt-8">
            <Icon icon="mingcute:code-fill" className="text-xl" />
            <span className="font-medium">Web & App Development</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Division;
