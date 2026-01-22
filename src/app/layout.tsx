import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/nav/Navbar";
import SkipToContent from "@/components/nav/SkipToContent";
import BackToTop from "@/components/ui/BackToTop";
import "../styles/globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TSRC Health Collective",
    template: "%s | TSRC Health Collective",
  },
  description:
    "Regulated healthcare organization with service platforms, practice frameworks, and governance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${sourceSans.variable} bg-white font-sans text-olive antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SkipToContent />
          <Navbar />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
