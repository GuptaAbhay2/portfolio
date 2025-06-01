'use client'

import { Github, Linkedin, Heart, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Abhay Gupta
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/GuptaAbhay2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/abhay-gupta-19a485306/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Copyright and Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
              <span>© {currentYear} Abhay Gupta. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion
            </p>
            
            <p className="text-xs text-slate-400 dark:text-slate-600">
              Designed and developed with modern web technologies for optimal performance
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
