"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { User, MapPin, GraduationCap, Code } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "./section-heading"

const AboutSection: React.FC = () => {
  const bioRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const { observe, unobserve, isVisible } = useIntersectionObserver()

  useEffect(() => {
    const currentBioRef = bioRef.current
    const currentPhotoRef = photoRef.current

    if (currentBioRef) observe(currentBioRef)
    if (currentPhotoRef) observe(currentPhotoRef)

    return () => {
      if (currentBioRef) unobserve(currentBioRef)
      if (currentPhotoRef) unobserve(currentPhotoRef)
    }
  }, [observe, unobserve])

  return (
    <section id="about" className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800 noise-bg">
      <div className="container px-4 mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my background" />

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Photo */}
          <div
            ref={photoRef}
            className={`w-full md:w-2/5 flex justify-center section-fade-in ${isVisible(photoRef.current) ? "visible" : ""}`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-lg shadow-blue-500/10 transition-all duration-500 hover:shadow-blue-500/30 hover:border-blue-500/40">
              <Image src="/images/profile.png" alt="Dhruv Kapur" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
          </div>

          {/* Bio */}
          <div ref={bioRef} className={`w-full md:w-3/5 section-fade-in ${isVisible(bioRef.current) ? "visible" : ""}`}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Hello, I'm <span className="text-gradient">Dhruv Kapur</span>
            </h3>

            <p className="text-slate-300 mb-6 leading-relaxed">
              I am a Computer Science student with a strong foundation in data science, machine learning, and software
              engineering. I have growing experience developing ML-powered applications, including a recommendation
              system using TensorFlow.
            </p>

            <p className="text-slate-300 mb-8 leading-relaxed">
              My goal is to solve real-world problems through AI-driven solutions and continue learning in the field of
              applied machine learning and intelligent systems. I'm passionate about leveraging technology to create
              meaningful impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 group">
                <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  Fairfax, VA
                </span>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  BS Computer Science, GMU
                </span>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  Dean's List Student
                </span>
              </div>

              <div className="flex items-center gap-2 group">
                <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Code className="h-5 w-5" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  Software Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
