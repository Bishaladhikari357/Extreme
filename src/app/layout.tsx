import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Providers";
import Navbar from "@/UI/components/Navbar/Navbar";
import Whatsapp from "@/UI/components/Whatsapp/Whatsapp";
import Footer from "@/UI/components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MB Fitness",
  description: "Extreme Fitness is your ultimate destination for building strength, endurance, and overall health. High-intensity workouts, personal training programs, group classes, and nutrition guidance are designed to help you achieve your fitness goals faster. Our focus is on safe, effective, and science-backed methods to maximize performance and promote a healthier lifestyle.",
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
         <Providers>

        {children}
        <Navbar />
        <Whatsapp/>
        <Footer/>
                 </Providers>
      </body>
    </html>
  );
}
