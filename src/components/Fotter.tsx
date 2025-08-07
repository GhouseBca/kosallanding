'use client'

import {
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import Image from 'next/image'
import { useCallback } from 'react'
import { NeonGradientCard } from './magicui/neon-gradient-card';

export default function Footer() {
  // Smooth scroll function
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  }, []);
  return (
    <footer className="w-full h-fit bg-[#F3F3F4] dark:bg-[#1A1A1A] px-6 py-8 gap-[56px] md:px-10 md:py-12 md:gap-[64px] 
              lg:px-14 lg:py-16 lg:gap-[80px] xl:px-16 xl:py-20 flex flex-col">

      {/* Top Grid */}
      <div className="flex flex-col gap-[40px] w-full md:flex-row md:justify-between">
        
        {/* Logo & Description */}
        <div className="flex flex-col w-[190px] h-fit gap-[20px] lg:w-[276px] xl:w-fit xl:gap-[24px]">
          <h2 className="flex items-start text-[20px] w-[88px] h-[40px] text-center text-[#110C22] dark:text-white
                leading-[40px] font-[400] tracking-[-0.01em] xl:w-[114px] xl:text-[26px]">Kosal.io</h2>

          <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-medium text-[16px] lg:text-[18px] leading-[24px] tracking-[0] w-[190px] h-[72px] lg:w-[276px] lg:h-[48px] font-manrope">
            Empowering Businesses with Smart Software Solutions
          </p>

          <div className="w-fit h-fit flex gap-4">
            <div className="relative w-[10.4px] h-[19px] top-[2.5px] left-[6.8px]">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                fill
                className="cursor-pointer text-[#4F4B5C] dark:text-[#C2C2C2]"
              />
            </div>

            <div className="relative w-[17.14px] h-[17.14px] top-[3.43px] left-[3.43px]">
              <Image
                src="/icons/x.svg"
                alt="X"
                fill
                className="cursor-pointer text-[#4F4B5C] dark:text-[#C2C2C2]"
              />
            </div>

            <div className="relative w-[20.5px] h-[20.5px]">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                fill
                className="absolute top-0 left-0 cursor-pointer 
               text-[#4F4B5C] dark:text-[#C2C2C2]"
              />
            </div>

          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-fit h-fit gap-3">

          <h2 className="flex items-start text-[20px] leading-[32px] tracking-[-0.01em] text-[#110C22] dark:text-white text-center font-inter font-semibold
          xl:text-[26px] xl:leading-[40px] xl:w-[143px] xl:h-[40px] w-[110px] h-[32px]">Quick Links</h2>
          
          <div className="flex flex-col items-start gap-3 xl:gap-4">
            <div className="inline-flex items-center gap-[4px] xl:gap-[6px] xl:pb-[2px] ">
              <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle cursor-pointer">Home</a>
            </div>
            <div className="inline-flex items-center gap-[4px] xl:gap-[6px] xl:pb-[2px] ">
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle cursor-pointer">Services</a>
            </div>
            <div className="inline-flex items-center gap-[4px] xl:gap-[6px] xl:pb-[2px] ">
              <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle cursor-pointer">Products</a>
            </div>
            <div className="inline-flex items-center gap-[4px] xl:gap-[6px] xl:pb-[2px] ">
              <a href="#wck" onClick={(e) => scrollToSection(e, 'wck')} className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle cursor-pointer">Why Chose Kosal</a>
            </div>
            <div className="inline-flex items-center gap-[4px] xl:gap-[6px] xl:pb-[2px] ">
              <a href="#ladder" onClick={(e) => scrollToSection(e, 'ladder')} className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle cursor-pointer">Ladder Academy</a>
            </div>
            <div className="inline-flex items-center gap-[4px] xl:gap-[6px] xl:pb-[2px] ">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle cursor-pointer">About Us</a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start w-hit h-hit gap-3">

          <h2 className="text-[#110C22] dark:text-white text-[20px] leading-[32px] font-inter font-semibold tracking-[-0.01em] text-center mb-4 lg:text-[26px] lg:leading-[40px] lg:h-[40px]">Contact Us</h2>
          
          <div className="flex flex-col items-start gap-5 lg:gap-[16px]">
            
            <div className="flex gap-[6px] pb-[2px]">
              <MapPin className="w-4 h-4 mt-1 text-gray-600 dark:text-gray-400" />
              <p className="text-[#4F4B5C] dark:text-[#C2C2C2] xl:pb-[2px] font-semibold text-[14px] leading-[24px] align-middle font-manrope xl:text-[16px] h-[72px]">
                219/B, Tiruchendur Road,<br />
                Samathanapuram, Palayamkottai,<br />
                Tirunelveli - 627 002.
              </p>
            </div>
            
            <div className="flex gap-[4px] xl:gap-[6px] xl:pb-[2px] hover:underline hover:text-[#0A6CDB]">
              <Phone className="w-4 h-4 mt-1 text-gray-600 dark:text-gray-400" />
              <span className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-semibold text-[14px] leading-[24px] xl:text-[16px] h-[24px]">+91 63694 87527</span>
            </div>
            
            <div className="flex gap-[4px] xl:gap-[6px] xl:pb-[2px] hover:underline hover:text-[#0A6CDB]">
              <Mail className="w-4 h-4 mt-1 text-gray-600 dark:text-gray-400" />
              <span className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-semibold text-[14px] leading-[24px] xl:text-[16px] h-[24px] align-middle">info@kosal.io</span>
            </div>
          
          </div>
        
        </div>
        
      </div>

      {/* Middle Logo */}
      <div className="flex justify-center">
        <div className="max-w-[708.69px] h-[144.62px] flex items-center justify-center">
          <NeonGradientCard className="max-w-xl items-center justify-center text-center">
            <img
              src="/img/Heading.png"
              alt="KOSAL Heading"
              className="w-full h-full object-contain"
            />
          </NeonGradientCard>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#D9D8DC] dark:border-[#3D3D3D] pt-6  gap-[32px] md:gap-[40px]">
        
        <div className="flex flex-col items-center md:flex-row w-full gap-[24px] md:justify-between mt-2">
        
            <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[14px] leading-[24px] xl:text-[16px]">
              © 2025 Kosal. All rights reserved.</p>
        
            <div className="flex flex-row gap-8 h-fit mt-2 py-4 lg:mt-0">
        
              <div className="flex  h-fit gap-1 pb-[2px]">
                <a href="#" className="font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] font-semibold align-middle hover:underline text-[12px] leading-[16px] h-[16px] xl:text-[14px] xl:leading-[24px] xl:h-[24px]">
                  Privacy Policy</a>
              </div>
            
              <div className="flex h-fit gap-1 pb-[2px]">
                <a href="#" className="font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] font-semibold align-middle hover:underline text-[12px] leading-[16px] h-[16px] xl:text-[14px] xl:leading-[24px] xl:h-[24px]">
                  Terms of Service</a>
              </div>
             
              <div className="flex h-fit gap-1 pb-[2px]">
                <a href="#" className="font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] font-semibold align-middle hover:underline text-[12px] leading-[16px] h-[16px] xl:text-[14px] xl:leading-[24px] xl:h-[24px]">
                  Cookie Policy</a>
              </div>
            
            </div>
        </div>
      </div>
    </footer>
  )
}
