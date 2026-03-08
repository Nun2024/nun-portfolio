"use client";

import { Container } from "@/components/ui/Container";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ProjectGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="projects" 
      className="py-24 bg-zinc-900"
      aria-labelledby="projects-heading"
    >
      <Container>
        <div className="space-y-12">
          {/* Section Header */}
          <div ref={ref} className="text-center space-y-4">
            <motion.h2 
              id="projects-heading"
              className="text-4xl sm:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A selection of projects showcasing my approach to clean code, performance optimization, and user experience.
            </motion.p>
          </div>

          {/* Project Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Portfolio projects"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
