"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { CalendarDays, Building, Briefcase } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "./section-heading"

interface Experience {
  id: number
  company: string
  role: string
  duration: string
  description: string[]
  location: string
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Stthira Corporation",
    role: "Software Engineering Intern",
    duration: "Jun 2024 - Sep 2024",
    location: "Chantilly, VA",
    description: [
      "Enhanced CRM App Functionality: Developed a new component for Stthira's CRM web application using React Native and the Google Calendar API, enabling seamless integration of user-scheduled events into Google Calendar.",
      "Expanded App Features for Contact Management: Designed and implemented multiple pages using React Native, Xcode, and TypeScript, allowing users to manage contact data more effectively.",
      "Improved User Experience: Optimized UI/UX by applying advanced styling techniques and responsive design principles, improving overall app performance and user engagement.",
      "Utilized REST APIs for smooth communication between the app and external services, significantly improving productivity and scheduling efficiency for clients.",
    ],
  },
  {
    id: 2,
    company: "Advance Digital Systems",
    role: "Software Engineering Intern",
    duration: "Jun 2022 - Sep 2022",
    location: "Fairfax, VA",
    description: [
      "Developed and implemented web applications using JavaScript and React improving client side functionality and user experience.",
      "Applied Python and SQL for data analysis and management tasks, streamlining data processing workflows.",
      "Utilized Excel to automate repetitive data management intensive tasks, reducing manual data entry by at least 40%.",
      "Demonstrated proficient problem-solving skills diagnosing and fixing technical issues.",
    ],
  },
  {
    id: 3,
    company: "Mathnasium",
    role: "Math Tutor",
    duration: "Mar 2021 - Aug 2022",
    location: "Fairfax, VA",
    description: [
      "Utilized multitasking while applying different lessons to students simultaneously.",
      "Used communication and motivation to teach mathematical concepts ranging from basic arithmetic to calculus.",
      "Worked with students K-12 in group settings of four.",
    ],
  },
]

const ExperienceSection: React.FC = () => {
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
    <section id="experience" className="w-full py-20 bg-gradient-to-b from-slate-800 to-slate-900 noise-bg">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the valuable experience I've gained along the way"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => {
                refs.current[index] = el
              }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 section-fade-in ${
                isVisible(refs.current[index]) ? "visible" : ""
              } ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline node */}
              <div className="timeline-dot"></div>

              {/* Content */}
              <div className="md:w-1/2 ml-8 md:ml-0 md:px-6">
                <div className="mountain-card bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-slate-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Building className="h-4 w-4 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-blue-400" />
                    <p className="text-slate-300 font-medium">{exp.role}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <CalendarDays className="h-4 w-4 text-blue-400" />
                    <p className="text-slate-400 text-sm">
                      {exp.duration} | {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-300 pl-4 relative group">
                        <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500/50 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
