"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { SectionHeading } from "./section-heading"

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const formRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const { observe, unobserve, isVisible } = useIntersectionObserver()

  useEffect(() => {
    const currentFormRef = formRef.current
    const currentSocialRef = socialRef.current

    if (currentFormRef) observe(currentFormRef)
    if (currentSocialRef) observe(currentSocialRef)

    return () => {
      if (currentFormRef) unobserve(currentFormRef)
      if (currentSocialRef) unobserve(currentSocialRef)
    }
  }, [observe, unobserve])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or a form service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form after successful submission
      setFormState({ name: "", email: "", message: "" })
      setSubmitMessage({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      })
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "There was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Navigate to URL in the same window
  const navigateTo = (url: string) => {
    window.location.href = url
  }

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800 noise-bg">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to reach out using the form below or connect with me on social media"
        />

        <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`w-full md:w-2/3 section-fade-in ${isVisible(formRef.current) ? "visible" : ""}`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 mountain-card bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-slate-700/50 border-slate-600 text-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-slate-700/50 border-slate-600 text-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px] bg-slate-700/50 border-slate-600 text-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </Button>

              {submitMessage && (
                <div
                  className={`p-4 rounded-md ${
                    submitMessage.type === "success"
                      ? "bg-green-900/20 text-green-400 border border-green-800"
                      : "bg-red-900/20 text-red-400 border border-red-800"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div
            ref={socialRef}
            className={`w-full md:w-1/3 flex flex-col justify-between section-fade-in ${
              isVisible(socialRef.current) ? "visible" : ""
            }`}
          >
            <div className="mountain-card bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>

              <div className="space-y-4">
                <a
                  href="mailto:dhruvkapur10@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    dhruvkapur10@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+17038648694"
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">(703) 864-8694</span>
                </a>

                <a
                  href="https://github.com/dkapur2"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo("https://github.com/dkapur2")
                  }}
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/dhruv-kapur-56b60a206/"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo("https://www.linkedin.com/in/dhruv-kapur-56b60a206/")
                  }}
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="hidden md:block mt-6 mountain-card bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300">
                I'm currently open to internship opportunities and collaborations in software engineering and machine
                learning. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
