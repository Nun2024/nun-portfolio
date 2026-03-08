"use client";

import { Container } from "@/components/ui/Container";
import { experiences } from "@/lib/data";
import { ExperienceCard } from "./ExperienceCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="experience" 
      className="py-24 bg-zinc-900 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 opacity-50" />
      
      <Container className="relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div ref={ref} className="text-center space-y-4">
            <motion.h2 
              id="experience-heading"
              className="text-4xl sm:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              My Journey
            </motion.h2>
            <motion.p 
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From learning the fundamentals to building production applications, here's my path in frontend development.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-12 md:space-y-16">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index}
              />
            ))}

            {/* Timeline end marker */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: experiences.length * 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
