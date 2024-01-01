'use client'

import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export const HeaderAboutUs = () => {
  return (
    <div className='mb-10 after:h-3 after:border after:border-black/20 after:border-b-0 after:w-full after:block'>
      <div className='mb-6 flex justify-between items-end '>
        <div>
          <h3 className='text-[#999] text-lg mb-4 font-medium'>02 - About Us</h3>
          <p className='text-[50px] leading-none font-medium md:text-3xl sm:text-2xl xs:text-2xl max-w-[910px]'>We Strive To Innovate</p>
        </div>
        <Button variant={'secondary'}>Become a Client <ArrowRight size={20} /></Button>
      </div>
    </div>
  )
}
