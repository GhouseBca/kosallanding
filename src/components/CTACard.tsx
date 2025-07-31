export default function AccelerateSection() {
  return (
    <section className="w-full h-fit gap-10 bg-white dark:bg-[#0C0C0C] 
                py-8 px-6 md:py-12 md:px-10 lg:py-16 lg:px-14 xl:py-20 xl:px-16">

      <div className="bg-[#0A6CDB] dark:bg-[#3490EF] mx-auto 
              flex flex-col items-center justify-center 
              w-full h-fit gap-8 rounded-[40px] px-6 py-6 
              md:gap-8 md:rounded-[48px] md:px-10 md:py-10 
              lg:gap-10 lg:rounded-[56px] lg:px-12 lg:py-12">

        <div className="flex flex-col items-center w-full h-fit gap-4 md:gap-6">

          <h2 className="text-white dark:text-white font-inter font-semibold
                tracking-[-0.01em] h-[64px] text-[20px] leading-[32px] 
                md:w-[489px] md:h-[40px] md:text-[26px] md:leading-[40px] 
                lg:w-[601px] lg:text-[32px]">
            Ready to accelerate your development?
          </h2>

          <p className="text-[#F8F8F8] dark:text-[#F8F8F8] text-center font-manrope font-medium 
              mx-auto text-[12px] leading-[16px] md:text-[14px] md:leading-[24px] lg:text-[16px]">

            Join hundreds of companies that trust Kosal to deliver high-<br/>quality software engineering talent.
          </p>

        </div>

        <div className=" bg-white hover:bg-[#ECECED] w-fit h-fit gap-2 rounded-[12px] px-3 py-2 
              md:gap-[10px] md:rounded-[16px] md:px-4 md:py-3 lg:gap-3 lg:rounded-[16px] lg:p-4">

          <a href="#contact" className="text-[#4F4B5C]  dark:text-[#4F4B5C] align-middle font-manrope font-semibold text-[14px] leading-[24px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
            Contact Us
          </a>
        </div>
        
      </div>
    </section>
  );
}
