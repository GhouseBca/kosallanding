// // components/imagecard4.tsx
// import React from 'react'

// export default function ImageCard4() {
//   return (
//     <div className="h-[265.34px] flex-shrink-0 bg-white dark:bg-[#0C0C0C] 
//           rounded-[40px] shadow-md flex flex-col items-center justify-center px-[32px] py-[48px] gap-[32px]
//           md:h-[477px] lg:h-[511px] xl:h-fit"   // fixed height instead of xl:h-fit
//     >
//       <img
//         src="/icons/ScreenlyN.svg"
//         alt="Product 4"
//         className="w-full h-full object-cover"
//       />
//       <p className="font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] font-medium text-[18px] leading-[24px] text-center">
//         <span className='font-bold'>Screenly:</span>Upload, schedule, and control content across TVs, kiosks, tablets — all from one place.
//       </p>
//     </div>
//   );
// }

// components/imagecard1.tsx
import React from 'react'

// Example: components/imagecard1.tsx
export default function ImageCard4() {
  return (
    <div className="h-[265.34px] flex-shrink-0 bg-white dark:bg-[#0C0C0C] 
            rounded-[40px] shadow-md flex flex-col items-center justify-center px-[32px] py-[48px] gap-[32px]
            md:h-[477px] lg:h-[511px] xl:h-fit"
          >
          <img
            src="/icons/ScreenlyN.svg"
            alt="Product 2"
            className="w-full h-full object-cover"

          />
          <p className="font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] font-medium text-[18px] leading-[24px] text-center">
              <span className='font-bold'>Screenly:</span>Upload, schedule, and control content across TVs, kiosks, tablets — all in one.
          </p>
    </div>
  );
}


