'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { Marquee } from '../marquee'
import FloatingMobile1 from '@/assets/floating-mobile-1.png'
import FloatingMobile2 from '@/assets/floating-mobile-2.png'
import Mockup1 from '@/assets/mockup-1.png'
import Mockup2 from '@/assets/mockup-2.png'
import Mockup3 from '@/assets/mockup-3.png'
import Mockup4 from '@/assets/mockup-4.png'
import Mockup5 from '@/assets/mockup-5.png'
import Mockup6 from '@/assets/mockup-6.png'
import Mockup7 from '@/assets/mockup-7.png'
import Mockup8 from '@/assets/mockup-8.png'
import FrontMockup from '@/assets/mockup-front.png'
import Image from 'next/image'
import BgShowcase from '@/assets/bg-showcase.svg'

const FloatingMockup = () => {
  return (
    <div className='absolute flex w-full justify-center top-[30%]'>
      <div className=' animate-floating-mockup'>
        <Image src={FloatingMobile2} alt='Floating Mobile' className='-rotate-[10deg]' width={250} />
      </div>
      <div className='animate-reverse-floating-mockup'>
        <Image src={FloatingMobile1} alt='Floating Mobile' className='rotate-[10deg] translate-y-10' width={250} />
      </div>
    </div>
  )
}

const GridMockup = () => {
  return (
    <div className='relative'>
      <div>
        <ul className='flex gap-6 mb-6'>
          <li className='basis-1/5'>
            <Image src={Mockup6} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup2} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <div></div>
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup3} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup8} alt='mockup' className='w-full' />
          </li>
        </ul>
        <ul className='flex gap-6 mb-6'>
          <li className='basis-1/5'>
            <Image src={Mockup5} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup1} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <div></div>
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup7} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup4} alt='mockup' className='w-full' />
          </li>
        </ul>
        <ul className='flex gap-6'>
          <li className='basis-1/5'>
            <Image src={Mockup2} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup6} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <div></div>
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup1} alt='mockup' className='w-full' />
          </li>
          <li className='basis-1/5'>
            <Image src={Mockup3} alt='mockup' className='w-full' />
          </li>
        </ul>
      </div>
      <div className='absolute top-0 w-full h-full'>
        <div className='sticky bottom-0 top-0'>
          <Image src={FrontMockup} alt='front-mockup' className='m-auto' />
        </div>
      </div>
    </div>
  )
}

export const Showcase = () => {
  return (
    <div>
      <div className='relative min-h-screen'>
        <div className="absolute bottom-20">
          <Image src={BgShowcase} alt={""} />
        </div>
        <div className="container xs:px-4 sm:px-4 h-auto">
          <div className='relative'>
            <div className='overflow-hidden'>
              <div className='flex justify-between'>
                <h1 className='leading-tight text-white' style={{ fontFamily: 'Inter' }}>{`{SMART}`} <br /> DEVELOPMENT</h1>
                <h1 className='leading-tight text-white/50' style={{ fontFamily: 'Inter' }}>**</h1>
              </div>
              <div className='mt-20 '>
                <Marquee className='text-[#999]/10' isReverse={true} />
              </div>
              <div className='mt-40'>
                <p className='text-white max-w-sm text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <FloatingMockup />
          </div>
        </div>
      </div>
      <div className='mt-40'>
        <GridMockup />
      </div>
    </div>
  )
}
