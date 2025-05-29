"use client"
import Image from "next/image";
import { useTheme } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function Home() {
  const { theme, isDark, toggleTheme } = useTheme();
  return (
    <div className="md:grid grid-cols-4 relative h-screen">
      <div className="Sidebar col-span-1 bg-[#CAE8BD] text-black md:min-h-screen md:sticky top-0">
        <Sidebar />
      </div>
      <div className="MainContent col-span-3 bg-[#ECFAE5] overflow-y-auto">
        <About />
        <Education />
        <Experience />
        <Project />
      </div>
    </div>
  );
}
