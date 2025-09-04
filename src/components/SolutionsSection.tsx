'use client';
import React from 'react';
import ResponsiveBadge from './ResponsiveBadge';
import CardPreview from './CardPreview';

export default function SolutionsSection() {
    const cards = [
    {
      id: 1,
      title: "Bites",
      description: "Streamline your restaurant operations with powerful management tools.",
      image: "/icons/BitesN.svg",
    },
    {
      id: 2,
      title: "Form House",
      description: "Build unlimited AI-powered forms with ease and efficiency.",
      image: "/icons/KisformsN.svg",
    },
    {
      id: 3,
      title: "Postmate",
      description: "Create engaging content effortlessly with AI-driven automation.",
      image: "/icons/PostmateN.svg",
    },
    {
      id: 4,
      title: "Screenly",
      description: "Upload, schedule, and control content across TVs, kiosks, tablets — all in one.",
      image: "/icons/ScreenlyN.svg",
    },
  ];

  return (
    <section id='products' className="w-full h-fit bg-[#F8F8F8] dark:bg-black
      flex flex-col items-center gap-[24px] px-[24px] py-[32px] 
            md:px-[40px] md:py-[48px] 
            lg:px-[56px] lg:py-[64px] 
            xl:px-[64px] xl:py-[80px]">
      
      {/* Label */}
      <ResponsiveBadge label="Our Products" />

      {/* Heading */}
      <h2 className="text-[#110C22] dark:text-white text-center font-inter font-semibold text-[26px] leading-[40px] tracking-[-0.01em]
        md:font-manrope md:text-[44px] md:leading-[64px] lg:text-[52px] xl:font-inter xl:text-[64px] xl:leading-[72px]">
        <span className="text-[#0A6CDB] dark:text-[#5FA6F3]">Solutions </span> for Every <br /> Business Need.
      </h2>

      <CardPreview cards={cards} />
      
    </section>
  )
}
