import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CardItemProps {
  img: string;
  title: string;
  date: string;
  className?: string;
  style?: React.CSSProperties;
}

const BehindTheScenes = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

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

  const CardItem: React.FC<CardItemProps> = ({
    img,
    title,
    date,
    className = "",
    style,
  }) => (
    <div
      style={style}
      className={`bts-card group relative overflow-hidden rounded-2xl shadow-lg ${className}`}
    >
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover object-top
        transition-all duration-500
        group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/50" />

      {/* Info */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 text-white
        translate-y-10 opacity-0 transition-all duration-500
        group-hover:translate-y-0 group-hover:opacity-100"
      >
        <h3 className="text-lg font-bold tracking-wide">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-200 mt-1">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      {/* Header */}
      <div className="text-left mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Behind The Scenes
        </h2>
        <p className="text-gray-500 mt-3">
          Bukan sekadar magang, tapi proses belajar, bertumbuh, dan berkarya bersama.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.8fr_1fr] gap-6 items-stretch">
        {/* Left */}
        <CardItem
          img="/acara/Component2.png"
          title="SEMINAR IT4 School"
          date="13 Desember 2025"
        />

        {/* Center */}
        <div className="grid grid-rows-2 gap-6 h-full">
          <CardItem
            img="/acara/Component3.png"
            title="SEMINAR IT4 School"
            date="13 Desember 2025"
          />
          <CardItem
            img="/acara/Component4.png"
            title="SEMINAR IT4 School"
            date="13 Desember 2025"
          />
        </div>

        {/* Right — RUNCING */}
        <CardItem
          img="/acara/Component5.png"
          title="SEMINAR IT4 School"
          date="13 Desember 2025"
          style={{
clipPath: "polygon(0 0, 82% 0, 90% 0%, 90% 100%, 100% 100%, 0 100%)",
        }}
        />
      </div>
    </section>
  );
};

export default BehindTheScenes;
