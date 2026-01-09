import { CompactHeader } from "@/components/CompactHeader";
import { BentoSections } from "@/components/BentoSections";
import { Footer } from "@/components/Footer";
import { Contributions } from "@/components/Contributions";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 min-h-screen">
        <CompactHeader />
        <BentoSections />
        <Contributions />
        <Footer />
      </main>
    </div>
  );
}
