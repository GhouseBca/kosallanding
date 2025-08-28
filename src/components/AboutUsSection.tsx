'use client'

import ResponsiveBadge from "./ResponsiveBadge";
import StatsGrid from './StatsGrid'; // Adjust the path based on your folder structure


export default function AboutUsSection() {
    return (
        <section id='about' className="px-[24px] py-[32px] 
            sm:px-[40px] sm:py-[48px] 
            md:px-[56px] md:py-[64px] 
            lg:px-[64px] lg:py-[80px]
            bg-white
            dark:bg-gradient-to-b dark:from-[#161616] dark:to-black text-black dark:text-white
            opacity-100 flex flex-col gap-[32px]">

            <div className="flex flex-col gap-5 opacity-100">
                <ResponsiveBadge label="About Us" />
 
                {/* Content Area */}
                <div className="w-full h-fit flex flex-col lg:flex-row gap-[24px] opacity-100">
                    {/* Left Text Block */}
                    <h1
                        className="font-inter font-semibold text-[32px] text-[#110C22] dark:text-white leading-[40px] tracking-[-0.01em]
                            md:font-manrope md:font-bold md:text-[44px] md:leading-[64px]
                            lg:text-[52px] lg:leading-[64px]
                            xl:font-inter xl:text-[64px] xl:leading-[72px] 
                            opacity-100 gap-[56px]
                            w-full lg:w-1/2"
                        >
                        {/* Shown on default and small (base, sm) only */}
                        <span className="block lg:hidden">
                            Streamline.
                            <span className="text-[#0084FF] dark:text-[#71BBFF]"> Scale.</span><br />
                            <span className="text-[#0BAA60] dark:text-[#6FDAA6]"> Succeed.</span>
                        </span>
                        {/* Shown on md and larger */}
                        <span className="hidden lg:inline">
                            Streamline.<br />
                            <span className="text-[#0084FF] dark:text-[#71BBFF]">Scale.</span><br />
                            <span className="text-[#0BAA60] dark:text-[#6FDAA6]">Succeed.</span>
                        </span>
                    </h1>
                    {/* Right Text */}
                    <p
                        className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium 
                        text-[12px] leading-[16px] md:text-[14px] md:leading-[24px] 
                        lg:text-[16px] lg:leading-[24px] xl:text-[18px] xl:leading-[24px]
                        w-full lg:w-1/2"
                    >
                        Kosal.io is a technology-driven company that builds tailored software solutions to help businesses streamline their operations and scale with confidence.
                        <span className="block mt-4">
                            We specialize in industry-specific platforms — like Bites, our restaurant management system — and custom enterprise tools for sectors such as retail and services.
                        </span>
                        <span className="block mt-4">
                            Our products are designed for performance, integration, and growth, powered by a team that understands both local needs and global standards.
                        </span>
                    </p>
                </div>


            </div>

            <StatsGrid>
                <StatsGrid.Item value="2.5" label="Years of Experience" />
                <StatsGrid.Item value="23" label="Projects Completed" />
                <StatsGrid.Item value="4" label="Own Products" />
                <StatsGrid.Item value="50" label="Happy Customers" />
            </StatsGrid>

        </section>
    )
}

