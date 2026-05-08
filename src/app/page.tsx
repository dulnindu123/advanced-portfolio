import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import Terminal from "@/components/Terminal";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-stretch overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
        <EducationSection />
        <Terminal />
        <ContactSection />
      </main>
    </>
  );
}
