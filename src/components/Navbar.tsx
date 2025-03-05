"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Phone } from "lucide-react"

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SERVICES", href: "#services" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("HOME")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-2 bg-gulfBlue/95 backdrop-blur-sm" : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="relative w-32 h-16 bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Company Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                {!scrolled && (
                  <motion.div className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500" layoutId="underline" />
                )}
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <motion.div key={item.name} whileHover={{ y: -2 }} className="relative">
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-bold transition-colors ${
                      activeItem === item.name
                        ? "text-amber-500"
                        : scrolled
                          ? "text-white hover:text-amber-500"
                          : "text-white hover:text-amber-500"
                    }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name}
                  </Link>
                  {activeItem === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                      layoutId="navbar-underline"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden lg:flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-amber-600 transition-colors shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  CONTACT US
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-amber-500 text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gulfBlue/95 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-2xl py-28 px-6 "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-gulfBlue hover:text-amber-500 font-bold"
                      onClick={() => {
                        setActiveItem(item.name)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {item.name}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full bg-amber-500 text-white py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    CONTACT US
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}