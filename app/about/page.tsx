import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { profile } from "@/data/about"

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Back Navigation */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="relative group shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                        <Image
                            src={profile.avatarUrl}
                            alt={profile.name}
                            width={200}
                            height={200}
                            priority
                            className="relative rounded-full w-48 h-48 object-cover border-4 border-primary/30"
                        />
                    </div>
                    <div className="text-center md:text-left space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">{profile.name}</h1>
                        <p className="text-xl text-primary font-semibold">{profile.role}</p>
                        <div className="flex items-center justify-center md:justify-start gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full w-fit">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-green-500 text-sm font-medium">{profile.availability}</span>
                        </div>
                    </div>
                </div>

                {/* About Content */}
                <div className="space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">About Me</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {profile.bio}
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">What I Do</h2>
                        <ul className="space-y-3">
                            {profile.bioPoints.map((point, i) => (
                                <li key={i} className="text-muted-foreground text-lg leading-relaxed flex gap-3">
                                    <span className="text-primary mt-1 shrink-0">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">Philosophy</h2>
                        <p className="text-lg text-green-500 italic">{profile.tagline}</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
