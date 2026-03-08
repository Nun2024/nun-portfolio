"use client";

import { Container } from "@/components/ui/Container";
import { skills } from "@/lib/data";
import { SkillCategory } from "./SkillCategory";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="skills" 
      className="py-24 bg-zinc-950"
      aria-labelledby="skills-heading"
    >
      <Container>
        <div className="space-y-12">
          {/* Section Header */}
          <div ref={ref} className="text-center space-y-4">
            <motion.h2 
              id="skills-heading"
              className="text-4xl sm:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Technical Skills
            </motion.h2>
            <motion.p 
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A curated set of technologies I use to build modern, performant web applications.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => (
              <SkillCategory 
                key={skillCategory.category} 
                category={skillCategory.category}
                skills={skillCategory.skills}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
