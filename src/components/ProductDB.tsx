'use client';

import CustomComponent from "./CustomComponent";

export default function CustomLayoutPage() {
  return (
    <section
      className={`
        flex flex-col
        w-full h-fit gap-4 opacity-100 p-2 bg-white dark:bg-black
        xl:flex-row md:gap-6 md:p-3
         lg:p-4
        xl:w-[1440px] xl:gap-8 xl:p-4
      `}
    >

      {/* Left Column: Our Product */}
      <div className="flex flex-col w-full h-fit gap-2 opacity-100 xl:w-fit">
        <h1 className="font-manrope font-semibold text-[18px] leading-6">Our Product</h1>
        <div className="flex flex-col w-full gap-4 opacity-100 xl:w-[696px]">
          <div className="flex flex-col gap-4 md:flex-row">
            <CustomComponent
              heading="Bites"
              paragraph="A Restaurant Management Tool"
              imageSrc="/img/Bites.png"
              imageAlt="web icon"
            />
            <CustomComponent
              heading="Collection App"
              paragraph="A Restaurant Management Tool"
              imageSrc="/img/Collection App.png"
              imageAlt="web icon"
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <CustomComponent
              heading="Linkedin AI"
              paragraph="A Restaurant Management Tool"
              imageSrc="/img/Linkedin.png"
              imageAlt="web icon"
            />
            <CustomComponent
              heading="Retailer’s CRM"
              paragraph="A Restaurant Management Tool"
              imageSrc="/img/Retailer CRM.png"
              imageAlt="web icon"
            />
          </div>
        </div>
      </div>

      {/* Right Columns: Beta Versions */}
      <div className="flex flex-col w-full h-fit gap-6 opacity-100
          md:flex-row md:gap-4 lg:gap-8">
        {/* Beta Column 1 */}
        <div className="flex flex-col w-full h-fit gap-2 opacity-100">
          <h1 className="font-manrope font-semibold text-[18px] leading-5 text-[#110C22] dark:text-white">
            Beta Versions
          </h1>
          <div className="flex flex-col w-fit h-fit gap-4 md:gap-[16px]">
            <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Typeform</a>
            <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Zapier</a>
            <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">n8n</a>
            <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Notion</a>
          </div>
        </div>
        {/* Beta Column 2 */}
        <div className="flex flex-col w-full h-fit gap-2 opacity-100">
          <h1 className="font-manrope font-semibold text-[18px] leading-5 text-[#110C22] dark:text-white">
            Beta Versions
          </h1>
          <div className="flex flex-col w-fit h-fit gap-4 md:gap-[16px]">
            <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Typeform</a>
            <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Zapier</a>
            <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">n8n</a>
            <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Notion</a>
          </div>
        </div>
      </div>
    </section>
  );
}
