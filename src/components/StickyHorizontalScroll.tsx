'use client'

import { useEffect, useRef } from 'react'

export default function StickyHorizontalScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      const sectionTop = container.offsetTop
      const scrollY = window.scrollY
      const distance = scrollY - sectionTop
      if (scrollY >= sectionTop && scrollY <= sectionTop + container.scrollWidth) {
        container.scrollLeft = distance
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="sticky top-0 overflow-x-auto overflow-y-hidden whitespace-nowrap w-full h-[555px] bg-white dark:bg-black p-12 rounded-[40px]"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="inline-flex gap-8">{children}</div>
    </div>
  )
}
