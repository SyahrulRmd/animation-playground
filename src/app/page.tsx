import { Button } from "@/components/ui/button";
import BackgroundHero from '@/assets/background.avif'
import Image from "next/image";
import { Plus, Star } from 'lucide-react';
import { CtaButton } from "@/components/cta-button";
import { Typewriter } from "@/components/typewriter";
import { Marquee } from "@/components/marquee";
import { HeaderOurServices } from "@/components/our-services/header";
import { CardOurServies } from "@/components/our-services/card";
import { HeaderAboutUs } from "@/components/about-us/header";
import { ContentAboutUs } from "@/components/about-us/content";
import { Showcase } from "@/components/showcase/showcase";
import BgShowcase from '@/assets/bg-showcase.svg'
import { HeaderPortofolio } from "@/components/portofolio/header";
import { CardsPortofolio } from "@/components/portofolio/cards";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <section className="p-3 min-h-screen flex relative">
        <div className="absolute z-50 flex gap-4 right-10 top-10">
          <Button id={'top-nav'} className="hover:text-white">
            <Plus size={16} />
            Become a Client
          </Button>
          <Button size={'icon'} variant={'secondary'} className="bg-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="12" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        <main className="relative rounded-[32px] overflow-hidden flex flex-grow">
          <Image src={BackgroundHero} objectFit="cover" width={1000} height={600} alt="Background Hero" className="absolute z-0 w-full h-full object-cover" />
          <div className="z-10 relative container grid items-end pb-10">
            <div>
              <div>
                <h1 className="text-white leading-none">WE CREATE</h1>
                <div className="inline-flex gap-6 items-center">
                  <CtaButton />
                  <h1 className="text-white font-bold leading-none">
                    <span className="italic">A</span>WESOME
                  </h1>
                </div>
                <Typewriter />
                <div className="relative">
                </div>
              </div>
              <hr className="border-white my-4 w-1/2" />
              <div className="flex gap-6 items-center">
                <div className="flex gap-2 bg-white items-center px-2 py-1 rounded-full">
                  {Array(5).fill(0).map((_, key) => (
                    <Star key={key} fill="#ffc149" stroke="#ffc149" size={14} />
                  ))}
                  <p className="font-medium text-sm">4.9</p>
                </div>
                <p className="text-gray-300 text-sm">GOLD VERIFIED</p>
                <p className="text-white font-medium">Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="overflow-hidden mt-4">
        <Marquee className="text-[#2ca8fe]" isReverse={false} />
      </section>
      <section className="mt-10 container xs:px-4 sm:px-4">
        <HeaderOurServices />
        <CardOurServies />
      </section>
      <section className="mt-10 container xs:px-4 sm:px-4">
        <HeaderAboutUs />
        <ContentAboutUs />
      </section>
      <section className="mt-10 bg-[#0d0f11] py-10 relative">
        <Showcase />
      </section>
      <section className="mt-20 container xs:px-4 sm:px-4 bg-white pb-20">
        <HeaderPortofolio />
        <CardsPortofolio />
      </section>
      <Footer />
      {/* <div className="h-screen"></div> */}
    </div>
  )
}
