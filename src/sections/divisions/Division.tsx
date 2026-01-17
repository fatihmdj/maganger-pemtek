import { useEffect } from "react";
import { Icon } from "@iconify/react";
import DataDivision from "../../data/divisions.json";
import gsap from "gsap";
import MedkomIcon from "../../assets/icons/MedkomIcon.avif";
import PemtekIcon from "../../assets/icons/PemtekIcon.avif";

const Division = () => {
  const iconMap: { [key: string]: string } = {
    medkom: MedkomIcon,
    pemtek: PemtekIcon,
  };

  useEffect(() => {
    const parents = gsap.utils.toArray(
      ".division-parent-card",
    ) as HTMLElement[];

    parents.forEach((parent) => {
      const imageCard = parent.querySelector(
        ".division-image-card",
      ) as HTMLElement;
      const titelCard = parent.querySelector(
        ".division-title-card",
      ) as HTMLElement;

      parent.addEventListener("mouseenter", () => {
        gsap.to(titelCard, {
          y: -160,
          duration: 0.5,
          ease: "back.out(1.3)",
        });
        gsap.to(imageCard, {
          top: "2rem",
          x: parent.clientWidth - imageCard.clientWidth - 3 * 22,
          scale: 0.8,
          duration: 0.5,
          ease: "back.out(1.3)",
        });
      });
      parent.addEventListener("mouseleave", () => {
        gsap.to(titelCard, {
          y: 0,
          duration: 0.5,
          ease: "back.out(1.3)",
        });
        gsap.to(imageCard, {
          top: "3rem",
          x: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.3)",
        });
      });
    });
  }, []);
  return (
    <div className="pt-32 pb-30 px-6">
      <div className="text-center pb-16">
        <h1 className="text-6xl font-black tracking-tight text-neutral-900">
          Our Core Divisions
        </h1>
        <h3 className="text-2xl font-medium text-neutral-500 py-6">
          Dua pilar utama penggerak inovasi BEM FATISDA
        </h3>
      </div>
      <div className="flex flex-col xl:flex-row items-center xl:justify-center gap-4 xl:gap-8">
        {DataDivision.map((division, index) => (
          <div
            key={index}
            className={`relative border border-neutral-200 transition-colors duration-300 w-full xl:w-150 h-105 rounded-3xl group division-parent-card cursor-pointer`}
            style={
              {
                "--text-color": division.textColor,
                "--card-bg": division.backgroundColor,
              } as React.CSSProperties
            }
          >
            <img
              src={iconMap[division.image]}
              alt="icon-medkom-bem-fatisda-uns"
              className="w-auto h-34 absolute top-12 left-12 division-image-card translate-x-0"
            />
            <div className="flex flex-col gap-2 absolute bottom-24 left-12 division-title-card">
              <h1
                className={`text-5xl sm:text-6xl font-black tracking-tight text-neutral-900 division-text`}
              >
                {division.name}
              </h1>
              <h3
                className={`text-lg font-medium text-neutral-500 division-text`}
              >
                "{division.tagline}"
              </h3>
            </div>
            <p
              className={`absolute bottom-26 pl-12 pr-24 max-w-160 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-100`}
              style={{
                color: division.textColor,
              }}
            >
              {division.description}
            </p>
            <div
              className={`text-neutral-400 division-text text-lg flex items-center gap-2 absolute bottom-8 left-12`}
            >
              <Icon icon={division.icon} />
              <span className="font-medium">{division.focus}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Division;
