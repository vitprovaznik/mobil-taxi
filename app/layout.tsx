import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./reset.css";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobil Taxi Jablonec nad Nisou | Spolehlivý odvoz 24/7",
  description:
    "Hledáte levné a rychlé taxi v Jablonci nad Nisou? Mobil Taxi nabízí spolehlivé služby, komfortní vozy a férové ceny. Zavolejte si nás ještě dnes!",
  alternates: {
    canonical: "https://www.mobiltaxi.eu/",
  },
  openGraph: {
    title: "Mobil Taxi Jablonec nad Nisou | Spolehlivý odvoz 24/7",
    description:
      "Rychlá a pohodlná taxi služba v Jablonci a okolí. Profesionální řidiči, férové jednání a nonstop dostupnost.",
    url: "https://www.mobiltaxi.eu/",
    siteName: "Mobil Taxi Jablonec nad Nisou",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000065-ec937ec93b/700/car%203%20-%20g.jpeg?ph=f3be96abaf",
        width: 1200,
        height: 630,
        alt: "Mobil Taxi Jablonec nad Nisou",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
