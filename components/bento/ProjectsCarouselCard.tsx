"use client"

import Link from "next/link"
import { Code2, ArrowRight } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ProjectStatusBadge } from "@/components/ProjectStatusBadge"

export function ProjectsCarouselCard() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const currentProject = projects[currentIndex]

    const handleCardClick = () => {
        router.push("/projects")
    }

    return (
        <div
            onClick={handleCardClick}
            className="h-full min-h-[380px] md:min-h-[300px] p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col cursor-pointer group"
        >
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="text-base font-semibold text-muted-foreground">Projects</span>
                </div>
                <span className="flex items-center gap-1 text-sm text-primary group-hover:text-primary/80 transition-colors font-medium">
                    View All <ArrowRight className="w-4 h-4" />
                </span>
            </div>

            <div className="relative flex-1 rounded-xl overflow-hidden bg-card border border-border/50">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={currentProject.images[0]}
                            alt={currentProject.title}
                            fill
                            className="object-cover object-top"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/80 to-transparent z-10" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">
                                {currentProject.title}
                                {(currentProject.status === 'warning' || currentProject.status === 'issues' || currentProject.status === 'stable' || currentProject.status === 'update') && (
                                    <span className="ml-2 inline-flex align-middle">
                                        <ProjectStatusBadge
                                            status={currentProject.status}
                                            statusMessage={currentProject.statusMessage}
                                            size="sm"
                                            showLabel={false}
                                        />
                                    </span>
                                )}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground line-clamp-1 md:line-clamp-2 mb-2 md:mb-3">
                                {currentProject.description}
                            </p>
                            <div className="flex flex-wrap gap-1 md:gap-1.5">
                                {currentProject.tags.slice(0, 4).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-1.5 md:px-2 py-0.5 text-[10px] md:text-xs font-medium rounded bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation()
                            setCurrentIndex(index)
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-primary w-6'
                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
