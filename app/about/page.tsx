import {
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { profile } from "@/data/about"

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-4 cream-card p-6 sm:p-8 h-fit lg:sticky lg:top-6">
            <div className="text-center">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                width={170}
                height={170}
                className="w-40 h-40 rounded-full object-cover mx-auto border-8 border-accent"
                priority
              />
              <h1 className="text-2xl font-extrabold mt-4">{profile.name}</h1>
              <p className="text-primary font-semibold mt-1">{profile.role}</p>

              <p className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-accent border border-primary/25 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                {profile.location}
              </p>

              <div className="grid grid-cols-2 gap-2 mt-5">
                <a href={`mailto:${profile.email}`} className="button-solid px-3 py-2 text-sm inline-flex items-center justify-center gap-1.5">
                  <Mail className="w-4 h-4" /> Email
                </a>
                <a href={`tel:${profile.phone}`} className="button-outline px-3 py-2 text-sm inline-flex items-center justify-center gap-1.5 font-semibold">
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>

              <div className="flex justify-center gap-2 mt-5">
                {profile.socials.github && (
                  <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {profile.socials.linkedin && (
                  <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5">
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-6">
            <article className="cream-card p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">About Me</p>
              <h2 className="section-title !text-[clamp(2rem,4vw,3.2rem)] mb-4">Who I am</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{profile.bio}</p>
            </article>

            <div className="grid md:grid-cols-2 gap-6">
              <article className="cream-card p-6 sm:p-7">
                <h3 className="text-xl font-extrabold mb-4">What I do</h3>
                <ul className="space-y-3">
                  {profile.bioPoints.map((point, index) => (
                    <li key={index} className="text-muted-foreground flex gap-2.5 leading-relaxed">
                      <span className="text-secondary font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="cream-card p-6 sm:p-7">
                <h3 className="inline-flex items-center gap-2 text-xl font-extrabold mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h3>
                <p className="font-bold">{profile.education.college}</p>
                <p className="text-muted-foreground mt-1">{profile.education.degree}</p>
                <p className="text-muted-foreground text-sm mt-1">{profile.education.duration}</p>
                <p className="mt-2 text-primary font-semibold">{profile.education.grade}</p>
              </article>
            </div>

            <article className="rounded-[1.3rem] border border-secondary/45 bg-secondary/15 p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary-foreground/80 font-semibold mb-2">Approach</p>
              <p className="text-2xl sm:text-3xl font-extrabold leading-tight">&quot;{profile.tagline}&quot;</p>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}
