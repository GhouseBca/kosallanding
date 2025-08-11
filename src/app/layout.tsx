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
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
     
        <body>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              {children}
            </ThemeProvider>
        </body>
    </html>
  );
}
