"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote, Building2 } from "lucide-react"
import Image from "next/image"

export default function CEOMessage() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section id="ceo" ref={containerRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-zinc-50/50" />
        <motion.div className="absolute right-0 top-0 w-1/2 h-full bg-amber-500/5" style={{ y }} />
        <div className="absolute left-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gulfBlue">Message from the CEO</h2>
              </motion.div>

              <motion.div
                className="w-24 h-1 bg-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            {/* CEO Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-amber-500 font-bold mb-2">Engr. Makki Al-Abadi,</h3>
              <p className="text-zinc-600">
                the owner of Makki Al-Abadi General Construction Establishment, welcomes the audience to their
                presentation.
              </p>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="space-y-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Quote className="absolute -left-8 top-0 w-16 h-16 text-amber-500/10" />

              <p className="text-zinc-600 leading-relaxed">
                {`The company, with over 25 years of experience in the construction industry, is dedicated to turning
                visions into reality. Their success is attributed to a team of skilled professionals who are committed
                to exceeding client expectations.`}
              </p>

              <p className="text-zinc-600 leading-relaxed">
                {`They tailor their approach to each unique project, working closely with clients to deliver high-quality,
                sustainable, and innovative construction solutions.`}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-amber-500 mb-4">{`"Let's build the future together."`}</h4>

              <p className="text-zinc-600 leading-relaxed">
                {`Welcome to Makki Al-Abadi General Construction Establishment, a construction industry leader with number
                of years of experience. We excel in delivering high-quality, sustainable projects across various
                sectors. Our skilled team ensures on-time, on-budget delivery through innovation and the latest
                technology. We prioritize building trust-based relationships. Let us bring your vision to life.`}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - CEO Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-gulfBlue/10 to-transparent rounded-3xl transform -rotate-6" />

              {/* Image Container */}
              <motion.div
                className="relative h-full rounded-3xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/ceo.png"
                  alt="CEO Engr. Makki Al-Abadi"
                  fill
                  className="object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gulfBlue/20 to-transparent" />

                {/* Name Tag */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gulfBlue/90 to-transparent">
                  <div className="text-white text-lg font-bold">Engr. Makki Al-Abadi</div>
                  <div className="text-amber-500">CEO & Founder</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}