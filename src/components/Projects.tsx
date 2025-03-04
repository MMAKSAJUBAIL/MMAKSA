"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronDown } from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  description: string
  details?: {
    client?: string
    location?: string
    year?: string
    value?: string
  }
}

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: "luxury-residential",
      title: "Luxury Residential Complex",
      category: "Residential",
      description:
        "A high-end residential complex featuring state-of-the-art amenities, sustainable design elements, and a focus on community living. The project was completed on time and within budget, earning praise for its innovative design and quality of construction.",
      details: {
        client: "LSTK Developments",
        location: "Greenfield Zone",
        year: "2022",
        value: "$28.5M",
      },
    },
    {
      id: "commercial-office",
      title: "Commercial Office Building",
      category: "Commercial",
      description:
        "A multi-story office building in the city center, designed with a focus on energy efficiency and employee comfort. The building features smart technology for lighting and temperature control, contributing to a significant reduction in energy costs.",
      details: {
        client: "Metro Business Group",
        location: "City Center",
        year: "2021",
        value: "$45M",
      },
    },
    {
      id: "city-bridge",
      title: "Infrastructure Project - City Bridge",
      category: "Infrastructure",
      description:
        "A large-scale infrastructure project involving the construction of a major city bridge. The project was recognized for its use of advanced construction techniques to ensure the longevity and safety of the bridge.",
      details: {
        client: "City Municipality",
        location: "River Crossing",
        year: "2020",
        value: "$120M",
      },
    },
    {
      id: "retail-complex",
      title: "Retail Complex",
      category: "Commercial",
      description:
        "A modern retail complex housing a variety of stores, restaurants, and entertainment options. The project was commended for its strategic location, attractive design, and the positive impact it had on local businesses.",
      details: {
        client: "Urban Retail Developers",
        location: "East District",
        year: "2023",
        value: "$32M",
      },
    },
    {
      id: "school-building",
      title: "School Building",
      category: "Institutional",
      description:
        "A school building project that involved constructing classrooms, laboratories, and sports facilities. The project was lauded for its focus on creating a conducive learning environment for students.",
      details: {
        client: "Education Board",
        location: "North County",
        year: "2022",
        value: "$18.5M",
      },
    },
    {
      id: "hospital-construction",
      title: "Hospital Construction",
      category: "Healthcare",
      description:
        "A state-of-the-art hospital equipped with the latest medical facilities. The project was recognized for its patient-centric design and adherence to healthcare construction regulations.",
      details: {
        client: "HealthCare Partners",
        location: "Medical District",
        year: "2021",
        value: "$85M",
      },
    },
  ]

  const categories = Array.from(new Set(projects.map((project) => project.category)))

  const filteredProjects = activeCategory ? projects.filter((project) => project.category === activeCategory) : projects

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  const filterByCategory = (category: string | null) => {
    setActiveCategory(category)
    setExpandedProject(null)
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-zinc-50 max-w-screen-2xl mx-auto">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gulfBlue mb-4">Projects</h2>
          <motion.div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across various sectors, showcasing our commitment to
            excellence and innovation in construction.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null ? "bg-amber-500 text-white" : "bg-gray-200 text-zinc-700 hover:bg-zinc-300"
            }`}
            onClick={() => filterByCategory(null)}
          >
            All Projects
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-amber-500 text-white" : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
              }`}
              onClick={() => filterByCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Ladder/Staggered Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 transform -translate-x-1/2"></div>

          <div className="space-y-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-amber-500 transform -translate-x-1/2"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>

                  {/* Project Card */}
                  <motion.div
                    className={`ml-10 md:ml-0 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer ${
                      expandedProject === project.id ? "ring-2 ring-amber-500" : ""
                    }`}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    onClick={() => toggleProject(project.id)}
                    layout
                  >
                    <div
                      className={`flex justify-between items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row"}`}
                    >
                      <div className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : "md:text-left"}`}>
                        <motion.h3 className="text-xl font-bold text-gulfBlue" layout="position">
                          {project.title}
                        </motion.h3>
                        <motion.div
                          className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                          layout="position"
                        >
                          {project.category}
                        </motion.div>
                      </div>
                      <motion.div
                        className="text-amber-500"
                        animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                      >
                        {expandedProject === project.id ? <ChevronDown /> : <ChevronRight />}
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            className={`text-zinc-600 mt-4 mb-6 ${index % 2 === 0 ? "md:text-left" : "md:text-left"}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {project.description}
                          </motion.p>

                          {project.details && (
                            <motion.div
                              className={`grid grid-cols-2 gap-y-3 text-sm border-t border-zinc-100 pt-4 ${
                                index % 2 === 0 ? "md:text-left" : "md:text-left"
                              }`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {project.details.client && (
                                <>
                                  <div className="font-semibold text-gulfBlue">Client</div>
                                  <div className="text-zinc-600">{project.details.client}</div>
                                </>
                              )}
                              {project.details.location && (
                                <>
                                  <div className="font-semibold text-gulfBlue">Location</div>
                                  <div className="text-zinc-600">{project.details.location}</div>
                                </>
                              )}
                              {project.details.year && (
                                <>
                                  <div className="font-semibold text-gulfBlue">Year</div>
                                  <div className="text-zinc-600">{project.details.year}</div>
                                </>
                              )}
                              {project.details.value && (
                                <>
                                  <div className="font-semibold text-gulfBlue">Project Value</div>
                                  <div className="text-zinc-600">{project.details.value}</div>
                                </>
                              )}
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

