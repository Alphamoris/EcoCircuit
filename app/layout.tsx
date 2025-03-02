import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./globals.css";
import ClientLayout from "./components/layout/ClientLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "EcoCircuit - E-Waste Management Platform",
  description: "Sustainable e-waste management through AI-powered recycling",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'EcoCircuit - E-Waste Management Platform',
    description: 'Sustainable e-waste management through AI-powered recycling',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'EcoCircuit Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoCircuit - E-Waste Management Platform',
    description: 'Sustainable e-waste management through AI-powered recycling',
    images: ['/logo.png'],
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} flex flex-col min-h-screen font-opensans text-text bg-background`}>
        <ClientLayout>
          <Navbar />
          <div className="flex-grow pt-16">
            {children}
          </div>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
