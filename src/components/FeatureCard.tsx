'use client';

import Image from 'next/image';

type FeatureCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  link?: string;
};

export const FeatureCard = ({ title, description, iconSrc, link = '#' }: FeatureCardProps) => {
  return (
    <div className="bg-[#F8F8F8] dark:bg-[#161616] hover:bg-[#ECECED] dark:hover:bg-[#ECECED] w-full h-fit gap-4 rounded-[32px] p-6 sm:px-8 sm:py-6 md:px-8 md:py-6 lg:px-8 lg:py-6 shadow-sm">
      <Image
        src={iconSrc}
        alt={`${title} icon`}
        width={32}
        height={32}
        className="w-[26.67px] h-[26.67px] p-[2.67px] mb-4 rounded-sm object-contain text-[#4F4B5C] dark:text-[#C2C2C2]"
      />

      <h3 className="text-[20px] leading-[32px] tracking-[-0.01em] font-semibold font-inter text-[#110C22] dark:text-white mb-2">{title}</h3>
      <p className="text-[16px] leading-[24px] font-medium font-manrope text-[#4F4B5C] dark:text-[#C2C2C2] mb-4">{description}</p>
      <a
        href={link}
        className="text-[16px] leading-[24px] font-semibold font-manrope text-[#0084FF] dark:text-[#71BBFF] pb-[2px] flex items-center gap-[6px] hover:underline align-middle w-fit h-fit">
        Learn more <img src="/icons/Arrow_link.svg" alt="arrow" className="w-5 h-5" />
      </a>
    </div>
  );
};
