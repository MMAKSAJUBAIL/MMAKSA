"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useInView,
} from "framer-motion"; 
import { Users, Leaf, Lightbulb, Trophy } from "lucide-react";
import Image from "next/image";

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
}

const Counter = ({ end, duration = 2, label }: CounterProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!nodeRef.current || !isInView) return;

    const node = nodeRef.current;
    const start = 0;
    const increment = end / (duration * 60);
    let current = start;

    const updateCounter = () => {
      if (current < end) {
        current += increment;
        if (current > end) current = end;
        node.textContent = Math.floor(current).toString();
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [end, duration, isInView]);

  return (
    <div className="text-center">
      <div
        ref={nodeRef}
        className="text-4xl md:text-5xl font-bold text-amber-500 mb-2"
      >
        0
      </div>
      <div className="text-sm text-zinc-600">{label}</div>
    </div>
  );
};

interface WhyUsCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const WhyUsCard = ({ icon: Icon, title, description }: WhyUsCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <div className="absolute inset-0 transform rotate-45">
          <div className="absolute inset-0 border-t-2 border-r-2 border-gulfBlue"></div>
        </div>
      </div>

      <div className="relative">
        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white mb-4">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-gulfBlue mb-3">{title}</h3>
        <p className="text-zinc-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default function WhyUsSection() {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      className="py-16 md:py-24 bg-zinc-50 overflow-hidden"
      ref={containerRef}
    >
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
            Why Choose Us?
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
            With over a decade of experience, we bring expertise, innovation,
            and sustainability to every project.
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Counter end={11} label="Years Experience" />
          <Counter end={20} label="Projects Completed" />
          <Counter end={50} label="Expert Team Members" />
          <Counter end={98} label="Client Satisfaction %" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Cards */}
          <div className="grid gap-6">
            <WhyUsCard
              icon={Trophy}
              title="Experience and Expertise"
              description="With over 11 years of experience in the construction industry, Makki Al-Abadi General Construction Establishment has a proven track record of delivering high-quality projects across various sectors."
            />
            <WhyUsCard
              icon={Users}
              title="Skilled Team"
              description="The company boasts a team of experienced professionals who bring their expertise and dedication to every project."
            />
            <WhyUsCard
              icon={Leaf}
              title="Sustainability"
              description="The company is committed to sustainable construction practices, incorporating eco-friendly materials and energy-efficient designs in its projects."
            />
            <WhyUsCard
              icon={Lightbulb}
              title="Innovative Approach"
              description="Makki Al-Abadi General Construction Establishment leverages the latest technology and construction methods to ensure efficient and effective project execution."
            />
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[800px] hidden md:block">
            <div className="absolute inset-0">
              <Image
                src="/images/whyus.jpg"
                alt="Construction workers"
                fill
                className="object-cover rounded-xl"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}