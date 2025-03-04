"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  HardHat,
  Building2,
  ClipboardCheck,
  Construction,
  Globe,
  Home,
  Store,
  BracketsIcon as Bridge,
  Wrench,
  PaintBucket,
} from "lucide-react"

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard = ({ icon, title, description }: ServiceProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white/60 rounded-lg shadow-md overflow-hidden "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col">
        <motion.div
          className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4"
          animate={{
            scale: isHovered ? 1.1 : 1,
            backgroundColor: isHovered ? "#d97706" : "#f59e0b",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white w-8 h-8">{icon}</div>
        </motion.div>

        <h3 className="text-xl font-bold text-center text-black mb-3">{title}</h3>

        <motion.p
          className="text-zinc-800 text-center flex-grow"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="w-12 h-1 bg-amber-500 mx-auto mt-4"
          animate={{
            width: isHovered ? "50%" : "3rem",
            backgroundColor: isHovered ? "#d97706" : "#f59e0b",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const services = [
    {
      icon: <HardHat className="w-full h-full" />,
      title: "Pre-construction Consulting",
      description:
        "We provide clients with estimates, feasibility studies, and risk analysis to ensure smooth project execution.",
    },
    {
      icon: <Building2 className="w-full h-full" />,
      title: "Design-Build Services",
      description:
        "Our team collaborates with architects and designers to create functional and aesthetically pleasing structures.",
    },
    {
      icon: <ClipboardCheck className="w-full h-full" />,
      title: "General Contracting",
      description:
        "We manage all aspects of construction, from obtaining permits to hiring subcontractors, ensuring projects are completed on time and within budget.",
    },
    {
      icon: <Construction className="w-full h-full" />,
      title: "Construction Management",
      description: "We oversee the planning, coordination, and control of a project from beginning to completion.",
    },
    {
      icon: <Globe className="w-full h-full" />,
      title: "Sustainable Construction",
      description: "We prioritize eco-friendly practices and materials.",
    },
    {
      icon: <Home className="w-full h-full" />,
      title: "Residential Construction",
      description: "We build various types of homes ranging from single-family homes to high-rise apartment buildings.",
    },
    {
      icon: <Store className="w-full h-full" />,
      title: "Commercial Construction",
      description: "We construct office buildings, warehouses, retail stores, and more.",
    },
    {
      icon: <Bridge className="w-full h-full" />,
      title: "Infrastructure Construction",
      description:
        "We are equipped to handle large-scale public works projects such as bridges, highways, and airports.",
    },
    {
      icon: <Wrench className="w-full h-full" />,
      title: "Post-Construction Services",
      description:
        "After project completion, we provide maintenance and repair services to ensure the longevity of our constructions.",
    },
    {
      icon: <PaintBucket className="w-full h-full" />,
      title: "Renovation and Remodeling",
      description: "We offer renovation services to update and enhance existing structures.",
    },
  ]

  return (
    <section id="services"
      className="py-16 md:py-24 relative bg-cover bg-center max-w-screen-2xl mx-auto"
      style={{
        backgroundImage: `url('/images/service.jpg')`, // Replace with your image path
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gulfBlue mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-orange mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}