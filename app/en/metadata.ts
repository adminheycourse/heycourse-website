import type { Metadata } from "next";

export function englishMetadata(
  title: string,
  description: string,
  englishPath: string,
  spanishPath: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: englishPath,
      languages: {
        en: englishPath,
        es: spanishPath,
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
