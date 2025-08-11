'use client';

import CustomComponent from "./CustomComponent";
import { products } from "@/constants/product";

export default function ProductDb() {
  return (
    <section className="flex flex-col w-full h-fit gap-3 opacity-100 p-0 bg-transparent">
      <h1 className="font-manrope font-semibold text-[16px] leading-5 text-[#110C22] dark:text-white px-3">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[560px] px-3">
        {products.map((product, index) => (
          <CustomComponent
            key={index}
            heading={product.heading}
            paragraph={product.paragraph}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            darkLogo={product.darkLogo}
            link={product.link}
          />
        ))}
      </div>
    </section>
  );
}