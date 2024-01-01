'use client'

import Portofolio1 from '@/assets/portofolio-1.png'
import Portofolio2 from '@/assets/portofolio-2.png'
import Portofolio3 from '@/assets/portofolio-3.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image, { StaticImageData } from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import { MoveUpRight } from "lucide-react"

const CardPortofolio = ({imageUrl}: {imageUrl: StaticImageData}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // image parallax effect
      const imageBg = cardRef.current?.children[0].children[0]

      if (imageBg) {
        gsap.fromTo(imageBg, {
          yPercent: 0
        }, {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom", 
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          }
        });
      }

      // card on hover
      cardRef.current?.addEventListener('mouseenter', () => {
        if (imageBg) {
          gsap.to(imageBg, {
            scale: 1.05,
            ease: 'none'
          })

        }
      })

      cardRef.current?.addEventListener('mouseleave', () => {
        if (imageBg) {
          gsap.to(imageBg, {
            scale: 1,
            ease: 'none'
          })
        }
      })

    }, cardRef)

    return () => ctx.revert()
  })

  return (
    <div ref={cardRef} className='group relative rounded-[40px] overflow-hidden h-[500px]'>
      <div className='absolute w-full h-[500px] overflow-hidden flex items-end'>
        <Image src={imageUrl} alt='Portofolio' className='object-cover h-[700px]' height={1000} />
      </div>
      <div className='z-10 absolute bottom-2 rounded-[36px] py-5 px-8 bg-white mx-2 flex justify-between items-center gap-6'>
        <div>
          <p className='font-bold text-lg mb-1'>App 1</p>
          <p className='text-gray-400 leading-tight font-medium text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam non qui vero harum exercitationem aliquam iusto repellat soluta neque sit.</p>
        </div>
        <div>
          <button className='bg-gray-200 rounded-full p-3'>
            <MoveUpRight id='arrow' className='group-hover:rotate-[360deg] transition-transform duration-500' />
          </button>
        </div>
      </div>
      <span className='w-full absolute -bottom-full opacity-0 h-[50%] z-[5] transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100' style={{background: 'linear-gradient(0deg, rgba(69,65,241,0.5) 0%, rgba(255,255,255,0) 100%)'}}></span>
    </div>
  )
}

export const CardsPortofolio = () => {
  return (
    <div className='grid grid-cols-5 gap-6' id='cards-portofolio'>
      <div className='col-span-3'>
        <CardPortofolio imageUrl={Portofolio2} />
      </div>
      <div className='col-span-2'>
        <CardPortofolio imageUrl={Portofolio1} />
      </div>
      <div className='col-span-2'>
        <CardPortofolio imageUrl={Portofolio1} />
      </div>
      <div className='col-span-3'>
        <CardPortofolio imageUrl={Portofolio3} />
      </div>
    </div>
  )
}
