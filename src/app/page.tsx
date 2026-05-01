import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-stretch">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
}
