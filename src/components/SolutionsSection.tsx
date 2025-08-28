'use client';
import React from 'react';
import ResponsiveBadge from './ResponsiveBadge';
import CardPreview from './CardPreview';
// import { AnimatedTestimonials } from './ui/animated-testimonials';
// import { StickyScroll } from './ui/sticky-scroll-reveal';
// import StickyHorizontalCards, { StickyHorizontalCardsRef } from './StickyHorizontalCards';
// import { useState, useRef } from 'react';

// const tabs = ['Bites', 'LinkedIn AI Agent', 'Retailer\'s CRM', 'Collection App'];

export default function SolutionsSection() {
  // const [activeTab, setActiveTab] = useState('Bites');
  // const stickyCardsRef = useRef<StickyHorizontalCardsRef>(null);

  // const handleTabClick = (tab: string) => {
  //   const tabIndex = tabs.indexOf(tab);
  //   if (tabIndex !== -1) {
  //     // Update the active tab immediately for visual feedback
  //     setActiveTab(tab);
      
  //     // Scroll to the specific card
  //     stickyCardsRef.current?.scrollToCard(tabIndex);
  //   }
  // };

  // const content = [
  //   {
  //     title: "Bites",
  //     description:"Streamline your restaurant operations with powerful management tools.",
  //     content: 
  //         <div className="flex h-full w-full items-center justify-center text-white">
  //           <img
  //             src="/icons/BitesN.svg"
  //             width={300}
  //             height={300}
  //             className="h-full w-full"
  //             alt="linear board demo"
  //           />
  //         </div>
  //   },
  //   {
  //     title: "Form House",
  //     description:"Build unlimited AI-powered forms with ease and efficiency.",
  //     content: 
  //         <div className="flex h-full w-full items-center justify-center text-white">
  //           <img
  //             src="/icons/KisformsN.svg"
  //             width={300}
  //             height={300}
  //             className="h-full w-full"
  //             alt="linear board demo"
  //           />
  //         </div>
  //   },
  //   {
  //     title: "Postmate",
  //     description:"Create engaging content effortlessly with AI-driven automation.",
  //     content: 
  //         <div className="flex h-full w-full items-center justify-center text-white">
  //           <img
  //             src="/icons/PostmateN.svg"
  //             width={300}
  //             height={300}
  //             className="h-full w-full"
  //             alt="linear board demo"
  //           />
  //         </div>
  //   },
  //   {
  //     title: "Screenly",
  //     description:"Upload, schedule, and control content across TVs, kiosks, tablets — all in one.",
  //     content: 
  //         <div className="flex h-full w-full items-center justify-center text-white">
  //           <img
  //             src="/icons/ScreenlyN.svg"
  //             width={300}
  //             height={300}
  //             className="h-full w-full"
  //             alt="Screenly demo"
  //           />
  //         </div>
  //   }
  // ];

  // const testimonials = [
  //   {
  //     quote: "Streamline your restaurant operations with powerful management tools.",
  //     name: "Bites",
  //     designation: "Bites Software",
  //     src: "/icons/BitesN.svg",
  //   },
  //   {
  //     quote: "Build unlimited AI-powered forms with ease and efficiency.",
  //     name: "Fomly",
  //     designation: "We Called Kiss Form",
  //     src: "/icons/KisformsN.svg",
  //   },
  //   {
  //     quote: "Create engaging content effortlessly with AI-driven automation.",
  //     name: "Postmate",
  //     designation: "Postmate a linkedin AI",
  //     src: "/icons/PostmateN.svg",
  //   },
  //   {
  //     quote: "Upload, schedule, and control content across TVs, kiosks, tablets — all in one.",
  //     name: "Screenly",
  //     designation: "Screenly works Good",
  //     src: "/icons/ScreenlyN.svg",
  //   },
  // ];
  
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
      flex flex-col items-center gap-[24px] py-[32px]
      md:gap-[32px] md:py-[48px]
      lg:gap-[40px] lg:py-[64px]
      xl:py-[80px]">
      
      {/* Label */}
      <ResponsiveBadge label="Our Products" />

      {/* Heading */}
      <h2 className="text-[#110C22] dark:text-white text-center font-inter font-semibold text-[26px] leading-[40px] tracking-[-0.01em]
        md:font-manrope md:text-[44px] md:leading-[64px] lg:text-[52px] xl:font-inter xl:text-[64px] xl:leading-[72px]">
        <span className="text-[#0A6CDB] dark:text-[#5FA6F3]">Solutions </span> for Every <br /> Business Need.
      </h2>

      
      {/* StickyHorizontalCards with ref */}
      {/* <StickyHorizontalCards 
        ref={stickyCardsRef}
        focusedIndex={tabs.indexOf(activeTab)}
        onFocusChange={(focusedIndex) => {
          setActiveTab(tabs[focusedIndex] || 'Bites');
        }} 
      /> */}

      {/* Tabs - Now positioned below each card */}
      {/* <div className="hidden md:flex justify-center px-4 mt-4">
        <div className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 shadow-inner flex gap-1 md:gap-2 overflow-x-auto max-w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const isBites = tab === 'Bites';

            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`font-manrope font-bold text-[11px] sm:text-[12px] md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[24px] align-middle whitespace-nowrap transition duration-200 rounded-full flex-shrink-0
                  ${isActive
                    ? 'bg-white dark:bg-[#1a1a1a] shadow text-[#110C22] dark:text-white'
                    : 'text-[#110C22]/70 dark:text-gray-300 hover:text-[#110C22] dark:hover:text-white'}
                  ${isBites
                    ? 'w-[45px] sm:w-[50px] md:w-[59px] h-[32px] sm:h-[36px] md:h-[40px] px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2'
                    : 'w-[100px] sm:w-[120px] md:w-[142px] h-[32px] sm:h-[36px] md:h-[40px] px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2'}
                `}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div> */}

      {/* Description */}

      {/* <div className="w-full">
        <StickyScroll content={content} />
      </div> */}

      {/* <AnimatedTestimonials testimonials={testimonials} /> */}

      <CardPreview cards={cards} />

      <p className="text-center max-w-2xl text-sm lg:text-base text-[#110C22]/80 dark:text-gray-400">
        Manage every aspect of your restaurant — from digital menus and real-time kitchen displays
        to seamless billing, analytics, and POS integration.
      </p>
    </section>
  )
}
