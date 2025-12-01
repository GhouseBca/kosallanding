import { GradientCTA } from "./gradient-cta";

export default function AccelerateSection() {
  return (
    <div className="bg-white dark:bg-[#0C0C0C] px-[24px] py-[32px] md:px-[40px] md:py-[48px] lg:px-[56px] lg:py-[64px] xl:px-[64px] xl:py-[80px]">

        <GradientCTA
          className="rounded-[40px] md:rounded-[48px] lg:rounded-[56px] p-6 md:p-[40px] lg:p-[48px] h-[232px] md:h-[272px] lg:h-[304px] text-center"
          colors={["#060521", "#bb66e8", "#5c5fff", "#f97eff"]}
          speed={0.9}
        >
          <div className="flex flex-col items-center justify-center gap-8 lg:gap-10">
            <div className="flex flex-col w-full h-fit opacity-100 gap-4 md:w-fit md:h-fit md:gap-6 ">
              <h1 className="font-sans font-semibold text-center text-[20px] leading-8 tracking-[-0.01em] text-white md:text-[26px] md:leading-[40px] lg:text-[32px]">
                Ready to accelerate your development?
              </h1>
              <p className="font-manrope font-medium text-center text-[12px] leading-4 text-[#F8F8F8] md:text-[14px] md:leading-6 lg:text-[16px] text-nowrap">
                Join hundreds of companies that trust Kosal to deliver high-<br />
                quality software engineering talent.
              </p>
            </div>

            <button className="bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors w-fit h-fit opacity-100 px-3 py-2 rounded-[12px] gap-2 md:px-4 md:py-3 md:rounded-[16px] md:gap-[10px] lg:py-4 lg:gap-3">
              Contact Us
            </button>
          </div>
        </GradientCTA>
      </div>
  );
}
