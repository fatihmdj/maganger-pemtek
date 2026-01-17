import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ProgramCard from "./ProgramCard";
import ScrollingBar from "./ScrollingBar";

import data from "../../data/programs.json";

interface Program {
  category: string;
  title: string;
  description: string;
  image: string;
  titleColor: "blue" | "orange";
}

type ScrollingBarItem =
  | { type: "icon"; variant: "medkomExpand" | "pemtekExpand" }
  | { type: "text"; content: string };

const programsData: Program[] = data.programs as Program[];
const topBarItems = data.topBarItems as ScrollingBarItem[];
const bottomBarItems = data.bottomBarItems as ScrollingBarItem[];

const Programs = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const firstCard = container.children[0] as HTMLElement | undefined;
    if (!firstCard) return;

    const gap = 25;
    const cardWidth = firstCard.offsetWidth;
    const singleSetWidth = (cardWidth + gap) * programsData.length;

    gsap.set(container, { x: 0 });

    const animation = gsap.to(container, {
      x: -singleSetWidth,
      duration: programsData.length * 4,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (value) => {
          const xValue = parseFloat(value);
          const wrapped = xValue % singleSetWidth;
          return `${wrapped}px`;
        },
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="programs-section relative">
      <ScrollingBar items={[...topBarItems]} backgroundColor="#F17628" />

      <div className="bg-[#132971] py-16 pb-24">
        <div className="text-center px-4">
          <h2 className="text-white text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Program Kerja Maganger
          </h2>
          <p className="text-[#EAEFFF] text-2xl font-medium leading-8 max-w-[920px] mx-auto">
            Langkah kecil untuk dampak besar. Intip serangkaian program kerja
            yang telah kami eksekusi selama periode magang.
          </p>
        </div>

        <div className="overflow-hidden mt-16">
          <div
            ref={cardsContainerRef}
            className="flex gap-6 pl-6"
            style={{ width: "fit-content" }}
          >
            {programsData.map((program, index) => (
              <ProgramCard key={`set1-${index}`} {...program} />
            ))}
            {programsData.map((program, index) => (
              <ProgramCard key={`set2-${index}`} {...program} />
            ))}
            {programsData.map((program, index) => (
              <ProgramCard key={`set3-${index}`} {...program} />
            ))}
          </div>
        </div>
      </div>

      <ScrollingBar items={[...bottomBarItems]} backgroundColor="#2A5BFC" />
    </section>
  );
};

export default Programs;