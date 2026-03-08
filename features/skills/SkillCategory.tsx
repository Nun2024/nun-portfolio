"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Skill } from "@/types";

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  index: number;
}

export function SkillCategory({ category, skills, index }: SkillCategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getCategoryColor = (category: string) => {
    if (category.includes("Frontend")) return { from: "from-blue-500", to: "to-cyan-500", text: "text-blue-400" };
    if (category.includes("Learning")) return { from: "from-purple-500", to: "to-pink-500", text: "text-purple-400" };
    return { from: "from-green-500", to: "to-emerald-500", text: "text-green-400" };
  };

  const colors = getCategoryColor(category);

  return (
    <motion.div 
      ref={ref}
      className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
      role="region"
      aria-labelledby={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(135deg, ${colors.from.replace('from-', 'rgba(')}, ${colors.to.replace('to-', 'rgba(')})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
      />

      {/* Category Header */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
      >
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.from} ${colors.to} flex items-center justify-center`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {category.includes("Frontend") ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            ) : category.includes("Learning") ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            )}
          </svg>
        </div>
        <h3 
          id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-xl font-semibold text-white"
        >
          {category}
        </h3>
      </motion.div>

      {/* Skills List */}
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: index * 0.15 + 0.3 + skillIndex * 0.05 }}
          >
            {/* Skill Name & Level */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
              <span className={`text-xs font-semibold ${colors.text}`}>{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colors.from} ${colors.to} rounded-full`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.15 + 0.5 + skillIndex * 0.1, ease: "easeOut" }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={isInView ? { x: "200%" } : { x: "-100%" }}
                transition={{ duration: 1.5, delay: index * 0.15 + 0.5 + skillIndex * 0.1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
