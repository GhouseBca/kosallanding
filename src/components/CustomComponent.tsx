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
    <div className="flex flex-col md:justify-evenly md:flex-row w-full h-fit gap-6 md:gap-5 opacity-100 py-2 px-2 rounded-[24px] border hover:bg-[#ECECED] dark:hover:bg-[#ECECED]">
      <div className="flex flex-col w-full md:w-auto h-fit gap-2 opacity-100">
        <h2 className="text-[#110C22] dark:text-white hover:dark:text-black font-semibold text-lg">
          {heading}
        </h2>
        <p className="text-[#4F4B5C] whitespace-nowrap dark:text-[#C2C2C2] hover:dark:text-black text-base">
          {paragraph}
        </p>
      </div>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-contain rounded-lg w-full md:w-auto"
      />
    </div>
  );
}
