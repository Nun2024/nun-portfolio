"use client";

import { Experience } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isRight = index % 2 === 0; // First card (index 0) on right, second on left

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center min-h-[300px]"
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? 50 : -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50 -translate-x-1/2 hidden md:block" />

      {/* Content */}
      <div className={`w-full md:w-5/12 ${isRight ? 'md:pl-12 md:ml-auto md:text-left' : 'md:pr-12 md:mr-auto md:text-right'}`}>
        <motion.div
          className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: experience.type === "work" 
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))"
                : "linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3))",
              filter: "blur(15px)",
              zIndex: -1,
            }}
          />

          {/* Type Badge */}
          <motion.div
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
              experience.type === "work"
                ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                : "bg-green-500/10 text-green-300 border border-green-500/20"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
          >
            {experience.type === "work" ? (
              <>
                <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Work Experience
              </>
            ) : (
              <>
                <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education
              </>
            )}
          </motion.div>

          {/* Title & Company */}
          <motion.h3
            className="text-xl font-semibold text-white mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          >
            {experience.title}
          </motion.h3>

          <motion.div
            className="text-blue-400 font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
          >
            {experience.company}
          </motion.div>

          {/* Location & Period */}
          <motion.div
            className={`flex flex-wrap gap-3 text-sm text-zinc-400 mb-4 ${!isRight ? 'md:justify-end' : ''}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {experience.location}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {experience.period}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-zinc-400 text-sm mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
          >
            {experience.description}
          </motion.p>

          {/* Achievements */}
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
          >
            {experience.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                className={`flex items-start text-sm text-zinc-400 ${!isRight ? 'md:flex-row-reverse md:text-right' : ''}`}
                initial={{ opacity: 0, x: isRight ? 10 : -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? 10 : -10 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.8 + i * 0.05 }}
              >
                <svg className={`w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0 ${isRight ? 'mr-2' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {achievement}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-zinc-900 z-10 hidden md:block"
        style={{
          background: experience.type === "work"
            ? "linear-gradient(135deg, #3b82f6, #9333ea)"
            : "linear-gradient(135deg, #22c55e, #3b82f6)",
        }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
        whileHover={{ scale: 1.5 }}
      />
    </motion.div>
  );
}
