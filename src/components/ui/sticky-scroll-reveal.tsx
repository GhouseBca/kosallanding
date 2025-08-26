import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;
      const viewportCenter = window.innerHeight / 2;
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenterY - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      setActiveCard(closestIndex);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [content.length]);

  const backgroundColors =
    theme === "dark"
      ? ["#000000", "#000000", "#000000"]
      : ["#99f6e4", "#99f6e4", "#99f6e4"];
  const linearGradients =
    theme === "dark"
      ? [
          "linear-gradient(to bottom right, #000000, #000000)",
          "linear-gradient(to bottom right, #000000, #000000)",
          "linear-gradient(to bottom right, #000000, #000000)",
        ]
      : [
          "linear-gradient(to bottom right, #99f6e4, #99f6e4)",
          "linear-gradient(to bottom right, #99f6e4, #99f6e4)",
          "linear-gradient(to bottom right, #99f6e4, #99f6e4)",
        ];
  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);
 
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-16 overflow-y-auto rounded-md p-10 scrollbar-hide"
      ref={containerRef}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="my-20"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className={cn(
                  "text-2xl font-bold",
                  theme === "dark" ? "text-white" : "text-black"
                )}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className={cn(
                  "mt-10 max-w-sm",
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                )}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-[28rem] w-[35rem] overflow-hidden rounded-xl lg:block",
          theme === "dark" ? "bg-black" : "bg-white",
          contentClassName
        )}
      >
        <div className="h-full w-full flex items-center justify-center">
          {React.isValidElement(content[activeCard]?.content)
            ? React.cloneElement(
                content[activeCard].content as React.ReactElement<{ className?: string }>,
                {
                  className: cn(
                    "h-full w-full object-cover",
                    (content[activeCard].content as React.ReactElement<{ className?: string }>).props?.className,
                  ),
                },
              )
            : content[activeCard]?.content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
