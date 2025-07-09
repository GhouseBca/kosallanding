'use client';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Moon ,Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes"
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex items-center justify-between px-6 md:px-8 py-4 shadow-sm">
      <div className="text-primary font-bold text-xl font-inter">KOSAL.IO</div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center space-x-8 text-sm font-manrope">
        <div className="flex items-center gap-1 cursor-pointer">
          Services <ChevronDown size={14} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Products <ChevronDown size={14} />
        </div>
        <div className="cursor-pointer">Careers</div>
        <div className="cursor-pointer">Why Chose Kosal</div>
        <div className="cursor-pointer">Ladder Academy</div>
        <div className="cursor-pointer">About Us</div>
      </nav>

      {/* Desktop Right */}
      <div className="hidden lg:flex items-center gap-4">
        <button
          type="button"
          aria-label="Toggle theme"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark') }
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
