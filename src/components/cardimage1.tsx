// components/imagecard1.tsx
import React from 'react'

// Example: components/imagecard1.tsx
export default function ImageCard1() {
  return (
    <div className="h-[265.34px] flex-shrink-0 bg-white dark:bg-[#0C0C0C] rounded-[40px] shadow-md flex flex-col items-center justify-center 
          px-[32px] py-[48px] gap-[32px] md:h-[477px] lg:h-[511px] xl:h-fit"
        >
      <img
        src="/img/Product 1.png"
        alt="Product 1"
        className="w-[282px] h-[155px] opacity-100 object-cover
          md:w-[647px] md:h-[355px]
          lg:w-[663px] lg:h-[363px]
          xl:w-[735px] xl:h-[403px]"

      />
      <p className="font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] font-medium text-[18px] leading-[24px] text-center">
        Description for Product 1.
      </p>
    </div>
  );
}


