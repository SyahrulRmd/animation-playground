'use client'

import { MoveDown } from "lucide-react"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export const CtaButton = () => {
  const ctaRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const cta = ctaRef.current

    const ctx = gsap.context(() => {
      if (cta) {
        cta.addEventListener('mouseenter', (event) => {
          gsap.fromTo(cta.children[0], {
            y: 0,
            opacity: 1,
            duration: 0.1
          }, {
            y: 5,
            opacity: 0,
          })
          gsap.fromTo(cta.children[1], {
            y: -5,
            duration: 0.1,
            opacity: 0
          }, {
            y: 0,
            opacity: 1
          })
        })

        cta.addEventListener('mouseleave', (event) => {
          gsap.fromTo(cta.children[0], {
            y: 5,
            opacity: 0,
            duration: 0.1
          }, {
            y: 0,
            opacity: 1,
          })
          gsap.fromTo(cta.children[1], {
            y: 0,
            opacity: 1,
            duration: 0.1
          }, {
            y: -5,
            opacity: 0,
          })
        })
      }
    }, ctaRef)

    return () => ctx.revert()
  }, [])

  return (
    <button ref={ctaRef} className="bg-white border-2 before:animate-cta-pulse hover:before:invisible hover:before:animate-none border-white hover:bg-transparent transition-all w-14 h-14 relative rounded-full inline-flex flex-col-reverse items-center justify-center before:border-2 before:border-white before:rounded-full before:w-full before:aspect-square">
      <MoveDown className="absolute " />
      <MoveDown className="absolute opacity-0" color="white" />
    </button>
  )
}
