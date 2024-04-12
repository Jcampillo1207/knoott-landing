import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/universal/header";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Manrope({ subsets: ["latin"] });

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
        url: `/knoottpp.png`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es">
      <body className={cn("scroll-smooth ", inter.className)}>
        <Header />
        {children}
        <Toaster position="top-left" />
      </body>
    </html>
  );
}
