'use client'

import gsap from "gsap"
import { useLayoutEffect, useRef } from "react";

export const Typewriter = () => {
  const ref = useRef<HTMLHeadingElement>(null)

  const messageBodyStr = 'DESIGNI'

  useLayoutEffect(() => {
    const heading = ref.current

    const ctx = gsap.context(() => {
      if (heading) {
        let typingTl = gsap.timeline({ repeat: -1 })
        const duration = 0.5
        const pause = 0.75
        const stagger = duration + pause
        const repeatDelay = (stagger * (3 - 1)) + pause

        typingTl.from('h1', {
          yPercent: -100,
          duration: duration,
          stagger: {
            each: stagger,
            repeatDelay: repeatDelay,
            repeat: -1
          }
        })
        typingTl.to('h1', {
          yPercent: 100,
          duration: duration,
          stagger: {
            each: stagger,
            repeatDelay: repeatDelay,
            repeat: -1
          }
        }, stagger)

        typingTl.play()
      }
    }, ref)

    return () => ctx.revert()
  }, [])


  return (
    <div ref={ref} className="h-[100px] relative flex flex-col overflow-hidden">
      <h1 className="text-white font-bold absolute inline-flex leading-none">DESIGN</h1>
      <h1 className="text-white font-bold absolute inline-flex leading-none">DEVELOPMENT</h1>
      <h1 className="text-white font-bold absolute inline-flex leading-none">BRANDING</h1>
    </div>
  )
}