'use client';

import Image from 'next/image';
import { useState } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  link?: string;
};

export const FeatureCard = ({ title, description, iconSrc}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-[#F8F8F8] dark:bg-[#161616] hover:bg-[#ECECED] dark:hover:bg-[#0c0a09] w-full h-fit gap-4 rounded-[32px] p-6 sm:px-8 sm:py-6 md:px-8 md:py-6 lg:px-8 lg:py-6 shadow-sm transition-all duration-300 ease-out ${isHovered ? 'transform -translate-y-2' : 'opacity-100 scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ opacity: 1, transform: 'scale(1)' }}
    >
      <div>
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={32}
          height={32}
          className="w-[26.67px] h-[26.67px] p-[2.67px] mb-4 rounded-sm object-contain text-[#4F4B5C] dark:text-[#C2C2C2]"
        />
      </div>

      <h3 className="text-[20px] leading-[32px] tracking-[-0.01em] font-semibold font-inter text-[#110C22] dark:text-white mb-2">{title}</h3>
      <p className="text-[16px] leading-[24px] font-medium font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] mb-4">{description}</p>
      <a href="#" className="group relative inline-flex items-center gap-[6px] text-primary text-sm font-medium pb-[2px] w-fit">
        Learn more <img src="/icons/Arrow_link.svg" alt="arrow" className="w-4 h-4" />
        {/* Underline that covers both text and icon */}
        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
      </a>
    </div>
  );
};