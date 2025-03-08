"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Truck, Cog, Building, Package, ShoppingCart } from "lucide-react"

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
      icon: <Users className="w-full h-full" />,
      title: "Manpower Supply",
      description:
        "We provide skilled and qualified personnel for construction projects, ensuring you have the right workforce for every job requirement.",
    },
    {
      icon: <Truck className="w-full h-full" />,
      title: "Equipment Supply",
      description:
        "Our extensive fleet of construction equipment is available for rent, from heavy machinery to specialized tools for all your project needs.",
    },
    {
      icon: <Cog className="w-full h-full" />,
      title: "Fabrication & Mechanical Job",
      description:
        "We offer comprehensive fabrication and mechanical services, including custom metal fabrication, installation, and maintenance solutions.",
    },
    {
      icon: <Building className="w-full h-full" />,
      title: "Civil Job",
      description:
        "Our civil engineering expertise covers infrastructure development, structural work, and site preparation with precision and quality.",
    },
    {
      icon: <Package className="w-full h-full" />,
      title: "Material Supply",
      description:
        "We source and supply high-quality construction materials, ensuring timely delivery and competitive pricing for your projects.",
    },
    {
      icon: <ShoppingCart className="w-full h-full" />,
      title: "General Trading Services",
      description:
        "Beyond construction, we offer diverse trading services to meet various business needs with reliability and professional expertise.",
    },
  ]

  return (
    <section
      id="services"
      className="py-16 md:py-24 relative bg-cover bg-center max-w-screen-2xl mx-auto"
      style={{
        backgroundImage: `url('/images/service.jpg')`,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

