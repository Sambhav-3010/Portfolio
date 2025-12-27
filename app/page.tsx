import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { TechStack } from "../components/TechStack";
import { Contributions } from "../components/Contributions";
import { Footer } from "../components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Contributions />
      <Footer />
    </main>
  );
}
