import type { Metadata } from "next";

export function frenchMetadata(
  title: string,
  description: string,
  frenchPath: string,
  spanishPath: string,
): Metadata {
  const englishPath = `/en${spanishPath === "/" ? "" : spanishPath}`;
  const portuguesePath = `/pt${spanishPath === "/" ? "" : spanishPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: frenchPath,
      languages: {
        es: spanishPath,
        en: englishPath,
        pt: portuguesePath,
        fr: frenchPath,
      },
    },
    openGraph: {
      locale: "fr_FR",
      title: `${title} | HeyCourse`,
      description,
      images: [
        {
          url: "/og-learning-intelligence-fr.png",
          width: 1725,
          height: 912,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HeyCourse`,
      description,
      images: ["/og-learning-intelligence-fr.png"],
    },
  };
}
