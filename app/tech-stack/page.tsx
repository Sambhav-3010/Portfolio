import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  SiAmazonwebservices,
  SiApachekafka,
  SiBitcoin,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiEthereum,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMocha,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRailway,
  SiReact,
  SiRedis,
  SiRender,
  SiSolidity,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si"
import { FaHardHat, FaJava } from "react-icons/fa"
import { TbBrandVscode } from "react-icons/tb"

const techCategories = [
  {
    title: "Languages",
    items: [
      { icon: <SiHtml5 className="w-8 h-8" style={{ color: "#E34F26" }} />, name: "HTML5" },
      { icon: <SiCss3 className="w-8 h-8" style={{ color: "#1572B6" }} />, name: "CSS3" },
      { icon: <SiJavascript className="w-8 h-8" style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
      { icon: <SiTypescript className="w-8 h-8" style={{ color: "#3178C6" }} />, name: "TypeScript" },
      { icon: <FaJava className="w-8 h-8" style={{ color: "#007396" }} />, name: "Java" },
    ],
  },
  {
    title: "Blockchain & Web3",
    items: [
      { icon: <SiEthereum className="w-8 h-8" style={{ color: "#3C3C3D" }} />, name: "Ethereum" },
      { icon: <FaHardHat className="w-8 h-8" style={{ color: "#FFF100" }} />, name: "Hardhat" },
      { icon: <div className="text-2xl font-bold font-mono" style={{ color: "#A30701" }}>Chai</div>, name: "Chai" },
      { icon: <SiMocha className="w-8 h-8" style={{ color: "#8D6748" }} />, name: "Mocha" },
      { icon: <SiSolidity className="w-8 h-8" style={{ color: "#363636" }} />, name: "Solidity" },
    ],
  },
  {
    title: "Cloud & Services",
    items: [
      { icon: <SiAmazonwebservices className="w-8 h-8" style={{ color: "#FF9900" }} />, name: "AWS" },
      { icon: <SiVercel className="w-8 h-8" />, name: "Vercel" },
      { icon: <SiRender className="w-8 h-8" style={{ color: "#46E3B7" }} />, name: "Render" },
      { icon: <SiRailway className="w-8 h-8" />, name: "Railway" },
      { icon: <SiFirebase className="w-8 h-8" style={{ color: "#FFCA28" }} />, name: "Firebase" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: <SiMongodb className="w-8 h-8" style={{ color: "#47A248" }} />, name: "MongoDB" },
      { icon: <SiPostgresql className="w-8 h-8" style={{ color: "#4169E1" }} />, name: "PostgreSQL" },
      { icon: <SiPrisma className="w-8 h-8" style={{ color: "#2D3748" }} />, name: "Prisma" },
      { icon: <SiSupabase className="w-8 h-8" style={{ color: "#3FCF8E" }} />, name: "Supabase" },
      { icon: <SiRedis className="w-8 h-8" style={{ color: "#DC382D" }} />, name: "Redis" },
    ],
  },
  {
    title: "Frontend & Backend",
    items: [
      { icon: <SiReact className="w-8 h-8" style={{ color: "#61DAFB" }} />, name: "React" },
      { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js" },
      { icon: <SiTailwindcss className="w-8 h-8" style={{ color: "#06B6D4" }} />, name: "Tailwind CSS" },
      { icon: <SiBootstrap className="w-8 h-8" style={{ color: "#7952B3" }} />, name: "Bootstrap" },
      { icon: <SiNodedotjs className="w-8 h-8" style={{ color: "#339933" }} />, name: "Node.js" },
      { icon: <SiExpress className="w-8 h-8" />, name: "Express" },
      { icon: <SiGraphql className="w-8 h-8" style={{ color: "#E10098" }} />, name: "GraphQL" },
      { icon: <SiApachekafka className="w-8 h-8" />, name: "Apache Kafka" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { icon: <SiGit className="w-8 h-8" style={{ color: "#F05032" }} />, name: "Git" },
      { icon: <SiGithub className="w-8 h-8" />, name: "GitHub" },
      { icon: <SiDocker className="w-8 h-8" style={{ color: "#2496ED" }} />, name: "Docker" },
      { icon: <TbBrandVscode className="w-8 h-8" style={{ color: "#007ACC" }} />, name: "VS Code" },
      { icon: <SiNginx className="w-8 h-8" style={{ color: "#009639" }} />, name: "Nginx" },
      { icon: <SiKubernetes className="w-8 h-8" style={{ color: "#326CE5" }} />, name: "Kubernetes" }
    ],
  },
]

export default function TechStackPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Toolkit</p>
          <h1 className="section-title text-[clamp(1.8rem,4vw,3.4rem)]!">Tech Stack</h1>
          <p className="text-muted-foreground text-lg mt-3">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category) => (
            <article key={category.title} className="cream-card p-6 sm:p-7">
              <h2 className="text-2xl font-extrabold mb-5">{category.title}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.items.map((item) => (
                  <div
                    key={`${category.title}-${item.name}`}
                    className="rounded-xl border border-border bg-accent/35 p-3 flex flex-col items-center gap-2 hover:-translate-y-0.5 transition-transform"
                  >
                    <div>{item.icon}</div>
                    <span className="text-xs text-center text-muted-foreground font-semibold">{item.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
