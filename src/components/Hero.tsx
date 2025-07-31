import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-fit mt-17 grid place-items-center text-center relative
       px-[24px] py-[48px] gap-[32px]
       md:px-[40px] md:py-[64px]
       lg:px-[56px] lg:py-[80px]
       xl:px-[64px] xl:py-[120px]">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)]
         dark:bg-[linear-gradient(to_right,#1F1F1F_1px,transparent_1px),linear-gradient(to_bottom,#1F1F1F_1px,transparent_1px)] [background-size:90px_90px]">
      </div>

      {/* Content Container */}
      <div
        className="z-10 flex flex-col items-center justify-center gap-[40px] w-full h-fit">
        {/* Header & Paragraph Block */}
        <div
          className="flex flex-col gap-[32px] h-fit">
          <h1
            className="text-[#110C22] dark:text-white opacity-100 rotate-0
            text-[32px] leading-[40px] tracking-[-0.01em] font-inter font-bold      
            md:text-[52px] md:leading-[64px] md:tracking-[-0.01em] md:font-manrope md:font-semibold
            lg:text-[76px] lg:leading-[88px] lg:tracking-[0] lg:font-bold
            xl:text-[88px] xl:leading-[96px]"
            >
            Empowering Businesses with <br /> Smart Software Solutions
          </h1>

          <p
           className="text-[#4F4B5C] dark:text-[#C2C2C2] text-center 
              font-manrope font-medium text-[16px] leading-[24px]
              md:text-[18px] lg:font-inter lg:text-[20px] 
              lg:leading-[32px] lg:tracking-[-0.01em]">
            From restaurants to enterprise management, we <br className="hidden sm:inline" /> build tools that grow with your goals.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 w-fit h-fit">
          <Button variant="outline">
            Schedule a Demo
          </Button>
          <Button className="bg-[#0A6CDB] dark:text-white hover:bg-[#0A6CDB]/90 ">
            Contact Us
          </Button>
        </div>

      </div>
    </section>
  );
}
