import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavApp from "./components/nav";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Khubaib-Portfolio",
  description: "Hi i'm Khubaib full enthuthiastic Front-end developer. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavApp></NavApp>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
