'use client';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black flex items-center justify-between h-fit opacity-100 rotate-0  px-[32px] py-[16px]  sm:px-[32px] sm:py-[16px]  md:px-[32px] md:py-[16px] lg:w-screen lg:px-[40px] lg:py-[16px] shadow-sm">
      <div className="flex items-center gap-4">
        <img src="/img/kosallogo 1.png" alt="Kosal Logo" className="w-[28px] h-[28px] rotate-0 opacity-100 rounded-[8px] " />
        <div className="text-[#2E293D] dark:text-[#F5F5F5] w-[65.01px] h-[14.15px]">KOSAL</div>
      </div>


      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center text-sm font-manrope  h-[24px] rotate-0 opacity-100 gap-[32px]">
        <div className="flex items-center gap-1 cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">
          Services <ChevronDown size={14} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">
          Products <ChevronDown size={14} />
        </div>
        <a className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">Careers</a>
        <a className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">Why Chose Kosal</a>
        <a className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">Ladder Academy</a>
        <a className="cursor-pointer font-medium text-[14px] leading-[24px] tracking-[0%] text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope">About Us</a>
      </nav>

      {/* Desktop Right */}
      <div className="hidden lg:flex items-center gap-4">
        <button
          type="button"
          aria-label="Toggle theme"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Button className="bg-primary text-white font-inter hover:bg-primary/90">
          Contact Us
        </Button>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className=" w-full p-4">
            <div className="flex flex-col gap-6 mt-8 font-manrope text-gray-700">
              <div className="flex items-center gap-1">
                Services <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1">
                Products <ChevronDown size={14} />
              </div>
              <div>Careers</div>
              <div>Why Chose Kosal</div>
              <div>Ladder Academy</div>
              <div>About Us</div>
              <button
                onClick={() =>
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
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
