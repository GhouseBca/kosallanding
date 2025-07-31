'use client'

import { useEffect, useRef, useState } from "react";
import ImageCard1 from "@/components/cardimage1";
import ImageCard2 from "@/components/imagecard2";
import ImageCard3 from "@/components/imagecard3";
import ImageCard4 from "@/components/imagecard4";

export default function StickyHorizontalCards() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [sidePadding, setSidePadding] = useState(0);

  const CARD_WIDTH = 799;
  const GAP_WIDTH = 32; // Tailwind gap-8 = 32px
  const TOTAL_CARDS = 4;

  // Calculate side padding and wrapper height on mount and resize
  useEffect(() => {
    function updateSizes() {
      const winWidth = window.innerWidth;

      // Space needed on both sides to center first and last cards
      const padding = (winWidth / 2) - (CARD_WIDTH / 2);
      setSidePadding(padding > 0 ? padding : 0);

      // total content width: cards + gaps + side paddings
      const totalWidth = TOTAL_CARDS * CARD_WIDTH + (TOTAL_CARDS - 1) * GAP_WIDTH + padding * 2;

      // Reduce height by 200px safely; adjust this number as you see fit
      const reducedHeight = totalWidth - winWidth + window.innerHeight - 200;
      setWrapperHeight(reducedHeight > 0 ? reducedHeight : 0);
    }

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // Scroll handler: same logic remains
  useEffect(() => {
    function onScroll() {
      if (!wrapperRef.current || !trackRef.current) return;
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const winWidth = window.innerWidth;

      const totalWidth = 
        TOTAL_CARDS * CARD_WIDTH + 
        (TOTAL_CARDS - 1) * GAP_WIDTH + 
        sidePadding * 2;

      const maxScroll = totalWidth - winWidth;
      const scrollProgress = Math.min(Math.max(0, -wrapperRect.top), maxScroll);

      trackRef.current.style.transform = `translateX(-${scrollProgress}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sidePadding]); // depend on sidePadding so transform updates correctly

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{ height: `${wrapperHeight}px` }}
    >
      <div
        className="sticky top-20 h-[575px] w-full overflow-hidden flex items-center"
        style={{ zIndex: 10 }}
      >
        <div
          ref={trackRef}
          className="flex gap-8 will-change-transform transition-none min-w-max overflow-visible"
          style={{ paddingLeft: sidePadding, paddingRight: sidePadding }}
        >
          <ImageCard1 />
          <ImageCard2 />
          <ImageCard3 />
          <ImageCard4 />
        </div>
      </div>
    </div>
  );
}
