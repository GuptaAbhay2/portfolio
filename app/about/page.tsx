'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Coffee, Heart, Code2, Zap, Star, Download } from 'lucide-react'

export default function AboutPage() {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, icon: '🟨' },
    { name: 'React & Next.js', level: 85, icon: '⚛️' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'MongoDB & PostgreSQL', level: 70, icon: '🍃' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'Git & GitHub', level: 85, icon: '📦' },
    { name: 'RESTful APIs', level: 80, icon: '🔗' },
    { name: 'Docker', level: 65, icon: '🐋' },
    { name: 'AWS/Cloud Services', level: 60, icon: '☁️' }
  ]

  const interests = [
    { name: 'Open Source', icon: '💝', color: 'from-pink-500 to-rose-500' },
    { name: 'Web3 & Blockchain', icon: '⛓️', color: 'from-purple-500 to-indigo-500' },
    { name: 'AI & Machine Learning', icon: '🤖', color: 'from-blue-500 to-cyan-500' },
    { name: 'Mobile Development', icon: '📱', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6"
          >
            <Heart className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Get to know me better - my journey, skills, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <Coffee className="h-6 w-6 text-indigo-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Story</h2>
              </div>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Hello! I'm Abhay, a passionate Full Stack Developer with a love for creating 
                  digital experiences that make a difference. My journey in web development 
                  started with curiosity about how websites work, and it has evolved into a 
                  deep passion for building scalable, user-friendly applications.
                </p>
                <p>
                  I specialize in modern web technologies including React, Next.js, Node.js, 
                  and Python. I believe in writing clean, maintainable code and following 
                  best practices to ensure the applications I build are not only functional 
                  but also performant and accessible.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or enjoying a good cup of coffee while planning my 
                  next project. I'm always eager to learn and take on new challenges that 
                  push me to grow as a developer.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Interests & Learning</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`group p-4 bg-gradient-to-br ${interest.color} rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {interest.icon}
                      </span>
                      <span className="font-semibold">{interest.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Quick Info</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="h-5 w-5 text-indigo-500" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Code2 className="h-5 w-5 text-indigo-500" />
                  <span>2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Star className="h-5 w-5 text-indigo-500" />
                  <span>Available for Projects</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Connect With Me</h2>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/GuptaAbhay2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-xl transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/abhay-gupta-19a485306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Email Me</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Code2 className="h-6 w-6 text-indigo-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-slate-50/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50"
        >
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
            Fun Facts About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="text-3xl mb-2">☕</div>
              <p className="text-slate-600 dark:text-slate-300">
                Coffee enthusiast - fuel for coding sessions
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="text-3xl mb-2">🌙</div>
              <p className="text-slate-600 dark:text-slate-300">
                Night owl - most productive during late hours
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-slate-600 dark:text-slate-300">
                Always excited about new tech and innovations
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
