interface Product {
    heading: string;
    paragraph: string;
    imageSrc: string;
    imageAlt: string;
    darkLogo?: string;
    link: string;
  }
  
  export const products: Product[] = [
    {
      heading: "BitesOS",
      paragraph: "Streamline your restaurant operations with powerful management tools.",
      imageSrc: "https://pub-2023d65a506c44d3b1806f6f8ca1c09c.r2.dev/logo.svg",
      imageAlt: "Bites icon",
      link: "https://bitesos.com",
    },
    {
      heading: "Form House",
      paragraph: "Build unlimited AI-powered forms with ease and efficiency.",
      imageSrc: "https://pub-2023d65a506c44d3b1806f6f8ca1c09c.r2.dev/formly.png",
      imageAlt: "FormHouse icon",
      link: "https://formly.kosal.io",
    },
    {
      heading: "Post Mate",
      paragraph: "Create engaging content effortlessly with AI-driven automation.",
      imageSrc: "https://pub-2023d65a506c44d3b1806f6f8ca1c09c.r2.dev/postmate.png",
      imageAlt: "Post Mate icon",
      darkLogo: "https://pub-2023d65a506c44d3b1806f6f8ca1c09c.r2.dev/postmatelight.png",
      link: "https://postmate.kosal.io",
    },
    {
        heading: "Screenly",
        paragraph: "Upload, schedule, and control content across TVs, kiosks, tablets — all from one place.",
        imageSrc: "https://screenly.kosal.io/_next/image?url=%2FScreenlyblack.png&w=64&q=75",
        imageAlt: "Screenly icon",
        link: "https://screenly.kosal.io",
      },
  ];