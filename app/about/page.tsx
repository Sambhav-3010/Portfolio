import { ArrowLeft, Github, Linkedin, Twitter, Mail, Phone, MapPin, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { profile } from "@/data/about"

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-10 px-6">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 sticky top-24">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative group mb-6">
                                    <div className="absolute -inset-2 bg-linear-to-r from-primary to-primary/50 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
                                    <Image
                                        src={profile.avatarUrl}
                                        alt={profile.name}
                                        width={180}
                                        height={180}
                                        priority
                                        className="relative rounded-full w-44 h-44 object-cover border-4 border-primary/30"
                                    />
                                </div>

                                <h1 className="text-2xl font-bold text-foreground mb-1">{profile.name}</h1>
                                <p className="text-primary font-semibold mb-4">{profile.role}</p>

                                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-green-500 text-sm font-medium">{profile.availability}</span>
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                                    <MapPin className="w-4 h-4" />
                                    <span>{profile.location}</span>
                                </div>

                                <div className="flex gap-3 mb-6">
                                    {profile.socials.github && (
                                        <a
                                            href={profile.socials.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:scale-110"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {profile.socials.linkedin && (
                                        <a
                                            href={profile.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:scale-110"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {profile.socials.twitter && (
                                        <a
                                            href={profile.socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:scale-110"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>

                                <div className="w-full space-y-2">
                                    <a
                                        href={`mailto:${profile.email}`}
                                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Email Me
                                    </a>
                                    <a
                                        href={`tel:${profile.phone}`}
                                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-card border border-border hover:border-primary/50 text-foreground font-medium transition-all"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Call Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3 mb-10">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                                About Me
                            </h1>
                        </div>

                        <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300">
                            <h2 className="text-xl font-bold text-foreground mb-4">Who I Am</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {profile.bio}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300">
                                <h2 className="text-lg font-bold text-foreground mb-3">What I Do</h2>
                                <ul className="space-y-2">
                                    {profile.bioPoints.map((point, i) => (
                                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2 items-center">
                                            <span className="text-primary shrink-0">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-3">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                    <h2 className="text-lg font-bold text-foreground">Education</h2>
                                </div>
                                <div>
                                    <p className="text-foreground font-medium">{profile.education.college}</p>
                                    <p className="text-muted-foreground text-sm">{profile.education.degree}</p>
                                    <p className="text-muted-foreground text-sm">{profile.education.duration}</p>
                                    <p className="text-primary text-sm font-medium mt-1">{profile.education.grade}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-primary/10 border border-primary/30 transition-all duration-300">
                            <h2 className="text-lg font-bold text-foreground mb-2">Approach</h2>
                            <p className="text-lg text-primary font-medium italic">"{profile.tagline}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
