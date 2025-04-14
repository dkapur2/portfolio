import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 noise-bg">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Dhruv Kapur. All rights reserved.
            </p>
          </div>

          <div className="flex items-center">
            <span className="text-slate-400 text-sm group">
              Built with{" "}
              <span className="text-gradient inline-block group-hover:scale-110 transition-transform duration-300">
                ❤
              </span>{" "}
              using React and TypeScript
            </span>
          </div>
        </div>

        {/* Placeholder for analytics */}
        <div id="analytics-placeholder" className="hidden">
          {/* Analytics scripts would go here in production */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
