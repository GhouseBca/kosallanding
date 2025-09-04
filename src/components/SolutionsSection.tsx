'use client';
import React, { useEffect, useRef, useState } from "react";

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const ticking = useRef(false);

  const cards = [
    {
      id: 1,
      title: "Bites",
      description:
        "Streamline your restaurant operations with powerful management tools.",
      image: "/icons/BitesN.svg",
    },
    {
      id: 2,
      title: "Form House",
      description:
        "Build unlimited AI-powered forms with ease and efficiency.",
      image: "/icons/KisformsN.svg",
    },
    {
      id: 3,
      title: "Postmate",
      description:
        "Create engaging content effortlessly with AI-driven automation.",
      image: "/icons/PostmateN.svg",
    },
    {
      id: 4,
      title: "Screenly",
      description:
        "Upload, schedule, and control content across TVs, kiosks, tablets — all in one.",
      image: "/icons/ScreenlyN.svg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * (cards.length - 1);

          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(
              1,
              Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance)
            );
          }

          const cardIndex = Math.min(
            cards.length - 1,
            Math.floor(progress * cards.length)
          );
          setActiveCardIndex(cardIndex);

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cards.length]);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <section
        id="products"
        className="w-full h-screen py-4 sm:py-6 md:py-8 lg:py-12 sticky top-0 overflow-hidden 
                   bg-white dark:bg-black text-black dark:text-white transition-colors"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto h-full flex flex-col">
          {/* Section Header */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-2 pt-4 sm:pt-6">
              <div
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full 
                                 bg-[#0084FF] dark:bg-[#71BBFF] text-white text-xs sm:text-sm mr-2">
                  02
                </span>
                <span className="text-[#4F4B5C] dark:text-[#C2C2C2] text-sm sm:text-base">
                  Products
                </span>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold 
                           text-[#110C22] dark:text-white">
              Our Suite
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={cardsContainerRef}
            className="relative flex-1 [perspective:800px] sm:[perspective:1000px]"
          >
            {cards.map((card, index) => {
              const isVisible = activeCardIndex >= index;
              return (
                <div
                  key={card.id}
                  className={`absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg 
                             transition-all duration-500 ${isVisible ? "animate-card-enter" : ""}`}
                  style={{
                    zIndex: 10 + index,
                    transform: `translateY(${
                      isVisible
                        ? index === activeCardIndex
                          ? `${20 + index * 5}px`
                          : `${10 + index * 2}px`
                        : "100px"
                    }) scale(${1 - (cards.length - 1 - index) * 0.03})`,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                >
                  <div
                    className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8 h-full 
                               flex flex-col sm:flex-row sm:items-center sm:justify-between
                               rounded-xl sm:rounded-2xl transition-colors
                               bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100
                               dark:from-[#1e1e2e] dark:via-[#2a2a4a] dark:to-[#3b3b6a]
                               text-[#110C22] dark:text-white
                               min-h-[200px] sm:min-h-[240px] md:min-h-[280px]"
                  >
                    <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl 
                                   flex flex-col gap-3 sm:gap-4 flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#4F4B5C] dark:text-[#C2C2C2]">
                        {card.description}
                      </p>
                    </div>
                    
                    {/* Image container */}
                    <div className="mt-4 sm:mt-0 sm:ml-4 flex justify-center sm:justify-end flex-shrink-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="max-w-[300px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[620px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsSection;