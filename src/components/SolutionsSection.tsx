// components/HeroSection.tsx
'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import ResponsiveBadge from './ResponsiveBadge';

type Product = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    id: 'bites',
    title: 'Bites',
    subtitle: 'Restaurant Management Software',
    image: '/icons/BitesN.svg',
    tag: 'Bites',
  },
  {
    id: 'linkedin-ai',
    title: 'LinkedIn AI Agent',
    subtitle: 'Automated Lead Generation',
    image: '/icons/PostmateN.svg',
    tag: 'LinkedIn AI Agent',
  },
  {
    id: 'retailer-crm',
    title: "Retailer's CRM",
    subtitle: 'Customer Relationship Management',
    image: '/icons/ScreenlyN.svg',
    tag: "Retailer's CRM",
  },
  {
    id: 'KisForm',
    title: 'Kisform',
    subtitle: 'Debt Recovery Made Easy',
    image: '/icons/KisformsN.svg',
    tag: 'kisform',
  },
];

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const [activeId, setActiveId] = useState('bites');

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) cardRefs.current.set(id, el);
    else cardRefs.current.delete(id);
  };

  const scrollToCard = (id: string) => {
    const card = cardRefs.current.get(id);
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      let closest = '';
      let minDist = Infinity;

      cardRefs.current.forEach((el, id) => {
        if (!el) return;
        const cardRect = el.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = id;
        }
      });

      if (closest && closest !== activeId) setActiveId(closest);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  // Auto-center first card on mount
  useEffect(() => {
    setTimeout(() => {
      cardRefs.current.get('bites')?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }, 100);
  }, []);

  return (
    <section className="w-full h-fit bg-[#F8F8F8] dark:bg-[#161616] flex flex-col items-center justify-center py-[32px] md:py-[48px] lg:py-[64px] xl:py-[80px] gap-[24px] md:gap-[32px] lg:gap-[40px] overflow-hidden">
      
      <ResponsiveBadge label="Our Product" />

      {/* Main Heading */}
      <h1 className="font-inter font-semibold text-[26px] md:text-[44px] lg:text-[52px] xl:text-[64px] leading-[40px] md:leading-[64px] xl:leadding-[72px] tracking-[-1%] text-center text-[#110C22] dark:text-white px-[24px] md:px-[40px] lg:px-[56px] xl:px-[64px]">
        <span className="text-[#0A6CDB]">Solutions</span> for Every
        <br />
        Business Need.
      </h1>

      {/* Scrollable Device Mockups */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex gap-8 lg:gap-16 justify-start items-center min-w-max px-8 lg:px-16">
          {/* Left spacer - increased for better centering */}
          <div className="flex-none w-[30vw] lg:w-[20vw]" />

          {products.map((product) => (
            <div
              key={product.id}
              ref={setRef(product.id)}
              onClick={() => scrollToCard(product.id)}
              className={`
                flex-none transition-all duration-500 cursor-pointer select-none
                ${activeId === product.id ? 'scale-100 z-10' : 'scale-100 opacity-70'}
              `}
              style={{ scrollSnapAlign: 'center' }}
            >
              <div className={`
                flex flex-col items-center justify-center rounded-[40px] px-[32px] py-[48px] gap-[32px]
                transition-all duration-500 w-[90vw] max-w-[735px]
                bg-white dark:bg-[#0C0C0C]
              `}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={735}
                  height={403}
                  className="w-full"
                />
                <p className="font-manrope font-medium text-[14px] md:text-[16px] leading-[24px] text-center text-[#4F4B5C] dark:text-[#C2C2C2]">
                  {product.title} : {product.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Right spacer */}
          <div className="flex-none w-[30vw] lg:w-[20vw]" />
        </div>
      </div>

      {/* Product Tags */}
      <div className="flex justify-center bg-[#ECECED] dark:bg-[#1F1F1F] rounded-[48px] p-1 gap-2">
        {products.map((p) => (
          <span
            key={p.id}
            onClick={() => scrollToCard(p.id)}
            className={`
              px-[8px] md:px-[12px] py-1 md:py-[8px] rounded-[68px] font-manrope font-bold text-[12px] md:text-[14px] leading-[18px] md:leading-[24px] align-middle cursor-pointer transition-all
              ${activeId === p.id
                ? 'bg-white dark:bg-[#2A2A2A] text-[#4F4B5C] dark:text-[#C2C2C2]'
                : 'text-[#8D8A95] dark:text-[#7A7A7A] hover:bg-white/70 dark:hover:bg-[#2A2A2A]/70 '
              }
            `}
          >
            {p.tag}
          </span>
        ))}
      </div>

      {/* Dynamic Description */}
      <p className="w-[382px] md:w-[606px] lg:w-[772px] font-manrope font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] text-center text-[#4F4B5C] dark:text-[#C2C2C2] px-[24px] md:px-[40px] lg:px-[56px] xl:px-[64px]">
        Manage every aspect of your restaurant — from digital menus and real-time kitchen displays to seamless billing, analytics, and POS integration.
      </p>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}