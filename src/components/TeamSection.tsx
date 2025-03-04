"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Users, ChevronRight } from "lucide-react"

interface TeamMember {
  id: string
  number: string
  title: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    number: "01",
    title: "CEO (Chief Executive Officer)",
    description:
      "The CEO is responsible for making major corporate decisions and managing the overall operations of the company.",
  },
  {
    id: "coo",
    number: "02",
    title: "COO (Chief Operating Officer)",
    description: "The COO oversees the company's day-to-day administrative and operational functions.",
  },
  {
    id: "cfo",
    number: "03",
    title: "CFO (Chief Financial Officer)",
    description:
      "The CFO manages the company's finances, including financial planning, management of financial risks, and financial reporting.",
  },
  {
    id: "project-managers",
    number: "04",
    title: "Project Managers",
    description:
      "Project Managers plan and oversee projects to ensure they are completed in a timely fashion and within budget.",
  },
  {
    id: "construction-managers",
    number: "05",
    title: "Construction Managers",
    description:
      "Construction Managers coordinate and supervise a wide variety of projects, including the building of all types of residential, commercial, and industrial structures.",
  },
  {
    id: "site-engineers",
    number: "06",
    title: "Site Engineers",
    description:
      "Site Engineers manage parts of the construction projects, oversee building work, and supervise contracted staff.",
  },
  {
    id: "safety-officers",
    number: "07",
    title: "Safety Officers",
    description:
      "Safety Officers develop and implement health and safety programs to minimize or eliminate workplace injuries.",
  },
  {
    id: "estimators",
    number: "08",
    title: "Estimators",
    description:
      "Estimators calculate the total costs associated with a construction project or provide cost estimates for different aspects of the project.",
  },
]

const TeamMemberItem = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Diagonal Line */}
      <div className="absolute -left-4 top-1/2 w-8 h-px bg-orange origin-left -rotate-45 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      <div className="pl-8 pr-4 py-6 bg-white hover:bg-zinc-50 transition-colors duration-300 rounded-lg relative overflow-hidden">
        {/* Number */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-8xl font-bold text-zinc-100 pointer-events-none">
          {member.number}
        </div>

        <div className="relative">
          {/* Title */}
          <motion.div
            className="flex items-center gap-2 mb-2"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-gulfBlue">{member.title}</h3>
            <ChevronRight className="w-5 h-5 text-orange opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-zinc-600 pl-0 group-hover:pl-4 transition-all duration-300"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {member.description}
          </motion.p>

          {/* Hover Line */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-orange"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="community" ref={containerRef} className="py-16 md:py-24 relative overflow-hidden max-w-screen-2xl mx-auto">
      {/* Background Elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: backgroundY }}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 transform origin-top" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-amber-500/5 skew-x-12 transform origin-bottom" />
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gulfBlue">Our Team</h2>
          </motion.div>

          <motion.div
            className="w-24 h-1 bg-orange mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-zinc-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet our experienced team of professionals dedicated to delivering excellence in construction
          </motion.p>
        </div>

        {/* Team Members List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {teamMembers.map((member, index) => (
            <TeamMemberItem key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/4 w-24 h-24 bg-amber-500/10 rounded-full blur-xl" />
        <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-xl" />
      </div>
    </section>
  )
}

