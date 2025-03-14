"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Users, Truck, Building } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="max-w-screen-2xl mx-auto relative min-h-screen w-full overflow-hidden bg-gulfBlue"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="/images/hero-background.jpg"
          alt="Modern architecture"
          fill
          className="object-cover opacity-50"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-gulfBlue/80 to-transparent" />
      </motion.div>

      {/* Curved Shape - Hidden on Small Screens */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 h-full w-full"
          style={{ transform: "scaleX(-1)" }}
        >
          <path d="M0,0 L75,0 C50,50 50,50 75,100 L0,100 Z" fill="currentColor" className="text-gulfBlue opacity-90" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 min-h-screen flex items-center relative z-20">
        <div className="max-w-4xl pt-32 pb-20 md:pt-32">
          {/* Main Heading */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Makki bin <span className="text-amber-500">Mohammed</span>
              <br />
              Al-Abadi Est
            </h1>
          </motion.div>

          {/* Services Icons - Stack Vertically on Small Screens */}
          <motion.div
            className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { Icon: Users, text: "Manpower Supply" },
              { Icon: Truck, text: "Equipment Supply" },
              { Icon: Building, text: "Civil Job" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-white group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-orange transition-colors">
                  <item.Icon className="w-5 h-5 md:w-6 md:h-6 text-orange group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium group-hover:text-orange transition-colors">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button - Full Width on Small Screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="#services"
              className="group inline-flex items-center justify-center w-full md:w-auto gap-2 bg-orange text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-amber-600 transition-all duration-300 relative overflow-hidden"
            >
              More Services
              <motion.div className="relative" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 200 }}>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on Small Screens */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gulfBlue to-transparent z-10 hidden md:block" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl hidden md:block" />
    </div>
  )
}

