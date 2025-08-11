'use client';

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
import ImageCard1 from "@/components/cardimage1";
import ImageCard2 from "@/components/imagecard2";
import ImageCard3 from "@/components/imagecard3";
import ImageCard4 from "@/components/imagecard4";

const CARD_GAP = 32;
const TOTAL_CARDS = 4;
const cards = [ImageCard1, ImageCard2, ImageCard3, ImageCard4];

interface StickyHorizontalCardsProps {
  onFocusChange?: (focusedIndex: number) => void;
  focusedIndex?: number;
}

export interface StickyHorizontalCardsRef {
  scrollToCard: (index: number) => void;
}

const StickyHorizontalCards = forwardRef<StickyHorizontalCardsRef, StickyHorizontalCardsProps>(
  ({ onFocusChange, focusedIndex: controlledIndex }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [sidePadding, setSidePadding] = useState(0);
    const [focusedIndex, setFocusedIndex] = useState(0);

    // Hydration-safe fallback
    const [opacities, setOpacities] = useState<number[]>(() => Array(TOTAL_CARDS).fill(1));

    // Public scrollToCard API
    useImperativeHandle(ref, () => ({
      scrollToCard: (index: number) => {
        if (index >= 0 && index < TOTAL_CARDS && wrapperRef.current && trackRef.current) {
          const firstCardEl = trackRef.current.querySelector("div");
          const cardWidth = firstCardEl ? (firstCardEl as HTMLElement).offsetWidth : 799;

          const targetScroll = index * (cardWidth + CARD_GAP);
          const wrapperRect = wrapperRef.current.getBoundingClientRect();
          const wrapperTop = wrapperRect.top + window.pageYOffset;
          const viewportHeight = window.innerHeight;
          const cardHeight = 575;
          const topOffset = 80;

          const targetPosition = wrapperTop + targetScroll - (viewportHeight / 2) + (cardHeight / 2) + topOffset;

          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        }
      }
    }));

    // Controlled index sync
    useEffect(() => {
      if (controlledIndex !== undefined && controlledIndex !== focusedIndex) {
        setFocusedIndex(controlledIndex);
        onFocusChange?.(controlledIndex);

        const newOpacities = Array(TOTAL_CARDS).fill(0.3);
        newOpacities[controlledIndex] = 1;
        setOpacities(newOpacities);
      }
    }, [controlledIndex, focusedIndex, onFocusChange]);

    // Size calculation (dynamic card width)
    useEffect(() => {
      function updateSizes() {
        const winWidth = window.innerWidth;
        let measuredCardWidth = 799; // default

        const firstCardEl = trackRef.current?.querySelector("div");
        if (firstCardEl) {
          measuredCardWidth = (firstCardEl as HTMLElement).offsetWidth;
        }

        const padding = (winWidth - measuredCardWidth) / 2;
        setSidePadding(padding > 0 ? padding : 0);

        const totalWidth =
          TOTAL_CARDS * measuredCardWidth +
          (TOTAL_CARDS - 1) * CARD_GAP +
          (padding > 0 ? padding * 2 : 0);

        const reducedHeight = totalWidth - winWidth + window.innerHeight - 200;
        setWrapperHeight(reducedHeight > 0 ? reducedHeight : 0);
      }

      updateSizes();
      window.addEventListener("resize", updateSizes);
      return () => window.removeEventListener("resize", updateSizes);
    }, []);

    // Scroll handling
    useEffect(() => {
      function handleScroll() {
        if (!wrapperRef.current || !trackRef.current) return;

        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const winWidth = window.innerWidth;

        const firstCardEl = trackRef.current.querySelector("div");
        const cardWidth = firstCardEl ? (firstCardEl as HTMLElement).offsetWidth : 799;

        const totalWidth =
          TOTAL_CARDS * cardWidth +
          (TOTAL_CARDS - 1) * CARD_GAP +
          sidePadding * 2;

        const maxScroll = totalWidth - winWidth;
        const progress = Math.min(Math.max(0, -wrapperRect.top), maxScroll);

        trackRef.current.style.transform = `translateX(-${progress}px)`;

        // Focus & opacity calculations
        const viewportCenter = progress + winWidth / 2;
        const cardCenters = Array(TOTAL_CARDS)
          .fill(0)
          .map((_, i) => i * (cardWidth + CARD_GAP) + cardWidth / 2 + sidePadding);

        const maxDistance = cardWidth / 2 + CARD_GAP;
        const newOpacities = cardCenters.map(center => {
          const distance = Math.abs(center - viewportCenter);
          if (distance < maxDistance) {
            return 1 - (distance / maxDistance) * (1 - 0.3);
          }
          return 0.3;
        });
        setOpacities(newOpacities);

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
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }, [sidePadding, focusedIndex, onFocusChange, controlledIndex]);

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
                  opacity: opacities[idx] ?? 1,
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
);

StickyHorizontalCards.displayName = 'StickyHorizontalCards';
export default StickyHorizontalCards;
