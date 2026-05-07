import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dulnindu Saranga | Software Engineer",
  description: "Advanced Personal Portfolio of Dulnindu Saranga - Software Engineering Undergraduate, Full-Stack Developer, and AI Enthusiast.",
  icons: {
    icon: "./images/my logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <ThemeProvider>
        <body className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/30 selection:text-primary">
          <ScrollToTop />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
