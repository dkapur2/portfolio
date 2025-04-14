"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "./section-heading"
import { Button } from "@/components/ui/button"

interface Reference {
  id: number
  name: string
  quote: string
  image: string
  role: string
}

const references: Reference[] = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    role: "Actor",
    quote: "He was an invaluable asset to Stratton Oakmont. He is the Wolf behind Wall Street.",
    image: "/images/reference1.png",
  },
  {
    id: 2,
    name: "Superman",
    role: "Superhero",
    quote:
      " His technical knowledge combined with excellent communication skills protected the earth from alien invasion.",
    image: "/images/reference2.png",
  },
  {
    id: 3,
    name: "Max Verstappen",
    role: "F1 Racer",
    quote: "The programs he writes never crash. He excels in a fast-paced environment.",
    image: "/images/reference3.png",
  },
  {
    id: 4,
    name: "Oprah Winfrey",
    role: "Celebrity",
    quote: 'I told Dhruv "You get a car!", he told me to use a hashmap.',
    image: "/images/reference4.png",
  },
  {
    id: 5,
    name: "Elvis Presley",
    role: "Musical Artist",
    quote: "My boy my boy.",
    image: "/images/reference5.png",
  },
  {
    id: 6,
    name: "Tom Brady",
    role: "Greatest Ever",
    quote: "He's a high-pressure kinda guy. Respect.",
    image: "/images/reference6.png",
  },
  {
    id: 7,
    name: "Shah Rukh Khan",
    role: "Bollywood Actor",
    quote: "The true movie star.",
    image: "/images/reference7.png",
  },
]

const ReferencesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { observe, unobserve, isVisible } = useIntersectionObserver()

  useEffect(() => {
    const currentRef = sectionRef.current
    if (currentRef) {
      observe(currentRef)
    }

    return () => {
      if (currentRef) {
        unobserve(currentRef)
      }
    }
  }, [observe, unobserve])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section id="references" className="w-full py-20 bg-gradient-to-b from-slate-800 to-slate-900 noise-bg">
      <div className="container px-4 mx-auto">
        <SectionHeading title="References" subtitle="What others have to say about my work and collaboration" />

        <div ref={sectionRef} className={`relative section-fade-in ${isVisible(sectionRef.current) ? "visible" : ""}`}>
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollLeft}
              className="bg-slate-800/80 backdrop-blur-sm text-white hover:bg-blue-500/20 hover:text-blue-400 rounded-full shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollRight}
              className="bg-slate-800/80 backdrop-blur-sm text-white hover:bg-blue-500/20 hover:text-blue-400 rounded-full shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {references.map((reference, index) => (
              <div
                key={reference.id}
                className="min-w-[300px] md:min-w-[350px] px-4 snap-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mountain-card bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700 h-full flex flex-col items-center text-center transform transition-all duration-500 hover:translate-y-[-10px]">
                  {/* Image with B&W filter */}
                  <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/60 hover:shadow-blue-500/30">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent z-10"></div>
                    <Image
                      src={reference.image || "/placeholder.svg"}
                      alt={reference.name}
                      fill
                      className="object-cover filter grayscale hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold text-white mb-1">{reference.name}</h3>
                  <p className="text-sm text-blue-400 mb-4">{reference.role}</p>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="h-6 w-6 text-blue-500/30 absolute -top-3 -left-2" />
                    <p className="text-slate-300 italic text-sm leading-relaxed">{reference.quote}</p>
                    <Quote className="h-6 w-6 text-blue-500/30 absolute -bottom-3 -right-2 transform rotate-180" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollLeft}
              className="bg-slate-800/80 backdrop-blur-sm text-white hover:bg-blue-500/20 hover:text-blue-400 rounded-full shadow-lg"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>Scroll</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollRight}
              className="bg-slate-800/80 backdrop-blur-sm text-white hover:bg-blue-500/20 hover:text-blue-400 rounded-full shadow-lg"
            >
              <span>Scroll</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReferencesSection
