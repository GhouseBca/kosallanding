// 'use client';

// import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
// import ImageCard1 from "@/components/cardimage1";
// import ImageCard2 from "@/components/imagecard2";
// import ImageCard3 from "@/components/imagecard3";
// import ImageCard4 from "@/components/imagecard4";

// const CARD_WIDTH = 799;
// const CARD_GAP = 32;
// const TOTAL_CARDS = 4;
// const cards = [ImageCard1, ImageCard2, ImageCard3, ImageCard4];

// interface StickyHorizontalCardsProps {
//   onFocusChange?: (focusedIndex: number) => void;
//   focusedIndex?: number;
// }

// export interface StickyHorizontalCardsRef {
//   scrollToCard: (index: number) => void;
// }

// const StickyHorizontalCards = forwardRef<StickyHorizontalCardsRef, StickyHorizontalCardsProps>(
//   ({ onFocusChange, focusedIndex: controlledIndex }, ref) => {
//     const wrapperRef = useRef<HTMLDivElement>(null);
//     const trackRef = useRef<HTMLDivElement>(null);
//     const [wrapperHeight, setWrapperHeight] = useState(0);
//     const [sidePadding, setSidePadding] = useState(0);
//     const [focusedIndex, setFocusedIndex] = useState(0);
//     const [cardWidth, setCardWidth] = useState(CARD_WIDTH);
//     const [cardGap, setCardGap] = useState(CARD_GAP);

//     // Hydration-safe fallback
//     const [opacities, setOpacities] = useState<number[]>(() => Array(TOTAL_CARDS).fill(1));

//     // Public scrollToCard API
//     useImperativeHandle(ref, () => ({
//       scrollToCard: (index: number) => {
//         if (index >= 0 && index < TOTAL_CARDS && wrapperRef.current) {
//           const targetScroll = index * (cardWidth + cardGap);
//           const wrapperRect = wrapperRef.current.getBoundingClientRect();
//           const wrapperTop = wrapperRect.top + window.pageYOffset;
//           const viewportHeight = window.innerHeight;
//           const cardHeight = 575;
//           const topOffset = 80;

//           // Calculate the target position to center the card
//           const targetPosition = wrapperTop + targetScroll - (viewportHeight / 2) + (cardHeight / 2) + topOffset;

//           window.scrollTo({
//             top: Math.max(0, targetPosition),
//             behavior: 'smooth'
//           });
//         }
//       }
//     }));

//     // Controlled index sync
//     useEffect(() => {
//       if (controlledIndex !== undefined && controlledIndex !== focusedIndex) {
//         setFocusedIndex(controlledIndex);
//         onFocusChange?.(controlledIndex);

//         const newOpacities = Array(TOTAL_CARDS).fill(0.3);
//         newOpacities[controlledIndex] = 1;
//         setOpacities(newOpacities);
//       }
//     }, [controlledIndex, focusedIndex, onFocusChange, TOTAL_CARDS]);

//     // Responsive size calculation
//     useEffect(() => {
//       function updateSizes() {
//         const winWidth = window.innerWidth;
        
//         // Responsive card width and gap based on screen size
//         let responsiveCardWidth = CARD_WIDTH;
//         let responsiveCardGap = CARD_GAP;
        
//         if (winWidth < 768) { // Mobile
//           responsiveCardWidth = Math.min(winWidth - 32, 400);
//           responsiveCardGap = 16;
//         } else if (winWidth < 1024) { // Tablet
//           responsiveCardWidth = Math.min(winWidth - 64, 600);
//           responsiveCardGap = 24;
//         } else if (winWidth < 1440) { // Desktop
//           responsiveCardWidth = Math.min(winWidth - 128, CARD_WIDTH);
//           responsiveCardGap = CARD_GAP;
//         }
        
//         setCardWidth(responsiveCardWidth);
//         setCardGap(responsiveCardGap);
        
//         // Calculate padding to center the first card on all screen sizes
//         const padding = Math.max(0, (winWidth - responsiveCardWidth) / 2);
//         setSidePadding(padding);

//         const totalWidth =
//           TOTAL_CARDS * responsiveCardWidth +
//           (TOTAL_CARDS - 1) * responsiveCardGap +
//           padding * 2;

//         // Calculate height to ensure last card can reach center
//         const cardHeight = 575;
//         const viewportHeight = window.innerHeight;
        
