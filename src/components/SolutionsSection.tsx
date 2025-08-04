'use client';
import { useState } from 'react';
import ResponsiveBadge from './ResponsiveBadge';
import StickyHorizontalCards from './StickyHorizontalCards';

const tabs = ['Bites', 'LinkedIn AI Agent', 'Retailer’s CRM', 'Collection App'];

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState('Bites');

  return (
    <section id='products' className="w-full h-fit bg-[#F8F8F8] dark:bg-[#161616]
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

      {/* StickyHorizontalCards with onFocusChange callback */}
      <StickyHorizontalCards onFocusChange={(focusedIndex) => {
        setActiveTab(tabs[focusedIndex] || 'Bites');
      }} />

      {/* Tabs */}
      <div className="hidden md:flex justify-center">
        <div className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 shadow-inner flex gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const isBites = tab === 'Bites';

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-manrope font-bold text-[14px] leading-[24px] align-middle whitespace-nowrap transition duration-200 rounded-full
                  ${isActive
                    ? 'bg-white dark:bg-[#1a1a1a] shadow text-[#110C22] dark:text-white'
                    : 'text-[#110C22]/70 dark:text-gray-300 hover:text-[#110C22] dark:hover:text-white'}
                  ${isBites
                    ? 'w-[59px] h-[40px] px-3 py-2'
                    : 'w-[142px] h-[40px] px-3 py-2'}
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
