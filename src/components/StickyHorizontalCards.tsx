'use client';

import { useEffect, useRef, useState } from "react";
import ImageCard1 from "@/components/cardimage1";
import ImageCard2 from "@/components/imagecard2";
import ImageCard3 from "@/components/imagecard3";
import ImageCard4 from "@/components/imagecard4";

const CARD_WIDTH = 799;
const GAP_WIDTH = 32;
const TOTAL_CARDS = 4;
const cards = [ImageCard1, ImageCard2, ImageCard3, ImageCard4];

interface StickyHorizontalCardsProps {
  onFocusChange?: (focusedIndex: number) => void;
}

export default function StickyHorizontalCards({ onFocusChange }: StickyHorizontalCardsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [sidePadding, setSidePadding] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Hydration-safe dynamic opacities
  const [opacities, setOpacities] = useState<number[]>(() => Array(TOTAL_CARDS).fill(1)); // fallback for SSR

  useEffect(() => {
    function updateSizes() {
      const winWidth = window.innerWidth;
      const padding = (winWidth / 2) - (CARD_WIDTH / 2);
      setSidePadding(padding > 0 ? padding : 0);

      const totalWidth =
        TOTAL_CARDS * CARD_WIDTH +
        (TOTAL_CARDS - 1) * GAP_WIDTH +
        (padding > 0 ? padding * 2 : 0);

      const reducedHeight = totalWidth - winWidth + window.innerHeight - 200;
      setWrapperHeight(reducedHeight > 0 ? reducedHeight : 0);
    }
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!wrapperRef.current || !trackRef.current) return;
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const winWidth = window.innerWidth;

      const totalWidth =
        TOTAL_CARDS * CARD_WIDTH +
        (TOTAL_CARDS - 1) * GAP_WIDTH +
        sidePadding * 2;

      const maxScroll = totalWidth - winWidth;
      const progress = Math.min(Math.max(0, -wrapperRect.top), maxScroll);

      trackRef.current.style.transform = `translateX(-${progress}px)`;

      // --- Center + Focus calculation ---
      const viewportCenter = progress + winWidth / 2;
      const cardCenters = Array(TOTAL_CARDS)
        .fill(0)
        .map((_, i) => i * (CARD_WIDTH + GAP_WIDTH) + CARD_WIDTH / 2 + sidePadding);

      // Opacity update
      const maxDistance = CARD_WIDTH / 2 + GAP_WIDTH;
      const newOpacities = cardCenters.map(center => {
        const distance = Math.abs(center - viewportCenter);
        if (distance < maxDistance) {
          return 1 - (distance / maxDistance) * (1 - 0.3);
        }
        return 0.3;
      });
      setOpacities(newOpacities);

      // Focus update
      let closestIndex = 0;
      let minDistance = Infinity;
      cardCenters.forEach((center, idx) => {
        const dist = Math.abs(center - viewportCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = idx;
        }
      });

      if (closestIndex !== focusedIndex) {
        setFocusedIndex(closestIndex);
        onFocusChange?.(closestIndex);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [sidePadding, focusedIndex, onFocusChange]);

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
          {cards.map((CardComp, idx) => (
            <div
              key={idx}
              style={{
                transition: "opacity 0.3s",
                opacity: opacities[idx] ?? 1, // fallback for SSR
              }}
            >
              <CardComp />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
