import React from "react";
import { useTheme } from "next-themes";

interface CustomComponentProps {
  heading: string;
  paragraph: string;
  imageSrc: string;
  imageAlt?: string;
  darkLogo?: string;
  link: string;
}

export default function CustomComponent({
  heading,
  paragraph,
  imageSrc,
  imageAlt = "Image",
  darkLogo,
  link,
}: CustomComponentProps) {
  const { resolvedTheme } = useTheme();

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col w-full min-h-[96px] gap-3 opacity-100 p-3 rounded-[16px] border border-gray-200 dark:border-[#292929] hover:bg-gray-100 dark:hover:bg-[#292929] transition-colors no-underline"
    >
      <div className="flex flex-row items-center gap-3">
        <img
          src={resolvedTheme === "dark" && darkLogo ? darkLogo : imageSrc}
          alt={imageAlt}
          className="object-contain  w-[48px] h-[48px] flex-shrink-0 self-center"
        />
        <div className="flex flex-col gap-1 min-h-[48px] justify-center">
          <h2 className="text-[#110C22] dark:text-white font-manrope font-semibold text-[16px] leading-5">
            {heading}
          </h2>
          <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope text-[14px] leading-5 line-clamp-2">
            {paragraph}
          </p>
        </div>
      </div>
    </a>
  );
}