//         // Calculate how much we need to scroll to get the last card to center
//         const lastCardScrollDistance = (TOTAL_CARDS - 1) * (responsiveCardWidth + responsiveCardGap);
        
//         // Total height needed = card height + scroll distance + viewport height for centering
//         const totalHeight = cardHeight + lastCardScrollDistance + viewportHeight;
        
//         setWrapperHeight(totalHeight);
//       }

//       updateSizes();
//       window.addEventListener("resize", updateSizes);
//       return () => window.removeEventListener("resize", updateSizes);
//     }, [TOTAL_CARDS, CARD_WIDTH, CARD_GAP]);

//     // Scroll handling
//     useEffect(() => {
//       function handleScroll() {
//         if (!wrapperRef.current || !trackRef.current) return;

//         const wrapperRect = wrapperRef.current.getBoundingClientRect();
//         const winWidth = window.innerWidth;

//         const totalWidth =
//           TOTAL_CARDS * cardWidth +
//           (TOTAL_CARDS - 1) * cardGap +
//           sidePadding * 2;

//         // Calculate scroll progress with better bounds
//         const maxScroll = Math.max(0, totalWidth - winWidth);
//         const scrollProgress = Math.max(0, -wrapperRect.top);
//         const progress = Math.min(scrollProgress, maxScroll);

//         // Apply smooth transform to the track
//         trackRef.current.style.transform = `translateX(-${progress}px)`;

//         // Focus & opacity calculations
//         const viewportCenter = progress + winWidth / 2;
//         const cardCenters = Array(TOTAL_CARDS)
//           .fill(0)
//           .map((_, i) => i * (cardWidth + cardGap) + cardWidth / 2 + sidePadding);

//         const maxDistance = cardWidth / 2 + cardGap;
//         const newOpacities = cardCenters.map(center => {
//           const distance = Math.abs(center - viewportCenter);
//           if (distance < maxDistance) {
//             return 1 - (distance / maxDistance) * (1 - 0.3);
//           }
//           return 0.3;
//         });
//         setOpacities(newOpacities);

//         // Automatic focus progression
//         let closestIndex = 0;
//         let minDistance = Infinity;
//         cardCenters.forEach((center, idx) => {
//           const dist = Math.abs(center - viewportCenter);
//           if (dist < minDistance) {
//             minDistance = dist;
//             closestIndex = idx;
//           }
//         });

//         // Auto-focus next card when previous becomes unfocused
//         if (closestIndex !== focusedIndex) {
//           // If moving forward, ensure we don't skip cards
//           if (closestIndex > focusedIndex && closestIndex - focusedIndex > 1) {
//             closestIndex = focusedIndex + 1;
//           }
//           // If moving backward, ensure we don't skip cards
//           else if (closestIndex < focusedIndex && focusedIndex - closestIndex > 1) {
//             closestIndex = focusedIndex - 1;
//           }
          
//           setFocusedIndex(closestIndex);
//           onFocusChange?.(closestIndex);
//         }
//       }

//       window.addEventListener("scroll", handleScroll, { passive: true });
//       handleScroll();

//       return () => window.removeEventListener("scroll", handleScroll);
//     }, [sidePadding, focusedIndex, onFocusChange, TOTAL_CARDS, cardWidth, cardGap]);

//     return (
//       <div
//         ref={wrapperRef}
//         className="relative w-full"
//         style={{ height: `${wrapperHeight}px`, minHeight: '575px' }}
//       >
//         <div
//           className="sticky top-20 h-[575px] w-full overflow-hidden flex items-center"
//           style={{ zIndex: 10 }}
//         >
//           <div
//             ref={trackRef}
//             className="flex will-change-transform transition-transform duration-300 ease-out min-w-max overflow-visible"
//             style={{ 
//               paddingLeft: sidePadding, 
//               paddingRight: sidePadding,
//               gap: `${cardGap}px`
//             }}
//           >
//             {cards.map((CardComp, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   transition: "opacity 0.3s",
//                   opacity: opacities[idx] ?? 1,
//                   width: `${cardWidth}px`,
//                   flexShrink: 0
//                 }}
//               >
//                 <CardComp />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// );

// StickyHorizontalCards.displayName = 'StickyHorizontalCards';
// export default StickyHorizontalCards;
