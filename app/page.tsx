import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Expertise from "@/components/Expertise";
import Timeline from "@/components/Timeline";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500">
      <Navbar />
      <div className="flex flex-col gap-0">
        <Main />
        <Expertise />
        <Timeline />
        <Project />
      </div>
      <Footer />
    </div>
  );
}
