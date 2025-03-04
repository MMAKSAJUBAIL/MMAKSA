"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface RecentPost {
  id: string
  title: string
  date: string
  image: string
}

const recentPosts: RecentPost[] = [
  {
    id: "1",
    title: "Industrial Factory Building Expansion",
    date: "SEPTEMBER 21, 2020",
    image: "/images/footer1.jpg",
  },
  {
    id: "2",
    title: "The Evolution Of Construction Methods",
    date: "SEPTEMBER 21, 2020",
    image: "/images/footer2.jpg",
  },
]

export default function Footer() {
  return (
    <footer className="bg-gulfBlue text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative w-32 h-16 bg-white rounded-lg shadow-lg overflow-hidden">
                             <Image
                               src="/images/logo.png"
                               alt="Company Logo"
                               fill
                               className="object-contain p-2"
                             />
                           </div>

            <p className="text-zinc-400">
              Makki Al-Abadi have completed over 500 projects, specializing in Industrial Building.
            </p>

            {/* Consultation Box */}
            <div className="bg-kleinBlue p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Need Free Consultation?</h3>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Book Schedule
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Information</h3>
            <ul className="space-y-4">
              {[
                { text: "Community", href: "#community" },
                { text: "About Us", href: "#about" },
                { text: "Become an affiliate", href: "#contact" },
                { text: "Help Center", href: "#contact" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <motion.article key={post.id} className="flex gap-4 group cursor-pointer" whileHover={{ x: 5 }}>
                  <Image
                    src={post.image || "/images/footer1.jpg"}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium group-hover:text-amber-500 transition-colors">{post.title}</h4>
                    <p className="text-sm text-zinc-400 mt-1">{post.date}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* New Text Section */}
          <div className="bg-amber-500 p-6 rounded-lg">
  {/* Icon */}
  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-amber-500"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </div>

  {/* Heading */}
  <h3 className="text-xl font-bold mb-4">Our Promise</h3>

  {/* Text */}
  <p className="text-zinc-800 mb-6">
    We are dedicated to delivering excellence in every project, ensuring quality, sustainability, and client satisfaction.
  </p>

  {/* Call-to-Action Button */}
  <Link
    href="#VisionMission"
    className="inline-flex items-center gap-2 bg-white text-amber-500 px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
  >
    Learn More
    <ArrowRight className="w-4 h-4" />
  </Link>
</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-kleinBlue">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm text-center md:text-left">
              © Copyright 2025 Makki Al-Abadi - All Rights Reserved.
            </p>

            {/* Construction Equipment Animation */}
            <div className="flex gap-8">
              <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}>
                <Image
                  src="/images/truck.png"
                  alt="Construction Equipment"
                  width={100}
                  height={100}
                />
              </motion.div>
              <motion.div
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              >
                <Image
                  src="/images/truck.png"
                  alt="Construction Equipment"
                  width={100}
                  height={100}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}