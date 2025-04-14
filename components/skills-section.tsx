"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Code, Database, Server, Terminal, Layers, PenTool } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "./section-heading"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Java", "Python", "C", "C++", "HTML", "CSS", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    name: "Frameworks & Libraries",
    icon: <Layers className="h-6 w-6" />,
    skills: ["React Native", "React", "NumPy", "Matplotlib", "Junit", "Unity", "TensorFlow", "Scikit-learn"],
  },
  {
    name: "Databases & Data",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "Pandas", "Data Analysis", "Machine Learning", "NLP"],
  },
  {
    name: "Tools & Platforms",
    icon: <PenTool className="h-6 w-6" />,
    skills: ["Git/GitHub", "Linux", "Unix", "Xcode", "VS Code", "Postman"],
  },
  {
    name: "APIs & Services",
    icon: <Server className="h-6 w-6" />,
    skills: ["REST APIs", "Google APIs", "Firebase", "Streamlit"],
  },
  {
    name: "Other Skills",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["CompTIA A+", "Mobile Development (iOS)", "Problem Solving", "Communication"],
  },
]

const SkillsSection: React.FC = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const { observe, unobserve, isVisible } = useIntersectionObserver()

  useEffect(() => {
    // Store current refs to avoid closure issues
    const currentRefs = [...refs.current]

    currentRefs.forEach((ref) => {
      if (ref) {
        observe(ref)
      }
    })

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          unobserve(ref)
        }
      })
    }
  }, [observe, unobserve])

  return (
    <section id="skills" className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800 noise-bg">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="My Skills"
          subtitle="Here's a comprehensive overview of the technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => {
                refs.current[index] = el
              }}
              className={`mountain-card bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-md border border-slate-700 p-6 section-fade-in ${
                isVisible(refs.current[index]) ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-md text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:bg-blue-900/20 hover:border-blue-500/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
