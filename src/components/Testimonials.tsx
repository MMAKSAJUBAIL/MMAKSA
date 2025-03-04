"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  text: string
  author: string
  role: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "We had an excellent experience with Makki Al-Abadi General Construction Establishment. They completed our project on time and within budget. The quality of their work is outstanding, and their team was professional and easy to work with. We highly recommend them!",
    author: "Sarah Johnson",
    role: "Residential Client",
    rating: 5,
    image: "/images/sarah.jpg",
  },
  {
    id: 2,
    text: "Makki Al-Abadi General Construction Establishment has been our go-to construction company for several projects. Their attention to detail, commitment to quality, and customer service are second to none. We look forward to working with them on future projects.",
    author: "Michael Chen",
    role: "Commercial Client",
    rating: 5,
    image: "/images/michael.jpg",
  },
  {
    id: 3,
    text: "The team at Makki Al-Abadi General Construction Establishment exceeded our expectations on our recent office building project. They were professional, efficient, and communicated effectively throughout the project. We are extremely satisfied with the end result.",
    author: "David Thompson",
    role: "Commercial Client",
    rating: 5,
    image: "/images/david.jpg",
  },
  {
    id: 4,
    text: "We were impressed with Makki Al-Abadi General Construction Establishment commitment to sustainable construction practices. They delivered a high-quality, eco-friendly building that has become a benchmark for our company.",
    author: "Emily Parker",
    role: "Sustainability Officer",
    rating: 5,
    image: "/images/emily.jpg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 md:py-24 bg-zinc-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gulfBlue mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Quotes from satisfied Customer
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between z-10 pointer-events-none">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gulfBlue hover:text-amber-500 transition-colors pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gulfBlue hover:text-amber-500 transition-colors pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonials */}
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-amber-500/10">
                    <Quote className="w-24 h-24" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl text-zinc-600 italic mb-6">{testimonials[currentIndex].text}</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gulfBlue">{testimonials[currentIndex].author}</div>
                      <div className="text-amber-500">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-amber-500 w-8" : "bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

