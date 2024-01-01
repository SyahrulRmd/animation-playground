'use client'

import React from 'react'
import Image from 'next/image'
import MobileImage from '@/assets/mobile.png'
import DesignImage from '@/assets/design.png'
import WebsiteImage from '@/assets/website.png'

const ourServices = [
  {
    id: 1,
    name: 'MOBILE DELVELOPMENT',
    image: MobileImage,
    accent: '40, 86%, 60%',
    tags: ['React Native', 'Swift', 'Flutter', 'Kotlin']
  },
  {
    id: 2,
    name: 'SOLID DESIGN SOLUTION',
    image: DesignImage,
    accent: '0, 86%, 60%',
    // accent: '#F14141',
    tags: ['Figma', 'Adobe AfterEffect', 'Adobe Illustrator']
  },
  {
    id: 3,
    name: 'WEB DELVELOPMENT',
    image: WebsiteImage,
    accent: '209, 86%, 60%',
    tags: ['ReactJS', 'VueJS', 'NodeJS', 'NextJS', 'NuxtJS']
  }

]

const Card = ({ service }: { service: typeof ourServices[number] }) => {
  return (
    <div className='relative h-full'>
      <Image className='animate-img-pulse absolute w-full h-full object-cover' src={service.image} width={300} height={400} alt={service.name} />
      <div className={'flex flex-col justify-between text-white z-10 absolute h-full p-4'} style={{ backgroundColor: `hsl(${service.accent}, 25%)` }}>
        <h2 className='text-4xl font-medium'>{service.name}</h2>
        <div>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolores? Earum, nemo nam officiis molestias id minima provident officia delectus maxime laboriosam esse tempora debitis, recusandae quibusdam iste qui sit?</p>
          <hr className='border-white my-3' />
          <ul className="flex flex-wrap gap-2">
            {service.tags.map((tag, key) => (
              <li key={key} className='bg-white/40 rounded-full text-white px-3 py-1 font-medium text-sm'>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const CardOurServies = () => {
  return (
    <div className='grid grid-cols-12 gap-6'>
      {ourServices.map((service, key) => (
        <div key={key} className='col-span-4 xs:col-span-12 sm:col-span-12 md:col-span-6 min-h-[400px] overflow-hidden rounded-lg'>
          <Card service={service}/>
        </div>
      ))}
    </div>
  )
}
