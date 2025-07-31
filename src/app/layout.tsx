import { ThemeProvider } from "@/providers/theme";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Your App",
  description: "App with dark mode",
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
