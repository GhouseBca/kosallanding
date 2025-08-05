'use client';

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronUp, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Services from "@/components/services"; // Adjust path if needed
import ProductDb from "@/components/ProductDB"; // Adjust path if needed

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

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

  // Mobile navigation click handler, properly typed and using available scope variables
  const handleMobileNavClick = (id: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen(false);
    // Cast event to anchor element event type if needed by scrollToSection
    scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, id);
  };

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
        {/* Light theme logo */}
        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="cursor-pointer">
          <img
            src="/icons/Logo Text.svg"
            alt="Logo Text"
            className="block dark:hidden"
          />
          {/* Dark theme logo */}
          <img
            src="/icons/DarkLogo Text.svg"
            alt="Logo Text Dark"
            className="hidden dark:block"
          />
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden xl:flex items-center text-sm font-manrope h-[24px] rotate-0 opacity-100 gap-[32px]">
        {/* Services nav item */}
        <div
          className="flex items-center gap-1 cursor-default font-medium text-[14px] leading-[24px] tracking-[0%] 
            text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope relative"
        >
          <span>Services</span>
          <span
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
            className="relative"
          >
            <ChevronDown size={14} />
            {/* Left-side Services Dropdown */}
            {showServices && (
              <div
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
                className="fixed top-[64px] left-0 min-w-[380px] max-w-full bg-white dark:bg-[#171717] shadow-xl border border-gray-200 dark:border-[#292929] rounded-2xl p-4 flex flex-col gap-2 z-50"
                style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}
              >
                <Services />
              </div>
            )}
          </span>
        </div>

        {/* Products nav item with click-dropdown on ChevronDown / ChevronUp */}
        <div
          className="flex items-center gap-1 cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] 
            text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope relative select-none"
        >
          <span>Products</span>
          <span
            onClick={() => setShowProducts((prev) => !prev)}
            className="relative"
            aria-haspopup="true"
            aria-expanded={showProducts}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setShowProducts((prev) => !prev);
              }
            }}
          >
            {showProducts ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>

          {/* Products dropdown shown fixed on left side of screen */}
          {showProducts && (
            <div
              className="fixed top-[64px] left-0 min-w-[380px] max-w-full bg-white dark:bg-[#171717] shadow-xl border border-gray-200 dark:border-[#292929] rounded-2xl p-4 flex flex-col gap-2 z-50"
              style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}
              onClick={(e) => e.stopPropagation()} // prevent accidental closure if needed later
            >
              <ProductDb />
            </div>
          )}
        </div>

        {/* Other nav items */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, 'careers')}
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
        >
          Careers
        </a>
        <a
          href="#wck"
          onClick={(e) => scrollToSection(e, 'wck')}
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
        >
          Why Chose Kosal
        </a>
        <a
          href="#ladder"
          onClick={(e) => scrollToSection(e, 'ladder')}
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
        >
          Ladder Academy
        </a>
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope"
        >
          About Us
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
              <div className="flex items-center gap-1 cursor-default font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope relative">
                <span>Services</span>
                <span
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                  className="relative"
                >
                  <ChevronDown size={14} />
                  {/* Left-side Services Dropdown */}
                  {showServices && (
                    <div
                      onMouseEnter={() => setShowServices(true)}
                      onMouseLeave={() => setShowServices(false)}
                      className="fixed top-[64px] left-0 min-w-[380px] max-w-full bg-white dark:bg-[#171717] shadow-xl border border-gray-200 dark:border-[#292929] rounded-2xl p-4 flex flex-col gap-2 z-50"
                      style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}
                    >
                      <Services />
                    </div>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-1 cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope relative select-none">
                <span>Products</span>
                <span
                  onClick={() => setShowProducts((prev) => !prev)}
                  className="relative"
                  aria-haspopup="true"
                  aria-expanded={showProducts}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setShowProducts((prev) => !prev);
                    }
                  }}
                >
                  {showProducts ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </span>

                {/* Dropdown shown below the button */}
                {showProducts && (
                  <div
                    className="absolute top-full left-0 mt-2 min-w-[380px] max-w-full bg-white dark:bg-[#171717] shadow-xl border border-gray-200 dark:border-[#292929] rounded-2xl p-4 flex flex-col gap-2 z-50"
                    style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ProductDb />
                  </div>
                )}
              </div>

              <div onClick={handleMobileNavClick('wck')} className="cursor-pointer">Careers</div>
              <div onClick={handleMobileNavClick('wck')} className="cursor-pointer">Why Chose Kosal</div>
              <div onClick={handleMobileNavClick('ladder')} className="cursor-pointer">Ladder Academy</div>
              <div onClick={handleMobileNavClick('about')} className="cursor-pointer">About Us</div>
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
