'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Code, Terminal, Coffee, Zap, Star, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Code indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/50"
            >
              <Terminal className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 code-font">
                console.log("Hello World!")
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-slate-900 dark:text-white">Hi, I'm </span>
              <motion.span 
                className="gradient-text inline-block"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 }
                }}
              >
                Abhay Gupta
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-200 max-w-4xl mx-auto leading-relaxed">
                Full Stack Developer who crafts 
                <motion.span 
                  className="text-indigo-600 dark:text-indigo-400 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {" "}beautiful
                </motion.span>
                {" "}&
                <motion.span 
                  className="text-indigo-600 dark:text-indigo-400 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {" "}functional
                </motion.span>
                {" "}digital experiences
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Passionate about creating innovative solutions that solve real-world problems 
                and deliver exceptional user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl glow-effect overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/GuptaAbhay2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 backdrop-blur-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-slate-700/50"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/abhay-gupta-19a485306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 backdrop-blur-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-slate-700/50"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technologies I Love
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Building with modern tools and frameworks to create scalable, performant applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '🔺' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Python', icon: '🐍' },
              { name: 'MongoDB', icon: '🍃' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="group bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 dark:bg-slate-800/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full"
              >
                <Coffee className="h-8 w-8 text-white" />
              </motion.div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer with experience in modern web technologies. 
              I love building applications that solve real-world problems and provide 
              excellent user experiences. When I'm not coding, you'll find me exploring 
              new technologies and contributing to open-source projects.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 backdrop-blur-sm text-slate-700 dark:text-slate-300 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-slate-700/50 group"
              >
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full"
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/20 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center gap-3 mb-4 lg:mb-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 bg-indigo-500/20 rounded-lg"
                  >
                    <Code className="h-6 w-6 text-indigo-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    To-Do App
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800 w-fit">
                  <Star className="h-3 w-3" />
                  Featured Project
                </span>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                A full-featured task management application with a clean and intuitive interface. 
                Built with modern React patterns and best practices.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'JavaScript', 'CSS', 'Local Storage'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/GuptaAbhay2/todo-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/link"
                >
                  <Github className="h-5 w-5 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                  View on GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl glow-effect group"
              >
                View all projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
