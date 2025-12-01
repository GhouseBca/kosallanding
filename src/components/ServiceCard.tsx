'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ServiceCardProps {
    imageSrc: string
    title: string
    description: string
}

export default function ServiceCard({ imageSrc, title, description }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`bg-[#F8F8F8] dark:bg-[#161616] hover:bg-[#ECECED] dark:hover:bg-[#0c0a09] dark:hover:text-[#110C22] 
                flex flex-col shadow-sm
                rounded-[32px] py-[24px] px-[32px] gap-4 md:h-fit
                transition-all duration-300 ease-out ${isHovered ? 'transform -translate-y-2' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ opacity: 1 }}
        >
            <div>
                <Image 
                    src={imageSrc} 
                    alt={title} 
                    width={24} 
                    height={24} 
                    className="relative top-[2.67px] left-[2.67px] opacity-100 transition-opacity duration-400" 
                />
            </div>
            
            <div className="w-full h-fit flex flex-col gap-4 opacity-100">
                <div className="w-full h-fit gap-2 opacity-100">
                    <h3 className="w-[214px] h-[32px] font-inter font-semibold text-[20px] leading-[32px] tracking-[-0.01em] text-[#110C22] dark:text-white opacity-100">{title}</h3>
                    <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[16px] leading-[24px] opacity-100">{description}</p>
                </div>
                
                <a
                    href="#"
                    className="group relative inline-flex items-center gap-[6px] text-primary text-sm font-medium pb-[2px] w-fit"
                    >
                    Learn more
                    <img src="/icons/Arrow_link.svg" alt="arrow" className="w-4 h-4" />

                    {/* Underline that covers both text and icon */}
                    <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </a>
            </div>
        </div>
    )
}