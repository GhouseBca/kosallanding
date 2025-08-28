'use client'

import { TypingAnimation } from "./magicui/typing-animation"
import ResponsiveBadge from "./ResponsiveBadge"

export default function WhyChooseKosal() {
    return (
        <section id='wck' className="w-full h-fit  bg-white  dark:bg-gradient-to-b dark:from-black dark:to-[#0C0C0C]
                    py-8 px-6 
                    md:py-12 md:px-10 md:gap-10 
                    lg:py-16 lg:px-14  
                    xl:py-20 xl:px-16
                    flex flex-col gap-6">

            <div className="w-full h-fit gap-6 md:gap-10 flex flex-col">
                {/* Badge - centered */}
                <div className="flex justify-center">
                    <ResponsiveBadge label="Why Choose Kosal" />
                </div>

                {/* Heading - left aligned */}
                <h2 className="font-SemiBold text-left text-3xl md:text-4xl lg:text-5xl font-bold font-manrope leading-tight text-black dark:text-white">
                    <span className="text-green-600">We listen</span> first,<br />
                    Then <span className="text-primary">we build.</span>
                </h2>
            </div>

            {/* ----- DEFAULT/SMALL/MEDIUM LAYOUT (visible < lg) ----- */}
            <div className="block xl:hidden">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="relative w-full h-fit max-w-[534px] rounded-[32px] bg-[#F8F8F8] dark:bg-[#161616] 
                        flex flex-row md:flex-col justify-between gap-4 lg:gap-4 px-6 py-6 sm:h-full sm:px-8 group">
                        <img
                            src="/img/vetted.png"
                            alt="Vetted Engineers"
                            className="w-[106px] h-[82px] opacity-100 sm:absolute md:top-6 md:right-6 md:w-[197px] md:h-[153px] xl:static transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="text-black dark:text-white w-full h-fit flex flex-col gap-2 mt-auto opacity-100">
                            <TypingAnimation className="text-[#110C22] dark:text-white font-inter font-semibold text-[20px] leading-[32px] tracking-[-0.01em] md:text-[26px] md:leading-[40px]">
                                Vetted Engineers
                            </TypingAnimation>
                            <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[18px] leading-[24px] tracking-normal">
                                Only the top 3% of engineers make it into our network.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative rounded-[32px] bg-gray-50 dark:bg-[#161616] flex flex-row-reverse justify-between
                        h-[160px] p-4 md:flex-col md:h-[310.5px] md:px-8 md:py-6 group">
                        <img
                            src="/img/rocket.png"
                            alt="Fast Onboarding"
                            className="object-contain w-auto h-[102px] sm:absolute md:top-6 md:right-6 md:h-[157px] xl:static transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="flex flex-col text-black dark:text-white w-full h-fit gap-2 md:h-[104px] max-w-full justify-center md:mt-auto">
                            <TypingAnimation className="font-semibold text-[20px] text-[#110C22] dark:text-white leading-[32px] tracking-[-0.01em] md:text-[26px] md:leading-[40px]">
                                Fast Onboarding
                            </TypingAnimation>
                            <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[18px] leading-[24px] tracking-normal">
                                Get matched with the right engineers in days, not weeks.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative rounded-[32px] bg-gray-50 dark:bg-[#161616]
                        flex flex-row justify-between gap-1 p-4 md:flex-col md:px-8 md:py-6 h-[136px] md:h-[310.5px] group">
                        <img
                            src="/img/chat.png"
                            alt="Flexible Engagement"
                            className="object-contain w-[106px] h-[82px] md:absolute md:top-6 md:right-6 md:w-[185px] md:h-[148px] xl:static transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="flex flex-col z-10 mt-auto max-w-[293px] text-black dark:text-white justify-center sm:mt-auto">
                            <TypingAnimation className="text-[#110C22] dark:text-white font-inter font-semibold
                                text-[20px] leading-[32px] tracking-[-0.01em] md:text-[26px] md:leading-[40px] text-nowrap">
                                Flexible Engagement
                            </TypingAnimation>
                            <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[18px] leading-[24px] tracking-normal">
                                From short-term to long-term — we scale with you.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative rounded-[32px] bg-gray-50 dark:bg-[#161616] flex flex-row-reverse justify-between gap-4 p-6
                        md:flex-col md:px-8 md:py-6 h-[136px] md:h-[310.5px] group">
                        <img
                            src="/img/thumb.png"
                            alt="Quality Guaranteed"
                            className="object-contain w-[106px] h-[82px] md:absolute md:top-6 md:right-6 md:w-[185px] md:h-[148px] xl:static transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="flex flex-col mt-auto max-w-[293px] text-black dark:text-white justify-center md:mt-auto">
                            <TypingAnimation className="text-[#110C22] dark:text-white font-inter font-semibold text-[20px] leading-[32px] tracking-[-0.01em] md:text-[26px] md:leading-[40px] text-nowrap">
                                Quality Guaranteed
                            </TypingAnimation>
                            <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[18px] leading-[24px] tracking-normal">
                                Quality you can trust, support you can count on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----- LARGE LAYOUT (visible only on lg+) ----- */}
            <div className="hidden xl:flex flex-row gap-8 h-fit">
                {/* Left Side: Card 1 */}
                <div className="w-full h-fit max-w-[534px] rounded-[32px] bg-[#F8F8F8] dark:bg-[#161616] 
                        flex flex-col justify-between gap-4 px-6 py-6 group">
                    <img
                        src="/img/vetted.png"
                        alt="Vetted Engineers"
                        className="opacity-100 w-[570px] h-[485px] transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="text-black dark:text-white w-full h-fit flex flex-col gap-2 mt-auto opacity-100">
                        <TypingAnimation className="text-[#110C22] dark:text-white font-inter font-semibold tracking-[-0.01em] text-[26px] leading-[40px] h-[40px] opacity-100">
                            Vetted Engineers
                        </TypingAnimation>
                        <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[18px] leading-[24px] tracking-normal h-[48px] opacity-100">
                            Only the top 3% of engineers make it into our network.
                        </p>
                    </div>
                </div>

                {/* Right Side: Cards 2, 3, 4 */}
                <div className="grid grid-cols-2 grid-rows-2 gap-6 sm:gap-8 w-full">
                    {/* Top: Card 2 */}
                    <div className="relative col-start-1 col-span-2 row-start-1 row-span-1
                            rounded-[32px] bg-gray-50 dark:bg-[#161616] flex justify-between 
                            h-[310.5px] px-8 py-6 opacity-100 group">
                        <img
                            src="/img/rocket.png"
                            alt="Fast Onboarding"
                            className="object-contain absolute right-0 top-0 z-0 h-[329px] opacity-100 transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="flex flex-col z-10 mt-auto text-black dark:text-white h-[104px] gap-4 max-w-[274px]">
                            <TypingAnimation className="text-[#110C22] dark:text-white font-inter font-semibold tracking-[-0.01em] text-[26px] leading-[40px] h-[40px] opacity-100">
                                Fast Onboarding
                            </TypingAnimation>
                            <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[18px] leading-[24px] tracking-normal h-[48px] opacity-100">
                                Get matched with the right engineers in days, not weeks.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative rounded-[32px] bg-gray-50 dark:bg-[#161616] flex flex-col justify-between gap-4 p-6 col-start-1 row-start-2
                            max-w-[534px] h-[310.5px] opacity-100 group">
                        <img
                            src="/img/chat.png"
                            alt="Flexible Engagement"
                            className="absolute right-0 top-0 object-contain w-[152px] h-[152px] opacity-100 transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="flex flex-col z-10 mt-auto max-w-[293px] text-black dark:text-white">
                            <TypingAnimation className="text-[#110C22] dark:text-white font-inter font-semibold tracking-[-0.01em] text-[26px] leading-[40px] h-[40px] opacity-100">
                                Flexible Engagement
                            </TypingAnimation>
                            <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[18px] leading-[24px] tracking-normal h-[48px] opacity-100">
                                From short-term to long-term — we scale with you.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative rounded-[32px] bg-gray-50 dark:bg-[#161616] flex flex-col justify-between gap-4 p-6 col-start-2 row-start-2
                            max-w-[534px] h-[310.5px] opacity-100 group">
                        <img
                            src="/img/thumb.png"
                            alt="Quality Guaranteed"
                            className="absolute right-0 sm:top-0 md:top-0 lg:top-0 object-contain w-[106px] h-[82px] sm:w-[185px] sm:h-[148px] lg:w-[152px] lg:h-[152px] opacity-100 transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="flex flex-col z-10 mt-auto max-w-[293px] text-black dark:text-white">
                            <TypingAnimation className="text-[#110C22] dark:text-white font-inter font-semibold tracking-[-0.01em] text-[26px] leading-[40px] h-[40px] opacity-100">
                                Quality Guaranteed
                            </TypingAnimation>
                            <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[18px] leading-[24px] tracking-normal h-[48px] opacity-100">
                                Quality you can trust, support you can count on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

