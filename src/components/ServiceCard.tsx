// components/ServiceCard.tsx
'use client'

import Image from 'next/image'

interface ServiceCardProps {
    imageSrc: string
    title: string
    description: string
}

export default function ServiceCard({ imageSrc, title, description }: ServiceCardProps) {
    return (
        <div className="bg-[#F8F8F8] dark:bg-[#161616] hover:bg-[#ECECED] dark:hover:bg-[#F8F8F8] dark:hover:text-[#110C22] 
                flex flex-col shadow-sm
                rounded-[32px] py-[24px] px-[32px] gap-4 md:h-fit">

            <Image src={imageSrc} alt={title} width={24} height={24} className="relative top-[2.67px] left-[2.67px] opacity-100" />
            
            <div className="w-full h-fit flex flex-col gap-4 opacity-100">
                <div className="w-full h-fit gap-2 opacity-100">
                    <h3 className="w-[214px] h-[32px] font-inter font-semibold text-[20px] leading-[32px] tracking-[-0.01em] text-[#110C22] dark:text-white opacity-100">{title}</h3>
                    <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[16px] leading-[24px] opacity-100">{description}</p>
                </div>
                
                <a href="#" className="text-primary text-sm font-medium hover:underline flex items-center gap-[6px] pb-[2px] w-fit h-fit opacity-100">
                    Learn more <img src=" /icons/Arrow_link.svg " alt="arrow" />
                </a>
                
            </div>
        </div>
    )
}
