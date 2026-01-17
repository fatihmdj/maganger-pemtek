import MedkomLogo from "../../assets/logo/Medkom.avif";
import PemtekLogo from "../../assets/logo/Pemtek.avif";

const About = () => {
  return (
    <div className="flex flex-col gap-12 lg:gap-4 lg:flex-row justify-between max-w-7xl mx-auto px-14 py-24">
      <div>
        <div className="text-4xl sm:text-5xl xl:text-6xl font-black text-black">
          <h1 className="">Tentang Kemenko</h1>
          <h1 className="mt-1 lg:mt-4 text-black">
            <span className="text-blue-700">Med</span>tek
          </h1>
        </div>
        <div className="w-64 h-1.5 mt-6 lg:mt-14 mb-10 rounded-full bg-amber-200 slash-line" />
        <div className="text-lg text-neutral-500 font-medium max-w-full lg:max-w-140 flex flex-col gap-8">
          <p>
            Kemenko Media dan Teknologi adalah garda terdepan informasi dan
            digitalisasi BEM FATISDA. Kami tidak hanya menyampaikan berita,
            tetapi kami merancang pengalaman.
          </p>
          <p>
            Dari visual yang memukau hingga sistem teknologi yang efisien, kami
            hadir untuk menghubungkan mahasiswa dengan birokrasi melalui cara
            yang kreatif dan inovatif.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-center w-full h-68 bg-white rounded-xl px-8 py-12 gap-8 border border-neutral-100">
          <img
            src={MedkomLogo}
            alt="Logo media dan komunikasi"
            className="h-full w-fit"
          />
          <img
            src={PemtekLogo}
            alt="Logo pengembangan teknologi"
            className="h-full w-fit"
          />
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex-1 rounded-xl text-center bg-white border border-neutral-100 py-6">
            <h1 className="text-7xl font-black text-blue-700">15</h1>
            <h4 className="text-neutral-400 font-medium text-lg mt-1">
              Program Kerja
            </h4>
          </div>
          <div className="flex-1 rounded-xl text-center bg-white border border-neutral-100 py-6">
            <h1 className="text-7xl font-black text-amber-600">15</h1>
            <h4 className="text-neutral-400 font-medium text-lg mt-1">
              Peserta Maganger
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
