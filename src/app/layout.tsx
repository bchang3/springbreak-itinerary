import type { Metadata } from "next";
import { Cinzel, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/lib/components/NavBar";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
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
        className={`h-screen relative ${cinzel.variable} ${roboto.className} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
