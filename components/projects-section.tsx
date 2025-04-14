"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Play, PartyPopper } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "./section-heading"

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  tryItUrl?: string
  comingSoon?: boolean
  isPortfolio?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Movie Recommendation Model",
    description:
      "Developed a machine learning-based recommendation system that suggests movies based on user preferences and historical data.",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Jupyter Notebook"],
    githubUrl: "https://github.com/dkapur2",
    tryItUrl: "https://dkapur-movierec.streamlit.app/",
  },
  {
    id: 2,
    title: "Twitter/X Sentiment Analyzer",
    description:
      "Collect tweets using the Twitter API and classify them into positive, neutral, or negative using NLP techniques.",
    techStack: ["Python", "Tweepy", "Scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/dkapur2",
    tryItUrl: "https://dkapur-sentimentanalyzer.streamlit.app/",
  },
  {
    id: 3,
    title: "AI Resume Screener",
    description:
      "Build a tool that screens resumes for relevance to job descriptions using cosine similarity or embeddings to match keywords and phrases.",
    techStack: ["Python", "Scikit-learn", "Hugging Face", "Streamlit"],
    comingSoon: true,
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "Developed a fully responsive personal portfolio website to showcase projects, skills, and experience.",
    techStack: ["React.js", "TypeScript", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/dkapur2",
    isPortfolio: true,
  },
]

const ProjectsSection: React.FC = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const { observe, unobserve, isVisible } = useIntersectionObserver()
  const [portfolioCelebration, setPortfolioCelebration] = useState(false)
  const [confetti, setConfetti] = useState(false)

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

  const handlePortfolioClick = () => {
    setPortfolioCelebration(true)
    setConfetti(true)

    // Reset confetti animation after 2 seconds
    setTimeout(() => {
      setConfetti(false)
    }, 2000)
  }

  // Navigate to URL in the same window
  const navigateTo = (url: string) => {
    window.location.href = url
  }

  return (
    <section id="projects" className="w-full py-20 bg-gradient-to-b from-slate-800 to-slate-900 noise-bg">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="My Projects"
          subtitle="Here are some of the projects I've worked on. Each demonstrates different skills and technologies in my toolkit"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => {
                refs.current[index] = el
              }}
              className={`mountain-card flex flex-col h-full border border-slate-700 bg-slate-800/80 backdrop-blur-sm shadow-md section-fade-in ${
                isVisible(refs.current[index]) ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-slate-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-700 text-slate-300 border border-slate-600 hover:bg-blue-900/20 hover:border-blue-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.githubUrl && !project.comingSoon && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 active:scale-105"
                    onClick={() => navigateTo(project.githubUrl!)}
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Button>
                )}

                {project.comingSoon && (
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex items-center gap-1 bg-slate-700 text-slate-300 cursor-default"
                      disabled
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </Button>

                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex items-center gap-1 bg-slate-700 text-slate-300 cursor-default"
                      disabled
                    >
                      <span>Coming Soon</span>
                    </Button>
                  </>
                )}

                {project.tryItUrl && (
                  <Button
                    size="sm"
                    className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transform transition-all duration-300 hover:scale-110 active:scale-105"
                    onClick={() => navigateTo(project.tryItUrl!)}
                  >
                    <Play className="h-4 w-4" />
                    <span>Try it now</span>
                  </Button>
                )}

                {project.isPortfolio && (
                  <Button
                    size="sm"
                    className={`flex items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transform transition-all duration-300 hover:scale-110 active:scale-105 ${
                      confetti ? "confetti-animation" : ""
                    }`}
                    onClick={handlePortfolioClick}
                  >
                    {portfolioCelebration ? (
                      <>
                        <PartyPopper className="h-4 w-4" />
                        <span>Already Here! 🤯</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </>
                    )}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
