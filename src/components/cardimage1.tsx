// components/imagecard1.tsx
import React from 'react'

export default function ImageCard1() {
  return (
    <div className="h-[265.34px] flex-shrink-0 bg-white dark:bg-[#0C0C0C] rounded-[40px] shadow-md flex flex-col items-center justify-center 
          px-[32px] py-[48px] gap-[32px] md:h-[477px] lg:h-[511px] xl:h-fit"
        >
      <div className="w-full h-[155px] md:h-[355px] lg:h-[363px] xl:h-[403px] overflow-hidden rounded-[28px]">
        <img
          src="/icons/BitesN.svg"
          alt="Product 1"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] font-medium text-[18px] leading-[24px] text-center">
        <span className='font-bold'>Bites:</span>Streamline your restaurant operations with powerful management tools.
      </p>
    </div>
  );
}
