import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader } from "./components";
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
  const socialImage = new URL("/og.png", origin).toString();

  return {
    title: {
      default: "HeyCourse — Learning intelligence",
      template: "%s | HeyCourse",
    },
    description:
      "LXP + LMS reinventados con IA. Crea, guía, practica y mide experiencias de aprendizaje con inteligencia contextual.",
    openGraph: {
      type: "website",
      locale: "es_ES",
      title: "HeyCourse — El aprendizaje ahora tiene inteligencia propia",
      description:
        "LXP + LMS reinventados con IA contextual para crear, guiar, practicar y medir.",
      images: [{ url: socialImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HeyCourse — El aprendizaje ahora tiene inteligencia propia",
      description:
        "LXP + LMS reinventados con IA contextual para crear, guiar, practicar y medir.",
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
