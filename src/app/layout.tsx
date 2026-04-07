import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "BudgetMo - Ipon & Gasto Tracker",
  description: "Monitor your expenses and reach your savings goals with a Filipino-centric budget tracker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-background">
        <main className="pb-32 pt-6 px-4 max-w-2xl mx-auto">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
