"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  PenToolIcon as Tool,
  Wrench,
  AlertTriangle,
  Building2,
  ClipboardCheck,
  Trash2,
  Trees,
  Shield,
  Zap,
  Clock,
} from "lucide-react"

interface Service {
  id: string
  number: string
  title: string
  description: string
  icon: React.ReactNode
  category: "maintenance" | "facility" | "safety" | "management"
}

const services: Service[] = [
  {
    id: "preventive-maintenance",
    number: "01",
    title: "Preventive Maintenance",
    description:
      "Regular inspections and maintenance activities to prevent potential problems and ensure the longevity of the structure.",
    icon: <Tool className="w-6 h-6" />,
    category: "maintenance",
  },
  {
    id: "corrective-maintenance",
    number: "02",
    title: "Corrective Maintenance",
    description:
      "Addressing and fixing issues that have been identified during preventive maintenance or reported by users.",
    icon: <Wrench className="w-6 h-6" />,
    category: "maintenance",
  },
  {
    id: "emergency-maintenance",
    number: "03",
    title: "Emergency Maintenance",
    description:
      "Providing immediate response and solutions for unexpected issues that could cause significant damage or pose safety risks.",
    icon: <AlertTriangle className="w-6 h-6" />,
    category: "maintenance",
  },
  {
    id: "renovations",
    number: "04",
    title: "Renovations and Upgrades",
    description:
      "Updating and enhancing existing structures to improve their functionality, efficiency, or aesthetic appeal.",
    icon: <Building2 className="w-6 h-6" />,
    category: "facility",
  },
  {
    id: "compliance",
    number: "05",
    title: "Compliance Checks",
    description: "Ensuring that the building remains compliant with all relevant building codes and regulations.",
    icon: <ClipboardCheck className="w-6 h-6" />,
    category: "safety",
  },
  {
    id: "cleaning",
    number: "06",
    title: "Cleaning Services",
    description: "Regular cleaning of common areas, exterior spaces, and other facilities.",
    icon: <Trash2 className="w-6 h-6" />,
    category: "facility",
  },
  {
    id: "grounds",
    number: "07",
    title: "Grounds Maintenance",
    description: "Taking care of outdoor areas, including landscaping, parking lots, and walkways.",
    icon: <Trees className="w-6 h-6" />,
    category: "facility",
  },
  {
    id: "security",
    number: "08",
    title: "Security Services",
    description: "Implementing and managing security systems to ensure the safety of the occupants.",
    icon: <Shield className="w-6 h-6" />,
    category: "safety",
  },
  {
    id: "energy",
    number: "09",
    title: "Energy Management",
    description: "Monitoring and optimizing energy usage to improve efficiency and reduce costs.",
    icon: <Zap className="w-6 h-6" />,
    category: "management",
  },
  {
    id: "lifecycle",
    number: "10",
    title: "Lifecycle Management",
    description:
      "Planning for the long-term care of the building, including eventual repairs, renovations, and replacements.",
    icon: <Clock className="w-6 h-6" />,
    category: "management",
  },
]

const categories = [
  { id: "all", label: "All Services" },
  { id: "maintenance", label: "Maintenance" },
  { id: "facility", label: "Facility" },
  { id: "safety", label: "Safety" },
  { id: "management", label: "Management" },
]

export default function ServicesBasedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [])

  // Update cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, filteredServices.length - cardsPerView)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, Math.max(0, index)))
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Snap to nearest card
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / cardsPerView
      const scrollPosition = carouselRef.current.scrollLeft
      const newIndex = Math.round(scrollPosition / cardWidth)
      goToIndex(newIndex)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gulfBlue mb-4">Services Based Projects</h2>
          <motion.div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-zinc-600">
            Comprehensive maintenance and service solutions to ensure the optimal performance and longevity of your
            facilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeCategory === category.id
                    ? "bg-amber-500 text-white"
                    : "bg-white text-zinc-700 hover:bg-zinc-100"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-between items-center mb-6">
          <motion.button
            onClick={handlePrev}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentIndex === 0 ? "bg-zinc-200 text-zinc-400" : "bg-amber-500 text-white hover:bg-amber-600"
            }`}
            whileHover={currentIndex > 0 ? { scale: 1.1 } : {}}
            whileTap={currentIndex > 0 ? { scale: 0.9 } : {}}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(filteredServices.length / cardsPerView) }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i * cardsPerView)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === Math.floor(currentIndex / cardsPerView) ? "bg-amber-500" : "bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentIndex >= maxIndex ? "bg-zinc-200 text-zinc-400" : "bg-amber-500 text-white hover:bg-amber-600"
            }`}
            whileHover={currentIndex < maxIndex ? { scale: 1.1 } : {}}
            whileTap={currentIndex < maxIndex ? { scale: 0.9 } : {}}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <motion.div
            className="flex"
            animate={{
              x: `calc(-${currentIndex * 100}% / ${cardsPerView})`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100 && currentIndex > 0) {
                handlePrev()
              } else if (info.offset.x < -100 && currentIndex < maxIndex) {
                handleNext()
              }
            }}
          >
            <AnimatePresence initial={false} mode="wait">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  className={`flex-shrink-0 p-3`}
                  style={{ width: `${100 / cardsPerView}%` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="h-full p-6 bg-white rounded-xl shadow-md relative overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <div className="absolute inset-0 transform rotate-45">
                        <div className="absolute inset-0 border-t-2 border-r-2 border-gulfBlue"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white"
                          whileHover={{ scale: 1.1 }}
                        >
                          {service.icon}
                        </motion.div>
                        <span className="text-4xl font-bold text-zinc-200">{service.number}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gulfBlue mb-3">{service.title}</h3>

                      <p className="text-zinc-600">{service.description}</p>

                      {/* Category Badge */}
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                          {categories.find((cat) => cat.id === service.category)?.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

