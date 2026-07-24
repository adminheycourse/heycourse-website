import type { Metadata } from "next";

export function englishMetadata(
  title: string,
  description: string,
  englishPath: string,
  spanishPath: string,
): Metadata {
  const portuguesePath = `/pt${spanishPath === "/" ? "" : spanishPath}`;
  const frenchPath = `/fr${spanishPath === "/" ? "" : spanishPath}`;
  const italianPath = `/it${spanishPath === "/" ? "" : spanishPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: englishPath,
      languages: {
        en: englishPath,
        es: spanishPath,
        pt: portuguesePath,
        fr: frenchPath,
        it: italianPath,
      },
    },
    openGraph: {
      locale: "en_US",
      title: `${title} | HeyCourse`,
      description,
      images: [
        {
          url: "/og-learning-intelligence-en.png",
          width: 1725,
          height: 912,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HeyCourse`,
      description,
      images: ["/og-learning-intelligence-en.png"],
    },
  };
}
