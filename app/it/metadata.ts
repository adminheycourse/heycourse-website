import type { Metadata } from "next";

export function italianMetadata(
  title: string,
  description: string,
  italianPath: string,
  spanishPath: string,
): Metadata {
  const englishPath = `/en${spanishPath === "/" ? "" : spanishPath}`;
  const portuguesePath = `/pt${spanishPath === "/" ? "" : spanishPath}`;
  const frenchPath = `/fr${spanishPath === "/" ? "" : spanishPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: italianPath,
      languages: {
        es: spanishPath,
        en: englishPath,
        pt: portuguesePath,
        fr: frenchPath,
        it: italianPath,
      },
    },
    openGraph: {
      locale: "it_IT",
      title: `${title} | HeyCourse`,
      description,
      images: [
        {
          url: "/og-learning-intelligence-it.png",
          width: 1725,
          height: 912,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HeyCourse`,
      description,
      images: ["/og-learning-intelligence-it.png"],
    },
  };
}
