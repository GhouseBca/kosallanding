'use client';

import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronUp, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ProductDb from "@/components/ProductDB"; // Adjust path if needed

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const dropdownRefDesktop = useRef<HTMLDivElement>(null);
  const dropdownRefMobile = useRef<HTMLDivElement>(null);

  // Smooth scroll function
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  }, []);

  // Mobile navigation click handler
  const handleMobileNavClick = (id: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen(false);
    scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, id);
  };

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showProducts &&
        dropdownRefDesktop.current &&
        !dropdownRefDesktop.current.contains(event.target as Node)
      ) {
        setShowProducts(false);
      }
    }
    if (showProducts) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProducts]);

  // Close mobile dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showProducts &&
        dropdownRefMobile.current &&
        !dropdownRefMobile.current.contains(event.target as Node)
      ) {
        setShowProducts(false);
      }
    }
    if (showProducts) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProducts]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black flex items-center justify-between h-fit opacity-100 rotate-0 
        px-[32px] py-[16px] sm:px-[32px] sm:py-[16px] md:px-[32px] md:py-[16px] lg:w-screen lg:px-[40px] lg:py-[16px] shadow-sm"
    >
      <div className="flex items-center gap-4">
        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="cursor-pointer">
          <img
            src="/img/kosallogo 1.png"
            alt="Kosal Logo"
            className="w-[28px] h-[28px] rotate-0 opacity-100 rounded-[8px]"
          />
        </a>
        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="cursor-pointer">
          <img
            src="/icons/Logo Text.svg"
            alt="Logo Text"
            className="block dark:hidden"
          />
          <img
            src="/icons/DarkLogo Text.svg"
            alt="Logo Text Dark"
            className="hidden dark:block"
          />
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden xl:flex items-center text-sm font-manrope h-[24px] rotate-0 opacity-100 gap-[32px]">
        {/* Products nav item with hover-dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowProducts(true)}
          onMouseLeave={() => setShowProducts(false)}
          ref={dropdownRefDesktop}
        >
          <div
            className="flex items-center gap-1 cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] 
              text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope select-none"
            role="button"
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={showProducts}
          >
            <span>Products</span>
            <span className="relative">
              {showProducts ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </span>
          </div>
          {showProducts && (
            <div
              className="absolute top-full left-0 mt-0 min-w-[600px] max-w-full bg-white dark:bg-[#171717] shadow-xl border border-gray-200 dark:border-[#292929] rounded-2xl p-4 flex flex-col gap-2 z-50"
              style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}
            >
              <ProductDb />
            </div>
          )}
        </div>

        {/* Other nav items */}
        <a
          href="#careers"
          onClick={(e) => scrollToSection(e, 'careers')}
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
        >
          Careers
        </a>
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
        >
          About Us
        </a>
        <a
          href="#wck"
          onClick={(e) => scrollToSection(e, 'wck')}
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
        >
          Why Choose Kosal
        </a>
        <a
          href="#ladder"
          onClick={(e) => scrollToSection(e, 'ladder')}
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
        >
          Ladder Academy
        </a>
        <a
          href="https://blogs.kosal.io/"
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blogs
        </a>
      </nav>

      {/* Desktop Right */}
      <div className="hidden xl:flex items-center gap-4">
        <button
          type="button"
          aria-label="Toggle theme"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Button className="bg-primary text-white font-inter hover:bg-primary/90">
          Contact Us
        </Button>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="xl:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full p-4">
            <div className="flex flex-col gap-6 mt-8 font-manrope text-gray-700">
              {/* Mobile Products dropdown */}
              <div className="flex items-center gap-1 cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope relative select-none">
                <span>Products</span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProducts(prev => !prev);
                  }}
                  className="relative"
                  aria-haspopup="true"
                  aria-expanded={showProducts}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setShowProducts(prev => !prev);
                    }
                  }}
                >
                  {showProducts ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </span>

                {showProducts && (
                  <div
                    ref={dropdownRefMobile}
                    className="absolute top-full left-0 mt-2 min-w-[380px] max-w-full bg-white dark:bg-[#171717] shadow-xl border border-gray-200 dark:border-[#292929] rounded-2xl p-4 flex flex-col gap-2 z-50"
                    style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ProductDb />
                  </div>
                )}
              </div>

              {/* Mobile nav items */}
              <div onClick={handleMobileNavClick('careers')} className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">Careers</div>
              <div onClick={handleMobileNavClick('wck')} className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">Why Choose Kosal</div>
              <div onClick={handleMobileNavClick('ladder')} className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">Ladder Academy</div>
              <div onClick={handleMobileNavClick('about')} className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">About Us</div>
              <a
                href="https://blogs.kosal.io"
                className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blogs
              </a>
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Button className="bg-primary text-white mt-4 font-inter hover:bg-primary/90">
                Contact Us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}