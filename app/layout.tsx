import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { SiteFooter } from "./components";
import { SiteHeader } from "./SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";
  const socialImage = new URL("/og-learning-intelligence.png", origin).toString();

  return {
    title: {
      default: "HeyCourse — Learning intelligence",
      template: "%s | HeyCourse",
    },
    description:
      "LXP + LMS con inteligencia de aprendizaje para convertir conocimiento en capacidades demostrables.",
    icons: {
      icon: [{ url: "/heycourse-mark.png", type: "image/png" }],
      apple: "/heycourse-mark.png",
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      title: "HeyCourse — Convierte conocimiento en capacidades demostrables",
      description:
        "Crea experiencias, guía personas y mide resultados con inteligencia de aprendizaje.",
      images: [{ url: socialImage, width: 1725, height: 912 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HeyCourse — Convierte conocimiento en capacidades demostrables",
      description:
        "Crea experiencias, guía personas y mide resultados con inteligencia de aprendizaje.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
