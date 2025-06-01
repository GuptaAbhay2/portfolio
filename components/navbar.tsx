'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) {
    return null
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl lg:w-1/2"
      >
        <div className="glass-effect bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo/Emoji - Always on the left */}
            <div className="flex items-center">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl cursor-pointer select-none"
                  role="img"
                  aria-label="Fire emoji"
                >
                  🔥
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      pathname === item.href
                        ? 'text-indigo-500 dark:text-indigo-400'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  ) : (
                    <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-effect bg-white/95 dark:bg-slate-900/95 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-xl backdrop-blur-md p-6">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-center py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                          pathname === item.href
                            ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
