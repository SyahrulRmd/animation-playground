'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import VisaImage from '@/assets/visa.webp'
import RocketImage from '@/assets/rocket.webp'
import TodoImage from '@/assets/todo.webp'
import CalendarImage from '@/assets/calendar.webp'
import Image from 'next/image'
import gsap from 'gsap'

const CardOfNumber = ({ content }: { content: typeof contentNumbers[number] }) => {
  return (
    <div className='p-6 rounded-2xl bg-secondary col-span-2 xs:col-span-4 relative min-h-[180px] overflow-hidden'>
      <Image src={content.image} alt={content.title} className='absolute -bottom-10 -right-5' width={150} height={150} />
      <div className='z-10 relative'>
        <h3 className='text-5xl font-bold mb-2 font-jakarta-sans'>{content.title}</h3>
        <p className='text-[#999] text-sm max-w-[60%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit error doloribus.</p>
      </div>
    </div>
  )
}

const Processes = ({diameter}: {diameter: number}) => {
  const processRef = useRef<HTMLDivElement>(null)
  const [radius, setRadius] = useState(0)

  useLayoutEffect(() => {
    const process = processRef.current
    if (process) {
      setRadius(process.clientWidth / 2)
    }

    function handleResize() {
      if (process) {
        setRadius(process.clientWidth / 2)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useLayoutEffect(() => {
    const process = processRef.current

    if (process) {
      const liList = process.children[0].children
      liList[0].setAttribute('style', `transform: rotate(135deg) translateX(calc(${radius}px)) rotate(-135deg)`)
    }

    const ctx = gsap.context(() => {
      process?.addEventListener('mouseenter', () => {
        if (process) {
          const liList = process.children[0].children
          const deltaDeegree = 135 / liList.length

          for (let i = 0; i < liList.length; i++) {
            const liElement = liList.item(i)

            if (liElement) {
              if (i <= liList.length / 2) {
                const degree = deltaDeegree * i

                gsap.fromTo(liElement, {
                  transform: `rotate(135deg) translateX(calc(${radius}px)) rotate(-135deg)`,
                  opacity: 0
                }, {
                  transform: `rotate(${135 + degree}deg) translateX(calc(${radius}px)) rotate(-${135 + degree}deg)`,
                  opacity: 1,
                })
              } else if (i > liList.length / 2) {
                const degree = deltaDeegree * (i - 1)

                gsap.fromTo(liElement, {
                  transform: `rotate(135deg) translate(calc(${radius}px), 0) rotate(-135deg) scale(1)`,
                  opacity: 0
                }, {
                  opacity: 1,
                  transform: `rotate(${135 - degree}deg) translate(calc(${radius}px), 0) rotate(-${135 - degree}deg) scale(1)`
                })

                // liElement.setAttribute('style', `transform: rotate(${135 - degree}deg) translateX(calc(${radius}px)) rotate(-${135 - degree}deg)`)
                // liElement.children[1].setAttribute('style', `left: 80%`)
              }
            }
          }
        }
      })
      process?.addEventListener('mouseleave', () => {
        if (process) {
          const liList = process.children[0].children
          const deltaDeegree = 135 / liList.length

          for (let i = 0; i < liList.length; i++) {
            const liElement = liList.item(i)

            if (liElement) {
              if (i === 0) {
              } else if (i <= liList.length / 2) {
                const degree = deltaDeegree * i

                gsap.fromTo(liElement, {
                  opacity: 1,
                  transform: `rotate(${135 + degree}deg) translateX(calc(${radius}px)) rotate(-${135 + degree}deg)`
                }, {
                  transform: `rotate(135deg) translateX(calc(${radius}px)) rotate(-135deg)`,
                  opacity: 0
                })
              } else if (i > liList.length / 2) {
                const degree = deltaDeegree * (i - 1)

                gsap.fromTo(liElement, {
                  opacity: 1,
                  transform: `rotate(${135 - degree}deg) translateX(calc(${radius}px)) rotate(-${135 - degree}deg)`
                }, {
                  transform: `rotate(135deg) translateX(calc(${radius}px)) rotate(-135deg)`,
                  opacity: 0
                })
              }
            }
          }
        }
      })
    }, processRef)

    return () => ctx.revert()
  }, [radius])

  return (
    <div ref={processRef} style={{ width: `${diameter}%`, height: `${diameter}%` }} className="bg-black/5 rounded-[50%] absolute flex -rotate-45 border hover:border-[#999] transition-all">
      <ul className='grid m-auto'>
        <li className='col-span-full row-span-full relative flex items-center justify-center'>
          <span className='block absolute w-3 h-3 rounded-full bg-primary before:animate-indicator-pulse before:h-3 before:w-3 before:bg-primary/50 before:block before:rounded-full' />
          <span className='font-semibold translate-x-[80%] -translate-y-5'>Lorem Ipsum</span>
        </li>
        <li className='col-span-full row-span-full relative flex items-center justify-center opacity-0'>
          <span className='w-1 h-1 rounded-full bg-black block absolute' />
          <span className='absolute left-[80%]'>Lorem</span>
        </li>
        <li className='col-span-full row-span-full relative flex items-center justify-center opacity-0'>
          <span className='w-1 h-1 rounded-full bg-black block absolute' />
          <span className='absolute left-[80%]'>Lorem</span>
        </li>
        <li className='col-span-full row-span-full relative flex items-center justify-center opacity-0'>
          <span className='w-1 h-1 rounded-full bg-black block absolute' />
          <span className='absolute left-[80%]'>Lorem</span>
        </li>
      </ul>
    </div>
  )
}

const ProcessesContainer = () => {
  return (
    <div className='bg-secondary w-[90%] ml-auto aspect-square justify-center rounded-[50%] relative flex rotate-45 overflow-hidden'>
      <Processes diameter={85} />
      <Processes diameter={65} />
    </div>
  )
}

const contentNumbers = [
  {
    id: 1,
    title: '+300',
    image: TodoImage
  },
  {
    id: 2,
    title: '100k',
    image: VisaImage
  },
  {
    id: 3,
    title: '+10',
    image: CalendarImage
  },
  {
    id: 4,
    title: '+280',
    image: RocketImage
  }
]

export const ContentAboutUs = () => {
  return (
    <div className='flex gap-4'>
      <div className='basis-1/2 xs:basis-full'>
        <p className='text-[#999] text-xl font-jakarta-sans'><span className='text-black '>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur iste quaerat ipsam neque, eos maiores porro saepe harum accusantium ea cupiditate sit maxime nihil, voluptatibus omnis iure debitis sequi.</p>
        <div className='mt-10'>
          <p className='font-semibold text-[#999]'>Some number of us</p>
          <div className='grid grid-cols-4 gap-4'>
            {contentNumbers.map((content, key) => (
              <CardOfNumber key={key} content={content} />
            ))}
          </div>
        </div>
      </div>
      <div className='basis-1/2 xs:basis-full overflow-hidden'>
        <ProcessesContainer />
      </div>
    </div>
  )
}
