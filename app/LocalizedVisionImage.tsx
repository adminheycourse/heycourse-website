"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { localeFromPathname, type Locale } from "./locales";

const localizedVision: Record<
  Locale,
  { src: string; alt: string }
> = {
  es: {
    src: "/og-learning-intelligence.png",
    alt: "HeyCourse conecta prompts, quizzes, simulaciones, tutores contextuales y analítica personal en un sistema de inteligencia de aprendizaje.",
  },
  en: {
    src: "/og-learning-intelligence-en.png",
    alt: "HeyCourse connects prompts, quizzes, simulations, contextual tutors and individual analytics in one learning intelligence system.",
  },
  pt: {
    src: "/og-learning-intelligence-pt.png",
    alt: "A HeyCourse conecta prompts, quizzes, simulações, tutores contextuais e análises individuais em um sistema de inteligência de aprendizagem.",
  },
  fr: {
    src: "/og-learning-intelligence-fr.png",
    alt: "HeyCourse relie les prompts, les quiz, les simulations, les tuteurs contextuels et les analyses individuelles dans un système d’intelligence d’apprentissage.",
  },
  it: {
    src: "/og-learning-intelligence-it.png",
    alt: "HeyCourse collega prompt, quiz, simulazioni, tutor contestuali e analisi individuali in un sistema di intelligenza dell’apprendimento.",
  },
};

export function LocalizedVisionImage() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const image = localizedVision[locale];

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={1725}
      height={912}
      sizes="(max-width: 720px) 100vw, 1180px"
    />
  );
}
