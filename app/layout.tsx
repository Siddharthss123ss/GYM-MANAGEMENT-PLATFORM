import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AuthHydrator from "@/components/authhydrator";

export const metadata: Metadata = {
  title: "GymVerse",
  description: "Your Ultimate Fitness Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthHydrator />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
