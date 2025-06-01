'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  date: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "To-Do App",
      description: "A full-featured task management application with a clean and intuitive interface.",
      longDescription: "A comprehensive task management application built with modern web technologies. Features include task creation, editing, deletion, priority settings, due dates, and category organization. The app includes a responsive design that works seamlessly across all devices.",
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      githubUrl: "https://github.com/GuptaAbhay2/todo-app",
      featured: true,
      date: "2024"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather information with beautiful UI and location-based forecasts.",
      longDescription: "A comprehensive weather application that provides current weather conditions, 5-day forecasts, and detailed weather metrics. Features include geolocation support, city search, and beautiful weather animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API"],
      githubUrl: "https://github.com/GuptaAbhay2/weather-app",
      liveUrl: "https://weather-app-demo.vercel.app",
      featured: true,
      date: "2024"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with cart functionality and payment integration.",
      longDescription: "A full-stack e-commerce platform featuring product browsing, shopping cart, user authentication, order management, and payment processing. Built with performance and scalability in mind.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com/GuptaAbhay2/ecommerce-platform",
      featured: true,
      date: "2024"
    },
    {
      id: 4,
      title: "Personal Blog",
      description: "A markdown-based blog with dark mode and responsive design.",
      longDescription: "A modern blog platform supporting markdown content, syntax highlighting, dark/light themes, and responsive design. Features include article search, categories, and social sharing.",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/GuptaAbhay2/personal-blog",
      liveUrl: "https://abhay-blog.vercel.app",
      featured: false,
      date: "2023"
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            innovative solutions. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200 text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            Other Projects
          </h2>
          <div className="space-y-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:scale-[1.02]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-0">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200 font-medium"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-16 text-center bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/GuptaAbhay2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-200"
            >
              <Github className="h-5 w-5 mr-2" />
              Check out my GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-gupta-19a485306/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 border border-indigo-400"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
