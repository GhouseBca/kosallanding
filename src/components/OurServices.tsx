'use client'

import ServiceCard from '@/components/ServiceCard'
import ResponsiveBadge from './ResponsiveBadge'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies.',
    imageSrc: '/icons/Group.svg',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps for iOS and Android using React Native and Flutter.',
    imageSrc: '/icons/Mobile.svg',
  },
  {
    title: 'Backend Development',
    description: 'Robust, well-documented APIs for seamless integration between systems.',
    imageSrc: '/icons/Server.svg',
  },
  {
    title: 'API Development',
    description: 'Robust, well-documented APIs for seamless integration between systems.',
    imageSrc: '/icons/Code.svg',
  },
  {
    title: 'Data Analytics',
    description: 'Insightful data analysis and visualization to drive business decisions.',
    imageSrc: '/icons/Data.svg',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences with modern design principles.',
    imageSrc: '/icons/Design.svg',
  },
]

export default function OurServices() {
  return (
    <section className="bg-white dark:bg-black flex flex-col py-8 px-6 gap-6 
                md:py-12 md:px-10 md:gap-10 
                lg:py-16 lg:px-14 
                xl:py-20 xl:px-16">

      {/* Badge */}
      <div className="flex justify-center">
        <ResponsiveBadge label="Our Services" />
      </div>

      {/* Heading */}
      <h2 className=" text-[#110C22] dark:text-white font-inter font-semibold text-center 
            text-[26px] leading-[40px] tracking-[-0.01em]
            md:text-[44px] md:leading-[64px] md:font-manrope 
            lg:text-[52px] xl:text-[64px] xl:leading-[72px] xl:font-inter"
        >

        Whatever you need,<br />
        we’ll <span className="text-primary">build it.</span>

      </h2>

      {/* Services Grid */}
      <div className="w-full h-fit grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}
