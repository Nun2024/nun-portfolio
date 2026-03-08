import { Hero } from "@/features/hero";
import { ProjectGrid } from "@/features/projects";
import { Experience } from "@/features/experience";
import { Skills } from "@/features/skills";
import { ContactForm } from "@/features/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Hero />
      <Experience />
      <ProjectGrid />
      <Skills />
      <ContactForm />
    </main>
  );
}
