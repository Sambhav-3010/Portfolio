import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiFirebase, SiGit, SiGithub, SiExpress, SiPrisma, SiDocker, SiPostgresql, SiGraphql, SiVercel, SiBootstrap, SiRender, SiRailway, SiSupabase } from "react-icons/si"
import { FaJava } from "react-icons/fa"

const techCategories = [
    {
        title: "Languages",
        items: [
            { icon: <SiJavascript className="w-8 h-8" />, name: "JavaScript", color: "text-yellow-500" },
            { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", color: "text-blue-500" },
            { icon: <FaJava className="w-8 h-8" />, name: "Java", color: "text-red-500" },
        ]
    },
    {
        title: "Databases",
        items: [
            { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB", color: "text-green-600" },
            { icon: <SiPostgresql className="w-8 h-8" />, name: "PostgreSQL", color: "text-blue-500" },
            { icon: <SiPrisma className="w-8 h-8" />, name: "Prisma", color: "text-foreground" },
            { icon: <SiSupabase className="w-8 h-8" />, name: "Supabase", color: "text-foreground" },
        ]
    },
    {
        title: "Frontend & Backend",
        items: [
            { icon: <SiReact className="w-8 h-8" />, name: "React", color: "text-cyan-400" },
            { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", color: "text-foreground" },
            { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind CSS", color: "text-cyan-500" },
            { icon: <SiBootstrap className="w-8 h-8" />, name: "Bootstrap", color: "text-cyan-500" },
            { icon: <SiNodedotjs className="w-8 h-8" />, name: "Node.js", color: "text-green-500" },
            { icon: <SiExpress className="w-8 h-8" />, name: "Express", color: "text-foreground" },
            { icon: <SiGraphql className="w-8 h-8" />, name: "GraphQL", color: "text-pink-500" },
        ]
    },
    {
        title: "DevOps & Tools",
        items: [
            { icon: <SiGit className="w-8 h-8" />, name: "Git", color: "text-orange-500" },
            { icon: <SiGithub className="w-8 h-8" />, name: "GitHub", color: "text-foreground" },
            { icon: <SiDocker className="w-8 h-8" />, name: "Docker", color: "text-blue-500" },
            { icon: <SiVercel className="w-8 h-8" />, name: "Vercel", color: "text-foreground" },
            { icon: <SiRender className="w-8 h-8" />, name: "Render", color: "text-foreground" },
            { icon: <SiRailway className="w-8 h-8" />, name: "Railway", color: "text-foreground" },
        ]
    },
]

export default function TechStackPage() {
    return (
        <div className="min-h-screen pt-10 pb-10 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                            Tech Stack
                        </h1>
                    </div>
                    <p className="text-muted-foreground text-lg">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {techCategories.map((category, catIndex) => (
                        <div
                            key={catIndex}
                            className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">{category.title}</h3>
                            <div className="grid grid-cols-3 gap-2 md:gap-4">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className={`group flex flex-col items-center gap-2 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 ${item.color}`}
                                    >
                                        <div className="group-hover:rotate-12 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
