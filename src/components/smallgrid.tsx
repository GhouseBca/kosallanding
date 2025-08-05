import React from "react";

interface CustomSectionProps {
  heading: string;
  paragraph: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function CustomSection({
  heading,
  paragraph,
  imageSrc,
  imageAlt = "Service Image",
}: CustomSectionProps) {
  return (
    <section
      className="h-fit py-4 px-6 opacity-100 rounded-[24px] border border-gray-300"
    >
      <div className="flex flex-col md:flex-row h-fit gap-4 opacity-100 items-center">
        {/* Text content */}
        <div className="flex flex-col h-fit gap-2 opacity-100">
          <h1 className="text-[#110C22] dark:text-white font-manrope font-semibold text-[16px] leading-[24px] tracking-normal">
            {heading}
          </h1>
          <p className="text-[#4F4B5C] dark:text-[#C2C2C2] font-manrope font-medium text-[12px] leading-[16px] tracking-normal">
            {paragraph}
          </p>
        </div>
        {/* Image container */}
        <div>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: 47.77,
              height: 47.77,
            }}
          />
        </div>
      </div>
    </section>
  );
}
