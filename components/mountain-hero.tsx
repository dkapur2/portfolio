"use client"

import type React from "react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useParallax } from "@/hooks/use-parallax"
import { ArrowDown } from "lucide-react"

const MountainHero: React.FC = () => {
  useParallax()

  useEffect(() => {
    const animateHero = () => {
      const elements = document.querySelectorAll(".hero-animate")
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("opacity-100", "translate-y-0")
        }, 200 * index)
      })
    }

    animateHero()
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-800">
      {/* Mountain layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>

        {/* Far mountains */}
        <svg
          className="absolute bottom-0 w-full parallax-layer"
          data-speed="0.1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1e293b"
            fillOpacity="0.7"
            d="M0,224L60,229.3C120,235,240,245,360,240C480,235,600,213,720,213.3C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        {/* Middle mountains */}
        <svg
          className="absolute bottom-0 w-full parallax-layer"
          data-speed="0.2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0f172a"
            fillOpacity="0.8"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Close mountains */}
        <svg
          className="absolute bottom-0 w-full parallax-layer"
          data-speed="0.3"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0f172a"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
        <h1 className="hero-animate opacity-0 translate-y-8 transition-all duration-700 text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Dhruv <span className="text-gradient">Kapur</span>
        </h1>

        <h2 className="hero-animate opacity-0 translate-y-8 transition-all duration-700 text-xl md:text-2xl font-medium text-blue-300 mb-6">
          Computer Science Student
        </h2>

        <p className="hero-animate opacity-0 translate-y-8 transition-all duration-700 max-w-2xl mx-auto text-base md:text-lg text-slate-300 mb-8">
          I am a Computer Science student with a strong foundation in data science, machine learning, and software
          engineering. My goal is to solve real-world problems through AI-driven solutions and continue learning in the
          field of applied machine learning and intelligent systems.
        </p>

        <Button
          size="lg"
          className="hero-animate opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
          onClick={() => {
            const projectsSection = document.getElementById("projects")
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          View My Work
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="text-white opacity-70 hover:opacity-100 hover:bg-transparent"
            onClick={() => {
              const aboutSection = document.getElementById("about")
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MountainHero
