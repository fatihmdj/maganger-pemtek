import { useEffect } from "react";
import DataDivision from "../../data/divisions.json";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const Division = () => {
  useEffect(() => {
    const parents = gsap.utils.toArray(
      ".division-parent-card"
    ) as HTMLElement[];

    parents.forEach((parent) => {
      const imageCard = parent.querySelector(
        ".division-image-card"
      ) as HTMLElement;
      const titelCard = parent.querySelector(
        ".division-title-card"
      ) as HTMLElement;

      parent.addEventListener("mouseenter", () => {
        gsap.to(titelCard, {
          bottom: "15rem",
          duration: 0.5,
          ease: "back.out(1.3)",
        });
        gsap.to(imageCard, {
          top: "2rem",
          left: "28rem",
          scale: 0.8,
          duration: 0.5,
          ease: "back.out(1.3)",
        });
      });
      parent.addEventListener("mouseleave", () => {
        gsap.to(titelCard, {
          bottom: "6rem",
          duration: 0.5,
          ease: "back.out(1.3)",
        });
        gsap.to(imageCard, {
          top: "3rem",
          left: "3rem",
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.3)",
        });
      });
    });
  }, []);
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
      <div className="flex justify-center gap-8">
        {DataDivision.map((division, index) => (
          <div
            key={index}
            className={`relative border border-neutral-200 hover:bg-${division.backgroundColor} transition-colors duration-300 w-150 h-105 rounded-3xl group division-parent-card`}
          >
            <img
              src={division.image}
              alt="icon-medkom-bem-fatisda-uns"
              className="w-auto h-34 absolute top-12 left-12 division-image-card"
            />
            <div className="flex flex-col gap-2 absolute bottom-24 left-12 division-title-card">
              <h1
                className={`text-6xl font-black tracking-tight text-neutral-900 group-hover:text-${division.textColor}`}
              >
                {division.name}
              </h1>
              <h3
                className={`text-lg font-medium text-neutral-500 group-hover:text-${division.textColor}`}
              >
                "{division.tagline}"
              </h3>
            </div>
            <p
              className={`absolute bottom-26 pl-12 pr-24 text-lg font-medium text-${division.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-100`}
            >
              {division.description}
            </p>
            <div
              className={`text-neutral-400 group-hover:text-${division.textColor} text-lg flex items-center gap-2 absolute bottom-8 left-12`}
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
