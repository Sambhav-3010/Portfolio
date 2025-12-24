import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Footer />
    </main>
  );
}
