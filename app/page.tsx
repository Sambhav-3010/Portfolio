import { CompactHeader } from "@/components/CompactHeader"
import { BentoSections } from "@/components/BentoSections"
import { Contributions } from "@/components/Contributions"
import { LeetCodeContributions } from "@/components/LeetCodeContributions"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen pt-2 sm:pt-4">
      <CompactHeader />
      <BentoSections />
      <Contributions />
      <LeetCodeContributions />
      <Footer />
    </main>
  )
}
