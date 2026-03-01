import { CompactHeader } from "@/components/CompactHeader";
import { BentoSections } from "@/components/BentoSections";
import { Footer } from "@/components/Footer";
import { Contributions } from "@/components/Contributions";
import { LeetCodeContributions } from "@/components/LeetCodeContributions";

export default function Home() {
  return (
    <div className="relative min-h-screen pt-16 md:pt-24">
      <main className="relative z-10 min-h-screen">
        <CompactHeader />
        <BentoSections />
        <Contributions />
        <LeetCodeContributions />
        <Footer />
      </main>
    </div>
  );
}
