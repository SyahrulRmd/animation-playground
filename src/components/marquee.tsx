'use client'

import { horizontalLoop } from "@/lib/gsap/helpers"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"

export const Marquee = ({ className, isReverse }: { className?: string, isReverse: boolean }) => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const marquee = marqueeRef.current

    const ctx = gsap.context(() => {
      if (marquee) {
        const marqueeTl = horizontalLoop(marquee.children, { paused: false, repeat: -1, speed: 2 })

        marquee.addEventListener('mouseenter', () => {
          marqueeTl.pause()
        })

        marquee.addEventListener('mouseleave', () => {
          // if (isReverse) {
          //   console.log('reverse');
            
          //   marqueeTl.play().reverse()
          // } else {
          // }
          marqueeTl.play()
        })
      }
    }, marqueeRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <div ref={marqueeRef} className={cn("relative flex gap-10 text-9xl w-max font-medium cursor-default", className)}>
        <div className="pl-10">Data driven user focused value based</div>
        <div>Data driven user focused value based</div>
      </div>
    </div>
  )
}
