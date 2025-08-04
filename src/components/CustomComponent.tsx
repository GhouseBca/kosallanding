import React from "react";

interface CustomComponentProps {
  heading: string;
  paragraph: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function CustomComponent({
  heading,
  paragraph,
  imageSrc,
  imageAlt = "Image",
}: CustomComponentProps) {
  return (
    <div className="flex flex-row w-full h-fit gap-9 opacity-100 py-2 px-2 rounded-[24px] border">
      <div className="flex flex-col w-full h-fit gap-2 opacity-100">
        <h2 className="text-[#110C22] dark:text-white font-semibold text-lg">
          {heading}
        </h2>
        <p className="text-[#4F4B5C] text-nowrap dark:text-[#C2C2C2] text-base">
          {paragraph}
        </p>
      </div>

      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-contain rounded-lg"
      />
    </div>
  );
}
