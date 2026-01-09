import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { ProjectContent } from "@/components/ProjectContent"

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return notFound()
    }

    return <ProjectContent project={project} />
}
