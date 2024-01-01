'use client'

import { ArrowRight, Dot, MoveUpRight } from "lucide-react"
import { Button } from "./ui/button"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current, {
        yPercent: -100
      }, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom", 
          end: "top 330",
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-transparent relative">
      <div className="h-20 z-10 bg-white rounded-b-[40px] absolute top-0 w-full"></div>
      <div ref={footerRef} className="bg-[#c9d0d5] pt-20">
        <footer className="flex justify-between container py-20">
          <div className="col-span-6">
            <div>
              <h2 className="font-semibold text-5xl mb-4">We would like to hear from you.</h2>
              <p className="text-gray-500 mb-6">Feel free to reach us.</p>
              <Button variant={'secondary'}>Become a Client <ArrowRight size={20} /></Button>
            </div>
            <div>
              <p className="flex mt-10 text-gray-500">By SyahrulRmd <Dot /> Only for educational purpose</p>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="">
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul>
                <li className="text-gray-500 mb-2">Our Email <br /> info@lorem.com</li>
                <li className="text-gray-500 mb-2">Our Phone <br /> +6281231231</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <ul>
                <li className="text-gray-500 mb-2 flex gap-2 items-center">Dribble <MoveUpRight size={16} /></li>
                <li className="text-gray-500 mb-2 flex gap-2 items-center">Linkedin <MoveUpRight size={16} /></li>
                <li className="text-gray-500 mb-2 flex gap-2 items-center">Instagram <MoveUpRight size={16} /></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}