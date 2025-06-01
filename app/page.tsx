'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="text-indigo-500 dark:text-indigo-400 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Abhay Gupta
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full Stack Developer passionate about creating beautiful, functional, and user-friendly applications
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 group shadow-lg hover:shadow-xl"
                >
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/GuptaAbhay2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Github className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/abhay-gupta-19a485306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Linkedin className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              I'm a passionate developer with experience in modern web technologies. 
              I love building applications that solve real-world problems and provide 
              excellent user experiences.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
            >
              Learn more about me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 dark:border-slate-700 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-0 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
                To-Do App
              </h3>
              <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full w-fit">
                Featured Project
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              A full-featured task management application with a clean and intuitive interface.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/GuptaAbhay2/todo-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-colors duration-200 group/link"
              >
                <Github className="h-4 w-4 mr-2 group-hover/link:scale-110 transition-transform duration-200" />
                GitHub
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
            >
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
