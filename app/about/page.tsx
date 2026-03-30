import { ArrowLeft, Github, Linkedin, Twitter, Instagram, Mail, MapPin, GraduationCap, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { profile } from "@/data/about"

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <section className="cream-card p-6 sm:p-8 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="relative mx-auto w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60">
                <div className="absolute -inset-5 rounded-full border-2 border-dashed border-primary/35" />
                <Image src={profile.avatar} alt={profile.name} fill priority className="rounded-full object-cover border-8 border-accent" />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">About Me</p>
              <h1 className="section-title text-[clamp(1.6rem,3.5vw,3.3rem)]!">Design-minded developer who loves shipping.</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">{profile.bio}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                <a href={`mailto:${profile.email}`} className="button-solid inline-flex items-center gap-2 px-4 py-2 text-sm"><Mail className="w-4 h-4" />Email</a>

                {profile.socials.github && <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"><Github className="w-4 h-4" />GitHub</a>}
                {profile.socials.linkedin && <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"><Linkedin className="w-4 h-4" />LinkedIn</a>}
                {profile.socials.twitter && <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"><Twitter className="w-4 h-4" />Twitter</a>}
                {profile.socials.instagram && <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"><Instagram className="w-4 h-4" />Instagram</a>}
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-7 cream-card p-6 sm:p-8">
            <h2 className="inline-flex items-center gap-2 text-2xl font-extrabold mb-5"><Sparkles className="w-5 h-5 text-primary" />What I do</h2>
            <div className="space-y-3">
              {profile.bioPoints.map((point, index) => (
                <div key={index} className="rounded-xl border border-border bg-accent/30 px-4 py-3 text-muted-foreground leading-relaxed">
                  {point}
                </div>
              ))}
            </div>
          </section>

          <section className="lg:col-span-5 space-y-6">
            <article className="cream-card p-6 sm:p-8">
              <h3 className="inline items-center gap-2 text-2xl font-extrabold mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />Education
              </h3>
              <p className="font-bold text-xl">{profile.education.college}</p>
              <p className="text-muted-foreground mt-1">{profile.education.degree}</p>
              <p className="text-muted-foreground text-sm mt-1">{profile.education.duration}</p>
              <p className="mt-3 text-primary font-semibold">{profile.education.grade}</p>
            </article>

            <article className="rounded-[1.3rem] border border-secondary/45 bg-secondary/15 p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary-foreground/80 font-semibold mb-2">Approach</p>
              <p className="text-2xl sm:text-3xl font-extrabold leading-tight">&quot;{profile.tagline}&quot;</p>
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mt-4"><MapPin className="w-4 h-4 text-primary" />{profile.location}</p>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}
