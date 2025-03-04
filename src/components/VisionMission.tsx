"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function VisionMissionSection() {
  const [activeSection, setActiveSection] = useState<"mission" | "vision">("mission")
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const toggleSection = () => {
    setActiveSection(activeSection === "mission" ? "vision" : "mission")
  }

  return (
    <section id="VisionMission" ref={containerRef} className="relative py-16 md:py-32 overflow-hidden max-w-screen-2xl mx-auto">
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gulfBlue/90 to-gulfBlue/70" />
        <div className="absolute inset-0 bg-[url('/images/services.jpg')] bg-cover bg-center opacity-40" />
        
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Vision & Mission</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </motion.div>

        
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left/Top Panel */}
            <motion.div
              className={`relative flex-1 p-6 md:p-12 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden transition-all duration-500 ease-in-out ${
                activeSection === "mission" ? "bg-white" : "bg-zinc-100"
              }`}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection === "mission" ? "mission-content" : "mission-hidden"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: activeSection === "mission" ? 1 : 0.3, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`h-full flex flex-col ${activeSection === "mission" ? "" : "pointer-events-none"}`}
                >
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-6 ${
                      activeSection === "mission" ? "text-amber-500" : "text-zinc-400"
                    }`}
                  >
                    Mission Statement
                  </h3>

                  <p
                    className={`text-lg md:text-xl leading-relaxed mb-6 ${
                      activeSection === "mission" ? "text-zinc-700" : "text-zinc-400"
                    }`}
                  >
                    {`Our mission is to deliver superior construction services, exceed client expectations, and build
                    long-term relationships based on integrity and performance, all while adapting to changing client
                    needs with our qualified team.`}
                  </p>

                  {activeSection === "mission" && (
                    <motion.div
                      className="mt-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div
                        className="flex items-center text-amber-500 font-medium cursor-pointer group"
                        onClick={toggleSection}
                      >
                        View Our Vision
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right/Bottom Panel */}
            <motion.div
              className={`relative flex-1 p-6 md:p-12 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none overflow-hidden transition-all duration-500 ease-in-out ${
                activeSection === "vision" ? "bg-white" : "bg-zinc-100"
              }`}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection === "vision" ? "vision-content" : "vision-hidden"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: activeSection === "vision" ? 1 : 0.3, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`h-full flex flex-col ${activeSection === "vision" ? "" : "pointer-events-none"}`}
                >
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-6 ${
                      activeSection === "vision" ? "text-amber-500" : "text-zinc-400"
                    }`}
                  >
                    Vision Statement
                  </h3>

                  <p
                    className={`text-lg md:text-xl leading-relaxed mb-6 ${
                      activeSection === "vision" ? "text-zinc-700" : "text-zinc-400"
                    }`}
                  >
                    {`Our vision is to be the most trusted construction company known for innovative, sustainable,
                    high-quality solutions that enhance lives and communities.`}
                  </p>

                  {activeSection === "vision" && (
                    <motion.div
                      className="mt-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div
                        className="flex items-center text-amber-500 font-medium cursor-pointer group"
                        onClick={toggleSection}
                      >
                        <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        View Our Mission
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Central Interactive Element */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
            animate={{
              rotate: activeSection === "mission" ? -180 : 0,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 0.5 },
              scale: { duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
            }}
          >
            <div
              className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
              onClick={toggleSection}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Interactive Quote */}
        <motion.div
          className="max-w-3xl mx-auto mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl md:text-2xl italic text-white leading-relaxed">
            {`"We don't just build structures; we build futures, communities, and lasting relationships."`}
          </blockquote>
          <div className="mt-6 text-amber-400 font-medium">— CEO, Makki Al-Abadi Construction</div>
        </motion.div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
        />
      </div>
    </section>
  )
}

