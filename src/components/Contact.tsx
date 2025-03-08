"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock, ExternalLink, Copy, Check } from "lucide-react"
import Image from "next/image"

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  items: string[]
  delay?: number
  copyable?: boolean
}

const ContactCard = ({ icon, title, items, delay = 0, copyable = false }: ContactCardProps) => {
  const [copied, setCopied] = useState<number | null>(null)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
        <div className="space-y-3 w-full">
          <h3 className="text-lg font-bold text-gulfBlue">{title}</h3>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center justify-between text-zinc-600">
                <span className="break-all">{item}</span>
                {copyable && (
                  <motion.button
                    className="ml-2 p-1 text-zinc-400 hover:text-amber-500 focus:outline-none"
                    onClick={() => handleCopy(item, index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {copied === index ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function ContactSection() {
  const mapRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(mapRef, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-50 relative overflow-hidden max-w-screen-2xl mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gulfBlue mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-zinc-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {`We're here to answer any questions you may have about our construction services. Feel free to reach out to
            us using any of the contact methods below.`}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Numbers */}
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Phone Numbers"
              items={["0594353453", "0547895319", "0575886352", "0510216839"]}
              copyable
            />

            {/* Email */}
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email Address"
              items={["sales@mmaksa.com"]}
              delay={0.1}
              copyable
            />

            {/* Address */}
            <ContactCard
              icon={<MapPin className="w-6 h-6" />}
              title="Office Address"
              items={["Al Jubail Business Tower-3", "King Faisal West St.", "Jubail", "Kingdom of Saudi Arabia"]}
              delay={0.2}
            />

            {/* Business Hours */}
            <ContactCard
              icon={<Clock className="w-6 h-6" />}
              title="Business Hours"
              items={["Saturday - Thursday: 7:00 AM - 1:00 PM,", "1:30 PM - 5:00 PM", "Friday: Closed"]}
              delay={0.3}
            />
          </div>

          {/* Map and CTA */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map */}
            <motion.div
              ref={mapRef}
              className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.676635350654!2d49.6432222!3d27.0148056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAwJzUzLjMiTiA0OcKwMzgnMzUuNiJF!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 z-10"
              ></iframe>

              {/* Map Overlay */}
              <div className="absolute top-4 right-4 z-20">
                <motion.a
                  href="https://www.google.com/maps/place/27%C2%B000'53.3%22N+49%C2%B038'35.6%22E/@27.0158392,49.6442725,1513m/data=!3m1!1e3!4m4!3m3!8m2!3d27.0148056!4d49.6432222?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium text-gulfBlue hover:bg-amber-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Google Maps
                </motion.a>
              </div>

              {/* Company Marker */}
              <div className="absolute bottom-3 left-3 z-20 bg-white p-3 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-md flex items-center justify-center shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="Company Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gulfBlue text-sm">Makki Al-Abadi Est</h4>
                    <p className="text-xs text-zinc-600">Construction Headquarters</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              className="bg-gulfBlue rounded-xl shadow-lg p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Need a Consultation?</h3>
                  <p className="text-zinc-300 mb-4">
                    Our team of experts is ready to provide you with a free consultation for your construction project.
                    Let us help you bring your vision to life.
                  </p>
                  <motion.a
                    href="tel:0547895319"
                    className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </motion.a>
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/consult.jpg"
                      alt="Construction Consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}