'use client';
import { useState, useRef } from 'react';
import ResponsiveBadge from './ResponsiveBadge';
import StickyHorizontalCards, { StickyHorizontalCardsRef } from './StickyHorizontalCards';

const tabs = ['Bites', 'LinkedIn AI Agent', 'Retailer\'s CRM', 'Collection App'];

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState('Bites');
  const stickyCardsRef = useRef<StickyHorizontalCardsRef>(null);

  const handleTabClick = (tab: string) => {
    const tabIndex = tabs.indexOf(tab);
    if (tabIndex !== -1) {
      // Update the active tab immediately for visual feedback
      setActiveTab(tab);
      
      // Scroll to the specific card
      stickyCardsRef.current?.scrollToCard(tabIndex);
    }
  };

  return (
    <section id='products' className="w-full h-fit bg-gradient-to-b from-white to-[#F8F8F8]
     dark:bg-gradient-to-b dark:from-[#161616] dark:to-black
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
      <StickyHorizontalCards 
        ref={stickyCardsRef}
        focusedIndex={tabs.indexOf(activeTab)}
        onFocusChange={(focusedIndex) => {
          setActiveTab(tabs[focusedIndex] || 'Bites');
        }} 
      />

      {/* Tabs */}
      <div className="hidden md:flex justify-center px-4">
        <div className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 shadow-inner flex gap-1 md:gap-2 overflow-x-auto max-w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const isBites = tab === 'Bites';

            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`font-manrope font-bold text-[12px] md:text-[14px] leading-[20px] md:leading-[24px] align-middle whitespace-nowrap transition duration-200 rounded-full flex-shrink-0
                  ${isActive
                    ? 'bg-white dark:bg-[#1a1a1a] shadow text-[#110C22] dark:text-white'
                    : 'text-[#110C22]/70 dark:text-gray-300 hover:text-[#110C22] dark:hover:text-white'}
                  ${isBites
                    ? 'w-[50px] md:w-[59px] h-[36px] md:h-[40px] px-2 md:px-3 py-1.5 md:py-2'
                    : 'w-[120px] md:w-[142px] h-[36px] md:h-[40px] px-2 md:px-3 py-1.5 md:py-2'}
                `}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      {/* Description */}
      <p className="text-center max-w-2xl text-sm lg:text-base text-[#110C22]/80 dark:text-gray-400">
        Manage every aspect of your restaurant — from digital menus and real-time kitchen displays
        to seamless billing, analytics, and POS integration.
      </p>
    </section>
  )
}
