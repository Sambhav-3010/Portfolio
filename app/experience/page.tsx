import { ArrowLeft, Eye, Briefcase, Users, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { experiences } from "@/data/experience"
import { profile } from "@/data/about"

export default function ExperiencePage() {
  const workExperiences = experiences.filter((exp) => exp.type === "experience")
  const leadershipRoles = experiences.filter((exp) => exp.type === "leadership")

  const renderExperienceCard = (exp: (typeof experiences)[0]) => (
    <article key={`${exp.company}-${exp.type}`} className="cream-card p-6 sm:p-8">
      <div className="flex items-start gap-4 mb-6">
        <Image src={exp.image} alt={exp.company} width={52} height={52} className="w-12 h-12 rounded-xl border border-border object-cover" />
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">{exp.company}</h3>
          <p className="inline-flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" /> {exp.location}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-[10px] top-1 bottom-1 border-l border-dashed border-primary/35" />
        <div className="space-y-7">
          {exp.roles.map((role) => (
            <div key={`${exp.company}-${role.period}-${role.title}`} className="relative pl-9">
              <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-secondary border-4 border-background" />
              <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mb-2">
                <Calendar className="w-4 h-4" />
                {role.period}
              </p>
              <h4 className="text-xl font-bold mb-3">{role.title}</h4>
              <ul className="space-y-2 text-muted-foreground mb-4">
                {role.description.map((point) => (
                  <li key={`${role.title}-${point}`} className="flex gap-2.5 leading-relaxed">
                    <span className="text-secondary font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span key={`${role.title}-${skill}`} className="pill-nav px-3 py-1 text-xs font-semibold text-foreground/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )

  return (
    <main className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Career Path</p>
            <h1 className="section-title text-[clamp(1.8rem,4vw,3.4rem)]!">Experience & Leadership</h1>
          </div>
          <a href={profile.resumeViewUrl} target="_blank" rel="noopener noreferrer" className="button-solid inline-flex items-center gap-2 px-6 py-3 text-sm">
            <Eye className="w-4 h-4" />
            View Resume
          </a>
        </div>

        <section className="space-y-6 mb-16">
          <h2 className="inline-flex items-center gap-2 text-2xl font-extrabold">
            <Briefcase className="w-6 h-6 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">{workExperiences.map(renderExperienceCard)}</div>
        </section>

        <section className="space-y-6">
          <h2 className="inline-flex items-center gap-2 text-2xl font-extrabold">
            <Users className="w-6 h-6 text-primary" />
            Leadership
          </h2>
          <div className="space-y-6">{leadershipRoles.map(renderExperienceCard)}</div>
        </section>
      </div>
    </main>
  )
}
