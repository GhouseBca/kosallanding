'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

type HexagonBackgroundProps = React.ComponentProps<'div'> & {
  children?: React.ReactNode;
  hexagonProps?: React.ComponentProps<'div'>;
  hexagonSize?: number; // value greater than 50
  hexagonMargin?: number;
};

function HexagonBackground({
  className,
  children,
  hexagonProps,
  hexagonSize = 75,
  hexagonMargin = 3,
  ...props
}: HexagonBackgroundProps) {
  const hexagonWidth = hexagonSize;
  const hexagonHeight = hexagonSize * 1.1;
  const rowSpacing = hexagonSize * 0.8;
  const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
  const computedMarginTop = baseMarginTop + hexagonMargin;
  const oddRowMarginLeft = -(hexagonSize / 2);
  const evenRowMarginLeft = hexagonMargin / 2;

  const [gridDimensions, setGridDimensions] = React.useState({
    rows: 0,
    columns: 0,
  });

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [hoveredCellKey, setHoveredCellKey] = React.useState<string | null>(
    null,
  );
  const [trailCells, setTrailCells] = React.useState<Set<string>>(new Set());
  const trailTimeoutRef = React.useRef<Map<string, NodeJS.Timeout>>(new Map());

  const updateGridDimensions = React.useCallback(() => {
    const rows = Math.ceil(window.innerHeight / rowSpacing);
    const columns = Math.ceil(window.innerWidth / hexagonWidth) + 1;
    setGridDimensions({ rows, columns });
  }, [rowSpacing, hexagonWidth]);

  React.useEffect(() => {
    updateGridDimensions();
    window.addEventListener('resize', updateGridDimensions);
    return () => window.removeEventListener('resize', updateGridDimensions);
  }, [updateGridDimensions]);

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      trailTimeoutRef.current.forEach(timeout => clearTimeout(timeout));
      trailTimeoutRef.current.clear();
    };
  }, []);

  React.useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) {
        setHoveredCellKey(prev => (prev === null ? prev : null));
        return;
      }

      const rect = el.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      const inside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      if (!inside) {
        setHoveredCellKey(prev => {
          if (prev === null) return prev;

          // Add current hexagon to trail when mouse leaves
          setTrailCells(prevTrail => new Set(prevTrail).add(prev));

          // Clear any existing timeout for this cell
          const existingTimeout = trailTimeoutRef.current.get(prev);
          if (existingTimeout) {
            clearTimeout(existingTimeout);
          }

          // Set timeout to remove from trail
          const timeout = setTimeout(() => {
            setTrailCells(prevTrail => {
              const newTrail = new Set(prevTrail);
              newTrail.delete(prev);
              return newTrail;
            });
            trailTimeoutRef.current.delete(prev);
          }, 200);

          trailTimeoutRef.current.set(prev, timeout);
          return null;
        });
        return;
      }

      const localX = x - rect.left;
      const localY = y - rect.top;

      const rowIndex = Math.floor((localY - computedMarginTop) / rowSpacing);
      if (rowIndex < 0 || rowIndex >= gridDimensions.rows) {
        setHoveredCellKey(prev => (prev === null ? prev : null));
        return;
      }

      const rowMarginLeft = ((rowIndex + 1) % 2 === 0 ? evenRowMarginLeft : oddRowMarginLeft) - 10;
      const colIndex = Math.floor((localX - rowMarginLeft) / hexagonWidth);
      if (colIndex < 0 || colIndex >= gridDimensions.columns) {
        setHoveredCellKey(prev => (prev === null ? prev : null));
        return;
      }

      const key = `hexagon-${rowIndex}-${colIndex}`;
      setHoveredCellKey(prev => {
        if (prev === key) return prev;

        // Add previous hexagon to trail with delay
        if (prev !== null) {
          setTrailCells(prevTrail => new Set(prevTrail).add(prev));

          // Clear any existing timeout for this cell
          const existingTimeout = trailTimeoutRef.current.get(prev);
          if (existingTimeout) {
            clearTimeout(existingTimeout);
          }

          // Set new timeout to remove from trail
          const timeout = setTimeout(() => {
            setTrailCells(prevTrail => {
              const newTrail = new Set(prevTrail);
              newTrail.delete(prev);
              return newTrail;
            });
            trailTimeoutRef.current.delete(prev);
          }, 200); // 200ms delay for trail effect

          trailTimeoutRef.current.set(prev, timeout);
        }

        return key;
      });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gridDimensions.rows, gridDimensions.columns, computedMarginTop, rowSpacing, hexagonWidth, oddRowMarginLeft, evenRowMarginLeft]);

  return (
    <div
      ref={containerRef}
      data-slot="hexagon-background"
      className={cn(
        'relative size-full overflow-hidden pointer-events-none dark:bg-neutral-900 bg-neutral-100',
        className,
      )}
      {...props}
    >
      <style>{`:root { --hexagon-margin: ${hexagonMargin}px; }`}</style>
      <div className="absolute top-0 -left-0 size-full overflow-hidden">
        {Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            style={{
              marginTop: computedMarginTop,
              marginLeft:
                ((rowIndex + 1) % 2 === 0
                  ? evenRowMarginLeft
                  : oddRowMarginLeft) - 10,
            }}
            className="inline-flex"
          >
            {Array.from({ length: gridDimensions.columns }).map(
              (_, colIndex) => {
                const key = `hexagon-${rowIndex}-${colIndex}`;
                const isHovered = hoveredCellKey === key;
                const isInTrail = trailCells.has(key);
                return (
                  <div
                    key={key}
                    {...hexagonProps}
                    style={{
                      width: hexagonWidth,
                      height: hexagonHeight,
                      marginLeft: hexagonMargin,
                      ...hexagonProps?.style,
                    }}
                    className={cn(
                      'relative',
                      '[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]',
                      "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full dark:before:bg-neutral-950 before:bg-white before:opacity-100 before:transition-colors before:duration-150",
                      "after:content-[''] after:absolute after:inset-[var(--hexagon-margin)] dark:after:bg-neutral-950 after:bg-white",
                      'after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]',
                      isHovered && 'before:bg-neutral-200 dark:before:bg-neutral-800 dark:after:bg-neutral-900 after:bg-neutral-100 before:duration-0 after:duration-0',
                      isInTrail && 'before:bg-neutral-100 dark:before:bg-neutral-900 dark:after:bg-neutral-950 after:bg-neutral-50 before:duration-200 after:duration-200',
                      hexagonProps?.className,
                    )}
                  />
                );
              },
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export { HexagonBackground, type HexagonBackgroundProps };
