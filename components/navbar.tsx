'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { Menu, X, Home, User, FolderOpen } from 'lucide-react'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
  ]

  return (
    <>
      {/* WRAPPER: Centered using flex */}
      <div className="fixed top-4 z-50 w-full flex justify-center px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="w-full max-w-4xl glass-effect bg-white/80 dark:bg-slate-900/80 border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo/Emoji */}
            <div className="flex items-center">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -5, 5, 0],
                    transition: { duration: 0.6 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative text-3xl cursor-pointer select-none p-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-200/50 dark:border-indigo-800/50"
                  role="img"
                  aria-label="Fire emoji"
                >
                  🔥
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center bg-white/20 dark:bg-slate-800/30 rounded-xl p-1 backdrop-blur-sm border border-white/20 dark:border-slate-700/30">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                        <Icon className="h-4 w-4 relative z-10" />
                        <span className="relative z-10">{item.name}</span>
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Right side: Theme toggle and menu */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 dark:bg-slate-800/30 rounded-xl p-1 backdrop-blur-sm border border-white/20 dark:border-slate-700/30">
                <ThemeToggle />
              </div>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 bg-white/20 hover:bg-white/30 dark:bg-slate-800/30 dark:hover:bg-slate-700/50 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 dark:border-slate-700/30"
                aria-label="Toggle mobile menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden"
            >
              <div className="glass-effect bg-white/90 dark:bg-slate-900/90 rounded-2xl shadow-2xl border border-white/30 dark:border-slate-700/30 backdrop-blur-xl p-6">
                <div className="space-y-3">
                  {navigation.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                              : 'text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 hover:bg-white/50 dark:hover:bg-slate-800/50'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {item.name}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 