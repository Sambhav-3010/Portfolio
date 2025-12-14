"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import Main from "@/components/Main";
import Expertise from "@/components/Expertise";
import Timeline from "@/components/Timeline";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  const [mode, setMode] = useState("dark");

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500">
        <Navbar mode={mode} setMode={setMode} />
        <FadeIn transitionDuration={700}>
          <Main mode={mode} />
          <Expertise mode={mode} />
          <Timeline mode={mode} />
          <Project mode={mode} />
        </FadeIn>
        <Footer mode={mode} />
      </div>
    </div>
  );
}
