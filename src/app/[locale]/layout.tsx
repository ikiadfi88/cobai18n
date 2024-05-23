import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baruanstra ITS",
  description: "Coba i18n buat web barun",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
          <Header />
          <div className="flex-grow mt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
