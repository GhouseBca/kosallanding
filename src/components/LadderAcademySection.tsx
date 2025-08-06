'use client'
import ResponsiveBadge from './ResponsiveBadge'
import { FeatureCard } from './FeatureCard'
import { BlurFade } from './magicui/blur-fade'

export default function LadderAcademySection() {
  return (
    <section id='ladder' className="bg-white dark:bg-[#0C0C0C] text-gray-800 dark:text-gray-100 flex flex-col items-center
              w-full h-fit gap-6 p-8 md:gap-10 md:px-10 md:py-12 
              lg:px-14 lg:py-16 xl:px-16 xl:py-20">
      
      {/* Top Badge */}
      <ResponsiveBadge label="Ladder Academy" />
      

      {/* Heading */}
      <h2 className="text-[#110C22] dark:text-white text-[26px] leading-[40px] tracking-[-0.01em] font-semibold font-inter 
            md:text-[44px] md:leading-[64px] md:font-manrope 
            lg:text-[52px] 
            xl:text-[64px] xl:leading-[72px] xl:font-inter">
        From <span className="text-primary dark:text-[#5FA6F3]">classroom</span> to <br />
        <span className="text-[#0BAA60] dark:text-[#6FDAA6]">codebase</span> for real.
      </h2>

      {/* Cards */}
      <BlurFade delay={0.25} inView>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
        <FeatureCard
          title="Web Development"
          description="Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies."
          iconSrc="/icons/Group.svg"
        />
        <FeatureCard
          title="Mobile Development"
          description="Cross-platform mobile apps for iOS and Android using React Native and Flutter."
          iconSrc="/icons/Mobile.svg"
        />
        <FeatureCard
          title="Backend Development"
          description="Robust, well-documented APIs for seamless integration between systems."
          iconSrc="/icons/Server.svg"
        />
        
      </div>
      </BlurFade>

      {/* CTA Button */}
      <div className="flex justify-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition"
        >
          Visit Ladder Academy <img src=" /icons/Union.svg " alt="arrow" className='text-white'/>
        </a>
      </div>
    </section>
  )
}
