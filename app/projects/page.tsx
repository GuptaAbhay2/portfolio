'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar, Star, Code, Zap, Globe, Rocket } from 'lucide-react'

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
  category: string
  stats?: {
    stars?: number
    forks?: number
    commits?: number
  }
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "To-Do App",
      description: "A full-featured task management application with a clean and intuitive interface.",
      longDescription: "A comprehensive task management application built with modern web technologies. Features include task creation, editing, deletion, priority settings, due dates, and category organization. The app includes a responsive design that works seamlessly across all devices with local storage persistence.",
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      githubUrl: "https://github.com/GuptaAbhay2/todo-app",
      featured: true,
      date: "2024",
      category: "Web App",
      stats: {
        stars: 15,
        forks: 3,
        commits: 45
      }
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather information with beautiful UI and location-based forecasts.",
      longDescription: "A comprehensive weather application that provides current weather conditions, 5-day forecasts, and detailed weather metrics. Features include geolocation support, city search, beautiful weather animations, and responsive design optimized for all devices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API"],
      githubUrl: "https://github.com/GuptaAbhay2/weather-app",
      liveUrl: "https://weather-app-demo.vercel.app",
      featured: true,
      date: "2024",
      category: "Web App",
      stats: {
        stars: 28,
        forks: 7,
        commits: 62
      }
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with cart functionality and payment integration.",
      longDescription: "A full-stack e-commerce platform featuring product browsing, shopping cart, user authentication, order management, and payment processing. Built with performance and scalability in mind, featuring advanced filtering, search functionality, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com/GuptaAbhay2/ecommerce-platform",
      featured: true,
      date: "2024",
      category: "Full Stack",
      stats: {
        stars: 42,
        forks: 12,
        commits: 128
      }
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal developer portfolio showcasing projects and skills.",
      longDescription: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and optimized performance. Showcases projects, skills, and provides contact information.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/GuptaAbhay2/portfolio",
      liveUrl: "https://abhaygupta.dev",
      featured: false,
      date: "2024",
      category: "Portfolio",
      stats: {
        stars: 8,
        forks: 2,
        commits: 34
      }
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Content management system with markdown support and commenting.",
      longDescription: "A full-featured blog platform with markdown support, user authentication, commenting system, and admin dashboard. Built with modern web technologies and optimized for SEO.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      githubUrl: "https://github.com/GuptaAbhay2/blog-platform",
      featured: false,
      date: "2023",
      category: "Full Stack",
      stats: {
        stars: 22,
        forks: 5,
        commits: 89
      }
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time messaging app with rooms and file sharing capabilities.",
      longDescription: "A real-time chat application with support for multiple chat rooms, file sharing, emoji reactions, and user presence indicators. Built with Socket.io for real-time communication.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/GuptaAbhay2/chat-app",
      featured: false,
      date: "2023",
      category: "Real-time App",
      stats: {
        stars: 18,
        forks: 4,
        commits: 67
      }
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: featured ? 1.02 : 1.03 }}
      className={`group bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 relative overflow-hidden ${
        featured ? 'p-8' : 'p-6'
      }`}
    >
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className={`flex flex-col ${featured ? 'lg:flex-row lg:items-center' : ''} lg:justify-between mb-4`}>
          <div className="flex items-center gap-3 mb-3 lg:mb-0">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-indigo-500/20 rounded-lg"
            >
              <Code className={`${featured ? 'h-6 w-6' : 'h-5 w-5'} text-indigo-500`} />
            </motion.div>
            <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300`}>
              {project.title}
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-500/20 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-700">
              <Calendar className="h-3 w-3" />
              {project.date}
            </span>
            {featured && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800">
                <Star className="h-3 w-3" />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className={`text-slate-600 dark:text-slate-300 mb-4 leading-relaxed ${featured ? 'text-lg' : ''}`}>
          {featured ? project.longDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats (for featured projects) */}
        {featured && project.stats && (
          <div className="flex items-center gap-6 mb-6 text-sm text-slate-600 dark:text-slate-400">
            {project.stats.stars && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>{project.stats.stars}</span>
              </div>
            )}
            {project.stats.forks && (
              <div className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span>{project.stats.forks}</span>
              </div>
            )}
            {project.stats.commits && (
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4" />
                <span>{project.stats.commits} commits</span>
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/link"
          >
            <Github className="h-4 w-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
            View Code
          </motion.a>
          
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/link"
            >
              <Globe className="h-4 w-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6"
          >
            <Rocket className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects I've built using modern technologies. 
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Star className="h-6 w-6 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          </div>
          <div className="grid lg:grid-cols-1 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <ProjectCard project={project} featured={true} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Code className="h-6 w-6 text-indigo-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Other Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  ) }
  