'use client';

import CustomComponent from "./CustomComponent";

export default function CustomLayoutPage() {
  return (
    <section className="flex flex-row w-[1440px] h-fit gap-8 opacity-100 p-4 bg-white dark:bg-black">
     
        <div className="flex flex-col w-fit h-fit gap-2 opacity-100">
            <h1 className="font-manrope font-semibold text-[18px] leading-6">Our Product</h1>
            <div className="flex flex-col w-[696px] h-fit gap-4 opacity-100">
                <div className="flex flex-row gap-4">
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
                
                <div className="flex flex-row gap-4">
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
      
        <div className="flex flex-row w-full h-fit gap-8 opacity-100">
            <div className="flex flex-col w-full h-fit gap-2 opacity-100">
                <h1 className="font-manrope font-semibold text-[18px] leading-5 text-[#110C22] dark:text-white">
                    Beta Versions
                </h1>
                <div className="flex flex-col w-fit h-fit gap-[16px]">
                    <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Typeform</a>
                    <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Zapier</a>
                    <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">n8n</a>
                    <a href="#" className="hover:underline hover:text-[#0A6CDB] text-[#4F4B5C] dark:text-[#C2C2C2] text-[16px] leading-[24px] font-manrope font-semibold align-middle">Notion</a>
                </div>
            </div>
            <div className="flex flex-col w-full h-fit gap-2 opacity-100">
                <h1 className="font-manrope font-semibold text-[18px] leading-5 text-[#110C22] dark:text-white">
                    Beta Versions
                </h1>
                <div className="flex flex-col w-fit h-fit gap-[16px]">
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
