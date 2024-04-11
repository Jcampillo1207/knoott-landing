import Image from "next/image";
import { HeroSection } from "./_components/heroSection";
import { Section2 } from "./_components/section2";
import { Section3 } from "./_components/section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knoott",
  description:
    "Knoott es una plataforma digital para mesas de regalos de boda. Personaliza tu lista, facilita a tus invitados el regalar y ofrece diversos métodos de pago. Configura fácilmente para que amigos y familiares contribuyan sin complicaciones.",
  openGraph: {
    type: "website",
    url: "knoott.com",
    title: "Knoott",
    description:
      "Knoott es una plataforma digital para mesas de regalos de boda. Personaliza tu lista, facilita a tus invitados el regalar y ofrece diversos métodos de pago. Configura fácilmente para que amigos y familiares contribuyan sin complicaciones.",
    siteName: "Knoott",
    images: [
      {
        url: "https://flsqnnbcmtmltxmnygwe.supabase.co/storage/v1/object/public/hola/knoottpp.png?t=2024-04-11T15%3A10%3A27.094Z",
        height: 450,
        width: 800,
      },
    ],
  },
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/knooticon.svg",
      href: "/knooticon.svg",
      sizes: "32x32",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/knooticon.svg",
      href: "/knooticon.svg",
      sizes: "32x32",
    },
  ],
};

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Section2 />
      <Section3 />
    </main>
  );
}
