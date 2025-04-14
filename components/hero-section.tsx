"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container px-4 py-16 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Dhruv Kapur</h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-6">Computer Science Student</h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-300 mb-8">
          I am a Computer Science student with a strong foundation in data science, machine learning, and software
          engineering. My goal is to solve real-world problems through AI-driven solutions and continue learning in the
          field of applied machine learning and intelligent systems.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => {
            const projectsSection = document.getElementById("projects")
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          View My Work
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
