"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function LocalizedVisionImage() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <Image
      src={
        isEnglish
          ? "/og-learning-intelligence-en.png"
          : "/og-learning-intelligence.png"
      }
      alt={
        isEnglish
          ? "HeyCourse connects prompts, quizzes, simulations, contextual tutors and individual analytics in one learning intelligence system."
          : "HeyCourse conecta prompts, quizzes, simulaciones, tutores contextuales y analítica personal en un sistema de inteligencia de aprendizaje."
      }
      width={1725}
      height={912}
      sizes="(max-width: 720px) 100vw, 1180px"
    />
  );
}
