import MountainHero from "@/components/mountain-hero"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import ReferencesSection from "@/components/references-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Dhruv Kapur | Portfolio",
  description: "The personal portfolio of Dhruv Kapur showcasing projects, skills, and experience.",
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <MountainHero />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="references">
          <ReferencesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <section>
          <Analytics />
        </section>
      </main>
      <Footer />
    </>
  )
}
