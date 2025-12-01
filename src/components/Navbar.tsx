// src/components/Navbar.tsx
'use client';

import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronUp, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ProductDb from "@/components/ProductDB";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const { theme, setTheme } = useTheme();

  const dropdownRefDesktop = useRef<HTMLDivElement>(null);
  const dropdownRefMobile = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setOpen(false);
    setShowProducts(false);
  }, []);

  // Fixed: proper typing instead of `any`
  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    scrollToSection(id);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!showProducts) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;

      if (
        dropdownRefDesktop.current &&
        !dropdownRefDesktop.current.contains(target)
      ) {
        setShowProducts(false);
      }
      if (
        dropdownRefMobile.current &&
        !dropdownRefMobile.current.contains(target)
      ) {
        setShowProducts(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProducts]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black flex items-center justify-between px-8 py-4 lg:px-10 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <a href="#hero" onClick={handleNavClick("hero")}>
          <img
            src="/icons/logokosal.png"
            alt="Kosal"
            className="w-8 h-8 rounded-lg hidden dark:block"
          />
          <img
            src="/img/kosallogo 1.png"
            alt="Kosal"
            className="w-8 h-8 rounded-lg block dark:hidden"
          />
        </a>
        <a href="#hero" onClick={handleNavClick("hero")}>
          <img
            src="/icons/Logo Text.svg"
            alt="Kosal"
            className="h-6 block dark:hidden"
          />
          <img
            src="/icons/DarkLogo Text.svg"
            alt="Kosal"
            className="h-6 hidden dark:block"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden xl:flex items-center gap-8">
        <div
          className="relative"
          onMouseEnter={() => setShowProducts(true)}
          onMouseLeave={() => setShowProducts(false)}
          ref={dropdownRefDesktop}
        >
          <button className="flex items-center gap-1 text-sm font-medium text-[#4F4B5C] dark:text-[#C2C2C2]">
            Products {showProducts ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showProducts && (
            <div className="absolute top-full left-0 mt-2 w-[600px] bg-white dark:bg-[#171717] rounded-2xl shadow-xl border border-gray-200 dark:border-[#292929] p-6 z-50 overflow-y-auto max-h-[70vh]">
              <ProductDb />
            </div>
          )}
        </div>

        <a href="#careers" onClick={handleNavClick("careers")} className="text-sm font-medium text-[#4F4B5C] dark:text-[#C2C2C2]">
          Careers
        </a>
        <a href="#about" onClick={handleNavClick("about")} className="text-sm font-medium text-[#4F4B5C] dark:text-[#C2C2C2]">
          About Us
        </a>
        <a href="#wck" onClick={handleNavClick("wck")} className="text-sm font-medium text-[#4F4B5C] dark:text-[#C2C2C2]">
          Why Choose Kosal
        </a>
        <a href="#ladder" onClick={handleNavClick("ladder")} className="text-sm font-medium text-[#4F4B5C] dark:text-[#C2C2C2]">
          Ladder Academy
        </a>
        <a
          href="https://blogs.kosal.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#4F4B5C] dark:text-[#C2C2C2]"
        >
          Blogs
        </a>
      </nav>

      {/* Desktop Right Side */}
      <div className="hidden xl:flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Button>Contact Us</Button>
      </div>

      {/* Mobile Menu */}
      <div className="xl:hidden flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full">
            <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

            <div className="flex flex-col items-center gap-8 mt-12">
              <button
                onClick={() => setShowProducts(p => !p)}
                className="flex items-center gap-2 text-lg font-medium"
              >
                Products {showProducts ? <ChevronUp /> : <ChevronDown />}
              </button>

              {showProducts && (
                <div ref={dropdownRefMobile} className="w-full max-w-sm">
                  <ProductDb />
                </div>
              )}

              <div onClick={handleNavClick("careers")} className="text-lg font-medium cursor-pointer">Careers</div>
              <div onClick={handleNavClick("wck")} className="text-lg font-medium cursor-pointer">Why Choose Kosal</div>
              <div onClick={handleNavClick("ladder")} className="text-lg font-medium cursor-pointer">Ladder Academy</div>
              <div onClick={handleNavClick("about")} className="text-lg font-medium cursor-pointer">About Us</div>
              <a href="https://blogs.kosal.io" target="_blank" rel="noopener noreferrer" className="text-lg">
                Blogs
              </a>

              <Button className="w-fit mt-6">Contact Us</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}