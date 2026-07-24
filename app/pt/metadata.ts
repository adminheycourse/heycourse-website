import type { Metadata } from "next";

export function portugueseMetadata(
  title: string,
  description: string,
  portuguesePath: string,
  spanishPath: string,
): Metadata {
  const englishPath = `/en${spanishPath === "/" ? "" : spanishPath}`;
  const frenchPath = `/fr${spanishPath === "/" ? "" : spanishPath}`;
  const italianPath = `/it${spanishPath === "/" ? "" : spanishPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: portuguesePath,
      languages: {
        es: spanishPath,
        en: englishPath,
        pt: portuguesePath,
        fr: frenchPath,
        it: italianPath,
      },
    },
    openGraph: {
      locale: "pt_BR",
      title: `${title} | HeyCourse`,
      description,
      images: [
        {
          url: "/og-learning-intelligence-pt.png",
          width: 1725,
          height: 912,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HeyCourse`,
      description,
      images: ["/og-learning-intelligence-pt.png"],
    },
  };
}
