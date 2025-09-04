import { ThemeProvider } from "@/providers/theme";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

export const metadata = {
  title: "KOSAL.IO",
  description: "KOSAL.IO is a leading provider of mobile and web applications, with a focus on creating innovative solutions for our clients.",
  icons: {
    icon: "/icons/kosallogo 1.svg",
    apple: "/apple-touch-icon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
