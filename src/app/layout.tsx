import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/lib/components/NavBar";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Spain Spring Break",
  icons: {
    icon: "/beer_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen relative ${cinzel.variable} ${lato.className} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
