import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/universal/header";
import { Toaster } from "sonner";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knoott",
  description:
    "Knoott es una plataforma digital para mesas de regalos de boda. Personaliza tu lista, facilita a tus invitados el regalar y ofrece diversos métodos de pago. Configura fácilmente para que amigos y familiares contribuyan sin complicaciones.",
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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster position="top-left" />
      </body>
    </html>
  );
}
