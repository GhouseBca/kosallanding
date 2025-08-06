'use client';

import React, { ReactNode } from 'react';
import { NumberTicker } from './magicui/number-ticker';
import { TextAnimate } from "@/components/magicui/text-animate";


interface StatsGridItemProps {
  value: string;
  label: string;
}

const StatsGridItem: React.FC<StatsGridItemProps> = ({ value, label }) => {
  // Convert value string to number, removing commas if any
  const numericValue = Number(value.replace(/,/g, ''));

  return (
    <div className="bg-[#F8F8F8] dark:bg-[#161616] opacity-100 
        rounded-[24px] p-[16px] md:rounded-[32px] md:p-[24px] 
        lg:py-[24px] lg:px-[32px] flex flex-col justify-center">

      <NumberTicker
        value={numericValue}
        className="font-inter font-semibold text-[32px] leading-[40px] tracking-[-0.01em] 
          text-[#110C22] dark:text-white xl:font-manrope xl:text-[44px] xl:leading-[64px]"
      />

      <TextAnimate
        animation="blurInUp"
        by="character"
        once
        className="font-manrope font-medium text-[14px] text-nowrap leading-[24px] tracking-normal 
                  text-[#4F4B5C] dark:text-[#C2C2C2] xl:text-[16px] mt-1"
      >
        {label}
      </TextAnimate>
    </div>
  );
};

interface StatsGridProps {
  children: ReactNode;
}

const StatsGrid: React.FC<StatsGridProps> & { Item: typeof StatsGridItem } = ({ children }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[40px] opacity-100">
      {children}
    </div>
  );
};

StatsGrid.Item = StatsGridItem;

export default StatsGrid;
