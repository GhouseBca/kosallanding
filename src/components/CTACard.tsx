import { GradientCTA } from "./gradient-cta";

export default function AccelerateSection() {
  return (
    <div className="dark:bg-gradient-to-b dark:from-[#161616] dark:to-black mx-auto w-full h-fit space-y-[32px] opacity-100 rounded-[40px] p-[24px] md:rounded-[48px] md:p-[40px] lg:space-y-[40px] lg:rounded-[56px] lg:p-[48px] xl:space-y-[40px] xl:rounded-[56px] xl:p-[48px]">

        <GradientCTA
          className="flex flex-col p-6 h-[400px] text-center gap-8 lg:gap-10"
          colors={["#060521", "#bb66e8", "#5c5fff", "#f97eff"]}
          speed={0.9}
        >
          <div className="flex flex-col w-full h-fit opacity-100 gap-4 md:w-fit md:h-fit md:gap-6 mb-4 md:mb-6">
            <h1 className="font-sans font-semibold text-center text-[20px] leading-8 tracking-[-0.01em] text-white md:text-[26px] md:leading-[40px] lg:text-[32px]">
              Ready to accelerate your development?
            </h1>
            <p className="font-manrope font-medium text-center text-[12px] leading-4 text-[#F8F8F8] md:text-[14px] md:leading-6 lg:text-[16px]">
              Join hundreds of companies that trust Kosal to deliver high-<br />
              quality software engineering talent.
            </p>
          </div>
          <button className="bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors w-fit h-fit opacity-100 px-3 py-2 rounded-[12px] gap-2 md:px-4 md:py-3 md:rounded-[16px] md:gap-[10px] lg:py-4 lg:gap-3">
            Contact Us
          </button>
        </GradientCTA>
      </div>
  );
}
