import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import bts from "../../data/bts.json";

gsap.registerPlugin(ScrollTrigger);


interface CardItemProps {
  img: string;
  title: string;
  date: string;
  className?: string;
  style?: React.CSSProperties;
  onTap?: () => void;
  isActive?: boolean;
}

const CardItem: React.FC<CardItemProps> = ({
  img,
  title,
  date,
  className = "",
  style,
  onTap,
  isActive = false,
}) => (
  <div
    style={style}
    className={`bts-card group relative overflow-hidden rounded-2xl shadow-lg ${className}`}
    onClick={onTap}
  >
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover object-top transition-all duration-500
        group-hover:scale-105"
    />

    <div
      className={`absolute inset-0 transition-all duration-500
        ${isActive ? "bg-black/50" : "bg-black/0"}
        group-hover:bg-black/50`}
    />

    <div
      className={`absolute bottom-0 left-0 right-0 p-5 text-white transition-all duration-500
        ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        group-hover:translate-y-0 group-hover:opacity-100`}
    >
      <h3 className="text-lg font-bold tracking-wide">{title}</h3>
      <div className="flex items-center gap-2 text-sm text-gray-200 mt-1">
        <Icon icon = "material-symbols:calendar-today-outline-rounded size={16}" />
        <span>{date}</span>
      </div>
    </div>
  </div>
);

const BehindTheScenes = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bts-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const header = bts[0];

  const cards = bts.slice(1);
  const left = cards.find(item => item.name?.includes("Left"))!;
  const center = cards.filter(item => item.name?.includes("Center"));
  const right = cards.find(item => item.name?.includes("Right"))!;

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-left mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {header.judul}
        </h2>
        <p className="text-gray-500 mt-3">{header.decription}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.8fr_1fr] gap-6 items-stretch">
        {/* Left */}
        <CardItem
          img={left.image!}
          title={left.TITLE!}
          date={left.data!}
          isActive={activeCard === 0}
          onTap={() => setActiveCard(activeCard === 0 ? null : 0)}
        />

        {/* Center */}
        <div className="grid grid-rows-2 gap-6 h-full">
          {center.map((item, idx) => (
            <CardItem
              key={idx}
              img={item.image!}
              title={item.TITLE!}
              date={item.data!}
              isActive={activeCard === idx + 1}
              onTap={() =>
                setActiveCard(activeCard === idx + 1 ? null : idx + 1)
              }
            />
          ))}
        </div>

        {/* Right */}
        <CardItem
          img={right.image!}
          title={right.TITLE!}
          date={right.data!}
          isActive={activeCard === center.length + 1}
          onTap={() =>
            setActiveCard(
              activeCard === center.length + 1 ? null : center.length + 1
            )
          }
        />
      </div>
    </section>
  );
};

export default BehindTheScenes;
