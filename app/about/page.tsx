'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Coffee } from 'lucide-react'

export default function AboutPage() {
  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js',
    'Python',
    'MongoDB & PostgreSQL',
    'Tailwind CSS',
    'Git & GitHub',
    'RESTful APIs',
    'Docker',
    'AWS/Cloud Services'
  ]

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
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Get to know me better - my journey, skills, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <Coffee className="h-6 w-6 mr-3 text-indigo-500" />
                My Story
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  Hello! I'm Abhay Gupta, a passionate full-stack developer with a love for creating 
                  digital experiences that make a difference. My journey in software development 
                  started with curiosity and has evolved into a deep passion for building 
                  innovative solutions.
                </p>
                <p>
                  I enjoy working with modern technologies and frameworks, always staying up-to-date 
                  with the latest trends in web development. Whether it's crafting beautiful user 
                  interfaces or building robust backend systems, I approach each project with 
                  enthusiasm and attention to detail.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and the power of collaboration to create amazing things.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-indigo-500" />
                Let's Connect
              </h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/GuptaAbhay2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                  <Github className="h-5 w-5 mr-3 text-slate-600 dark:text-slate-300" />
                  <span className="text-slate-900 dark:text-white font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhay-gupta-19a485306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5 mr-3 text-slate-600 dark:text-slate-300" />
                  <span className="text-slate-900 dark:text-white font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 px-4 py-3 rounded-lg border border-indigo-200 dark:border-indigo-800"
                >
                  <span className="text-slate-900 dark:text-white font-medium text-sm">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Experience Highlight */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Currently Focusing On</h3>
              <p className="text-indigo-100">
                Building modern web applications with React, Next.js, and TypeScript. 
                Always exploring new technologies and best practices in full-stack development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
            Fun Facts About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">☕</div>
              <p className="text-slate-600 dark:text-slate-300">
                Coffee enthusiast - fuel for coding sessions
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🌙</div>
              <p className="text-slate-600 dark:text-slate-300">
                Night owl - most productive during late hours
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-slate-600 dark:text-slate-300">
                Always excited about new tech and innovations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
