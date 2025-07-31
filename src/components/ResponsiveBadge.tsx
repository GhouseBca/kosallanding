'use client';

import React from 'react';
import clsx from 'clsx';

interface ResponsiveBadgeProps {
  label: string;
  className?: string;
}

const ResponsiveBadge: React.FC<ResponsiveBadgeProps> = ({ label, className }) => {
  return (
    <div
      className={clsx(
        `bg-[#E9F4FF] text-[#0076E2] dark:bg-[#71BBFF33] dark:text-[#45A6FF]
         font-manrope font-semibold text-[14px] leading-[24px] tracking-[0%]
         w-fit px-[12px] py-[4px] rounded-[32px]
         md:font-medium md:text-[16px] md:px-[16px] md:py-[8px]`,
        className
      )}
    >
      ● {label}
    </div>
  );
};

export default ResponsiveBadge;
